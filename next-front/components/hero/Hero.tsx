'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box, Container, TextField, IconButton, Grid, Paper, Typography, InputAdornment, CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import Category from '../categoryList/Category';
import PostsCard from '../posts/PostsCard';

// Define interfaces for your data types
interface ProductType {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  price: number;
  // other fields...
}

interface RecommendationType {
  id: number;
  // other fields...
}

interface ResponseType {
  gpt_response: string;
  recommendations: RecommendationType[];
}

const Hero = () => {
  const [chatInput, setChatInput] = useState('');
  const [speechText, setSpeechText] = useState('');
  const [res, setRes] = useState<ResponseType>({ gpt_response: '', recommendations: [] });
  const [filteredProd, setFilteredProd] = useState<ProductType[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  const handleChatInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
    setSpeechText('');
  };

  const handleChatSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/chat_with_gpt/`,
        { input: chatInput || speechText }
      );
      setRes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error submitting chat input', error);
      setError('Error submitting chat input');
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (res.recommendations.length > 0) {
          const fetchPromises = res.recommendations.map(async (item) => {
            if (item.id) {
              const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/details/${item.id}`
              );
              return response.data as ProductType;
            }
            return null;
          });
          const results = await Promise.all(fetchPromises);
          setFilteredProd(results.filter(item => item !== null) as ProductType[]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [res]);

  useEffect(() => {
    // Speech recognition setup
    interface CustomWindow extends Window {
      SpeechRecognition: any;
      webkitSpeechRecognition: any;
    }
    const customWindow: CustomWindow = window as unknown as CustomWindow;

    const SpeechRecognition = customWindow.SpeechRecognition || customWindow.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      setRecognition(recognitionInstance);
    } else {
      setError("This browser doesn't support speech recognition.");
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      recognition.onstart = () => {
        setIsListening(true);
        setChatInput('');
      };
      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map(result => result.transcript)
          .join('');
        setSpeechText(transcript);
      };
      recognition.onend = () => {
        setIsListening(false);
        recognition.stop();
      };
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
      handleChatSubmit();
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <Container>
      <Box mt={4} textAlign="center" marginTop={'100px'}>
        <Typography variant="h4">Ask Open AI</Typography>
      </Box>

      <Paper elevation={3} sx={{ padding: 0, marginTop: 4, display: 'flex', alignItems: 'center', borderRadius: '4px' }}>
        <TextField
          fullWidth
          placeholder="Ask OpenAI..."
          value={chatInput || speechText}
          onChange={handleChatInputChange}
          onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={toggleListening}
                            style={{ color: isListening ? 'red' : 'grey' }}>
                <MicIcon />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleChatSubmit} disabled={!chatInput}>
                <SendIcon style={{ color: chatInput ? 'blue' : 'grey' }} />
              </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '& fieldset': {
                border: 'none',
              },
            },
          }}
        />
      </Paper>
      <Typography marginTop='10px' textAlign='center' color='red' variant="h5">{error}</Typography>
      {loading && (
        <Box display="flex" justifyContent="center" my={5}>
          <CircularProgress />
        </Box>
      )}
      <Box mt={4}>
        <Typography variant="h5">{res.gpt_response}</Typography>
      </Box>
      
      <Grid container spacing={2} mt={2}>
        {filteredProd.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PostsCard
              title={item.title}
              excerpt={item.excerpt}
              image={`${process.env.REACT_APP_API_URL}${item.image}`}
              price={item.price}
              blogHref={`/details/${item.id}`}
              myDirection={"flex"}
            />
          </Grid>
        ))}
      </Grid>

      <Category />
    </Container>
  );
};

export default Hero;
