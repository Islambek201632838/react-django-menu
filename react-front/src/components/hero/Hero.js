import React, { useState } from "react";
import axios from 'axios'
import {
  Box,
  Container,
  TextField,
} from "@mui/material";
import Category from "../categoryList/Category";

const Hero = () => {
  // State to store the chat input
  const [chatInput, setChatInput] = useState("");

  
  // Handler for chat input change
  const handleChatInputChange = (e) => {
    setChatInput(e.target.value);
  };

  // Handler for submitting the chat input
  const handleChatSubmit = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/chat_with_gpt/`,
            {
                params: {
                    input: chatInput,
                },
            }
        );
        const generatedResponse = response.data.response;
        console.log("Generated Response:", generatedResponse);
        // Handle the generated response as needed (e.g., display in UI)
    } catch (error) {
        console.error("Error submitting chat input:", error);
    }
};

  return (
    <Container>
      {/* Chat input component */}
      <Box mt={4} textAlign="center" marginTop={'100px'}>
        <h1>Ask Open AI</h1>        
        </Box>
      <Box mt={4} textAlign="center" marginBottom={'100px'}>
        <TextField
          label="Ask OpenAI..."
          variant="outlined"
          fullWidth
          value={chatInput}
          onChange={handleChatInputChange}
          onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
        />
      </Box>

      {/* Category component */}
      <Category />
    </Container>
  );
};

export default Hero;
