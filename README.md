# AI ChatBot App

A modern, full-stack AI chatbot web application. Chat in real time with an AI assistant powered by Cohere, featuring a beautiful, responsive UI and a secure, privacy-focused backend.

---

## Features
- Real-time conversational AI (Cohere-powered)
- Full-screen, immersive chat UI
- Responsive, mobile-friendly design
- Message bubbles, loading indicator, and friendly answers
- No data stored; privacy-first
- Easy to customize (UI, prompt, API key)

---

## Prerequisites
- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js)
- **Cohere API Key** ([Get one here](https://dashboard.cohere.com/api-keys))

---

## Step-by-Step Setup Guide

### 1. Clone the Repository
```bash
# Replace <your-repo-url> with the actual URL
git clone <your-repo-url>
cd chatbot-app
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Set Your Cohere API Key
- Open `backend/server.js` in a text editor.
- Find the line:
  ```js
  const COHERE_API_KEY = '...';
  ```
- Replace the value with your own Cohere API key (get it from https://dashboard.cohere.com/api-keys).

### 5. Start the Backend Server
```bash
cd ../backend
node server.js
# The backend will run on http://localhost:5000
```

### 6. Start the Frontend App (in a new terminal window)
```bash
cd frontend
npm start
# The frontend will run on http://localhost:3000 and open in your browser
```

---

## Usage
- Go to [http://localhost:3000](http://localhost:3000) in your browser.
- Type your message and press **Send**.
- The bot will reply instantly with a concise, friendly answer.

---

## API Reference
### POST `/api/chat`
- **Request body:** `{ "prompt": "Your message here" }`
- **Response:** `{ "text": "AI response" }`
- **Error:** `{ "error": "Error message" }`

---

## Customization
- **Cohere API Key:** Edit `backend/server.js` (`COHERE_API_KEY`)
- **Answer style/length:** Edit the prompt instruction in `backend/server.js`
- **UI styles:** Edit `frontend/src/ChatBot.css` and `frontend/src/Home.css`
- **Change initial greeting:** Edit the first message in `frontend/src/ChatPage.js`

---

## Deployment
- **Frontend:**
  - Build for production:
    ```bash
    cd frontend
    npm run build
    ```
  - Deploy the `build/` folder to your static hosting (Vercel, Netlify, etc.)
- **Backend:**
  - Deploy `backend/` to your Node.js server (Heroku, Render, etc.)
  - Set your Cohere API key securely (use environment variables in production)

---

## Troubleshooting
- **Cohere API errors:** Check your API key and internet connection
- **Port conflicts:** Make sure nothing else is running on ports 3000 (frontend) or 5000 (backend)
- **CORS issues:** The backend uses CORS; the frontend proxies API requests via `frontend/package.json`

---

## License
MIT (or specify your own)

---

## Acknowledgments
- [Cohere](https://cohere.com/) for the AI API
- [React](https://react.dev/) and [Express](https://expressjs.com/) for the app framework 