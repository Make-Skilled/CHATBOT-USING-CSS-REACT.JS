const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;
const COHERE_API_KEY = 'PHt3i2hge5Q4sj7KKYa1KzPZk3bxZcO9bYl4MklT';

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ error: 'Prompt is required.' });
  }
  try {
    // Prepend instruction for concise answer
    const concisePrompt = `Reply in 2-3 short sentences. ${prompt}`;
    const response = await axios.post(
      'https://api.cohere.ai/generate',
      {
        model: 'command',
        prompt: concisePrompt,
        max_tokens: 400,
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
    const text = response.data.text?.trim() || response.data.generations?.[0]?.text?.trim() || '';
    res.json({ text });
  } catch (error) {
    console.error('Cohere API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from Cohere.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 