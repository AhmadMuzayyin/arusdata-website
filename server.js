const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Demo redirect
app.get('/demo/chat/', (req, res) => {
  res.redirect('http://localhost:3000/'); // Redirect to chat demo
});
app.get('/getting-started', (req, res) => {
  res.sendFile(path.join(__dirname, 'getting-started.html'));
});

app.get('/api-reference', (req, res) => {
  res.sendFile(path.join(__dirname, 'api-reference.html'));
});

app.get('/examples', (req, res) => {
  res.sendFile(path.join(__dirname, 'examples.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'faq.html'));
});

app.get('/release-notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'release-notes.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Landing page server running on http://localhost:${PORT}`);
});