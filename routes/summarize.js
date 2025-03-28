// routes/summarize.js
const express = require('express');
const router = express.Router();
const summarizeText = require('../utils/openaiSummarizer');

router.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    const summary = await summarizeText(text);
    res.json({ summary });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error generating summary');
  }
});

module.exports = router;
