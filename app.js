// app.js
const express = require('express');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

// Create the Express app FIRST
const app = express();
const port = process.env.PORT || 3000;

// THEN configure middleware and routes
app.use(express.json());
app.use(express.static('public'));  // ← This line must come after app is defined

// Import and use API routes
const summarizeRoute = require('./routes/summarize');
const analyzeAudioRoute = require('./routes/analyze-audio');

app.use('/summarize', summarizeRoute);
app.use('/analyze-audio', analyzeAudioRoute);

// Start the server
app.listen(port, () => {
  console.log(`✅ FocusFlow AI is running at http://localhost:${port}`);
});
