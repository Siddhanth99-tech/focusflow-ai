const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");
const axios = require("axios");

async function analyzeSpeech(audioPath) {
  const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
  const audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync(audioPath));
  const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

  return new Promise((resolve, reject) => {
    recognizer.recognizeOnceAsync(async (result) => {
      if (result.reason === sdk.ResultReason.RecognizedSpeech) {
        const text = result.text;

        // Sentiment Analysis
        const sentimentResult = await axios.post(
          `${process.env.AZURE_ENDPOINT}text/analytics/v3.1/sentiment`,
          { documents: [{ id: "1", language: "en", text }] },
          { headers: { "Ocp-Apim-Subscription-Key": process.env.AZURE_SUBSCRIPTION_KEY } }
        );

        resolve({
          transcript: text,
          sentiment: sentimentResult.data.documents[0]
        });
      } else {
        reject("Speech not recognized.");
      }
    });
  });
}

module.exports = analyzeSpeech;
