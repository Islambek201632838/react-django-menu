import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, TextField, Grid } from '@mui/material';
import Category from '../categoryList/Category';
import PostsCard from '../posts/PostsCard';

const Hero = () => {
  const [chatInput, setChatInput] = useState('');
  const [res, setRes] = useState({ gpt_response: '', recommendations: [] });
  const [filteredProd, setFilteredProd] = useState([]);

  const handleChatInputChange = (e) => {
    setChatInput(e.target.value);
  };

  const handleChatSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/chat_with_gpt/`,
        { input: chatInput }
      );
      setRes(response.data); // Assuming the response structure matches your backend
    } catch (error) {
      console.error('Error submitting chat input:', error);
      setRes({ gpt_response: '', recommendations: [] }); // Resetting state on error
      setFilteredProd([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (res.recommendations.length > 0) {
          // Fetch details for each recommendation
          const fetchPromises = res.recommendations.map(async (item) => {
            if (item.id) { 
              const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/details/${item.id}`
              );
              
              return response.data;
            }
            else {
              console.log('empty')
            }
            return null; // Return null if id is undefined
          });
  
          const results = await Promise.all(fetchPromises);
          setFilteredProd(results.filter(item => item)); 
          console.log(results.length)// Filter out null values
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [res]);
  
  

  return (
    <Container>
      <Box mt={4} textAlign="center" marginTop={'100px'}>
        <h1>Ask Open AI</h1>
      </Box>
      <Box mt={4} textAlign="center" marginBottom={'30px'}>
        <TextField
          label="Ask OpenAI..."
          variant="outlined"
          fullWidth
          value={chatInput}
          onChange={handleChatInputChange}
          onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
        /> 
      </Box>
      <div>{res.gpt_response}</div>
      <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction={"column"}>
        {filteredProd && filteredProd.map((item, index) => (
          <PostsCard
            key={index}
            title={item.title}
            excerpt={item.excerpt}
            image={`${process.env.REACT_APP_API_URL}${item.image}`}
            price={item.price}
            blogHref={`/details/${item.id}`}
            myDirection={'flex'}
          />
        ))}
      </Grid>
      <Category />
    </Container>
  );
};

export default Hero;
