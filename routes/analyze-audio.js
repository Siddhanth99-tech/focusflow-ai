const express = require('express');
const multer = require('multer');
const path = require('path');
const analyzeSpeech = require('../utils/azureSpeechToText');
const summarizeText = require('../utils/openaiSummarizer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('audio'), async (req, res) => {
  try {
    const audioPath = path.join(__dirname, '..', req.file.path);
    const result = await analyzeSpeech(audioPath);

    const summary = await summarizeText(result.transcript);

    res.json({
      ...result,
      summary
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error analyzing audio');
  }
});

module.exports = router;
