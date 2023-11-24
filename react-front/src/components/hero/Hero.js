import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  TextField,
  IconButton,
  Grid,
  Paper,
  Typography,
  InputAdornment
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import CircularProgress from '@mui/material/CircularProgress';
import Category from '../categoryList/Category';
import PostsCard from '../posts/PostsCard';

const Hero = () => {
  const [chatInput, setChatInput] = useState('');
  const [speechText, setSpeechText] = useState('');
  const [res, setRes] = useState({ gpt_response: '', recommendations: [] });
  const [filteredProd, setFilteredProd] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChatInputChange = (e) => {
    setChatInput(e.target.value);
    setSpeechText(''); // Clear speech text when typing
  };

  const handleChatSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/chat_with_gpt/`,
        { input: chatInput || speechText }
      );
      setRes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error submitting chat input', error);
      setRes({ gpt_response: '', recommendations: [] });
      setFilteredProd([]);
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
              return response.data;
            }
            return null; // Return null if id is undefined
          });
          const results = await Promise.all(fetchPromises);
          setFilteredProd(results.filter(item => item));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [res]);

  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Check for browser compatibility
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      setRecognition(recognitionInstance);
    } else {
      console.error("This browser doesn't support speech recognition.");
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      recognition.onstart = () => {setIsListening(true); setChatInput('')};
      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');
        setSpeechText(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
        recognition.stop();
        // Once text is obtained, you can call the GPT API here
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
          outline = 'none'
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
                border: 'none',  // Removes the border
              },
              '&:hover fieldset': {
                border: 'none',  // Optional: Remove border on hover
              },
              '& fieldset': {
                border: 'none',  // Optional: Remove border by default
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
            />
          </Grid>
        ))}
      </Grid>

      <Category />
    </Container>
  );
};

export default Hero;