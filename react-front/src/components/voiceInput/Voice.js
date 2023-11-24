import React, { useState, useEffect } from 'react';


const SpeechToText = ({speechText, setSpeechText}) => {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState('');
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
      recognition.onstart = () => setIsListening(true);
      
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
        callGPTAPI(text);
      };
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const callGPTAPI = async (inputText) => {
    // Implement the API call to OpenAI with the text
    console.log('Sending to GPT API:', inputText);
    // Make sure to handle API calls asynchronously
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
    >
      <IconButton
        color="primary"
        onClick={toggleListening}
        aria-label={isListening ? 'Stop listening' : 'Start listening'}
      >
        {isListening ? <MicOffIcon /> : <MicIcon />}
      </IconButton>
    </Box>
  );
};

export default SpeechToText;
