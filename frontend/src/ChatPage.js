import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import './ChatBot.css';
import axios from 'axios';

function ChatPage() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { text: input, isUser: true };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await axios.post('/api/chat', { prompt: input });
      const botMsg = { text: res.data.text || 'Sorry, I could not respond.', isUser: false };
      setMessages((msgs) => [...msgs, botMsg]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { text: 'Error: Could not get response.', isUser: false }]);
    }
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">ChatBot</div>
      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((msg, idx) => (
          <Message key={idx} text={msg.text} isUser={msg.isUser} />
        ))}
        {loading && <div className="loading-indicator">Cohere is typing...</div>}
      </div>
      <form className="input-area" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatPage; 