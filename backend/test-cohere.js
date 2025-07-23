const axios = require('axios');
const COHERE_API_KEY = 'PHt3i2hge5Q4sj7KKYa1KzPZk3bxZcO9bYl4MklT';

(async () => {
  try {
    const response = await axios.post(
      'https://api.cohere.ai/generate',
      {
        model: 'command',
        prompt: 'Hello, how are you?',
        max_tokens: 100,
        temperature: 0.7,
        k: 0,
        stop_sequences: [],
        return_likelihoods: 'NONE',
      },
      {
        headers: {
          'Authorization': `Bearer ${COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Cohere API response:', response.data);
  } catch (error) {
    console.error('Cohere API error:', error.response?.data || error.message);
  }
})();