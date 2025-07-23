import React from 'react';
import './ChatBot.css';

function Message({ text, isUser }) {
  return (
    <div className={`message-bubble ${isUser ? 'user' : 'bot'}`}>
      {text}
    </div>
  );
}

export default Message; 