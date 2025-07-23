import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="home-root home-root-full">
      <div className="home-greeting">
        <span className="wave">👋</span>
        <span className="greeting-text">Hi there! Welcome to your AI ChatBot</span>
      </div>
      <h1 className="home-title">ChatBot App</h1>
      <p className="home-desc">Your personal AI assistant, ready to chat, answer questions, and help you anytime. Enjoy instant, friendly, and secure conversations—right here in your browser!</p>
      <ul className="home-features">
        <li>💬 Real-time conversational AI</li>
        <li>🔒 Secure and private</li>
        <li>⚡ Fast, responsive UI</li>
        <li>🎨 Modern, clean design</li>
        <li>📱 Mobile-friendly</li>
      </ul>
      <div className="home-btn-group">
        <button
          className="home-btn"
          onClick={() => navigate('/chat')}
        >
          Start Chatting
        </button>
        <button
          className="home-learn-btn"
          onClick={() => setShowMore((v) => !v)}
        >
          {showMore ? 'Hide Details' : 'Learn More'}
        </button>
      </div>
      {showMore && (
        <div className="home-more">
          <p>This chatbot is designed to provide helpful, context-aware responses. Whether you need information, support, or just a friendly chat, your AI assistant is here for you—anytime, anywhere.</p>
          <ul>
            <li>🤝 Always available to help</li>
            <li>🌐 Works on all modern browsers</li>
            <li>🛠️ Easy to use and enjoy</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home; 