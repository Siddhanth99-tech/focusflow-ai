const axios = require('axios');

const endpoint = process.env.OPENAI_ENDPOINT;
const apiKey = process.env.OPENAI_API_KEY;
const deploymentId = "gpt-35-turbo"; // Replace if your deployment name differs
const apiVersion = "2023-12-01-preview"; // Confirm this matches your Azure version

async function summarizeText(text) {
  try {
    const url = `${endpoint}openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;

    const messages = [
      {
        role: "system",
        content: "You are a compassionate emotional wellness assistant. Summarize the user's message and provide a short mood booster if the tone is emotionally low."
      },
      {
        role: "user",
        content: `Here is what the user said:\n\n"${text}"\n\nPlease respond in the following exact format:\n\nSummary: <max 2 sentences>\n\nMood Booster: <1 short sentence under 25 words, only if needed>`
      }
    ];

    const response = await axios.post(url, {
      messages,
      temperature: 0.7
    }, {
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey
      }
    });

    const content = response.data.choices[0].message.content;

    // Parse the response safely
    const [summaryRaw, boosterRaw] = content.split("Mood Booster:");

    const summary = summaryRaw?.replace(/^Summary:\s*/i, '').trim().slice(0, 300);
    const booster = boosterRaw?.trim().slice(0, 200) || "You're doing great — keep going one step at a time. 💙";

    return `Summary: ${summary}\n\nMood Booster: ${booster}`;

  } catch (error) {
    console.error("❌ GPT Summarizer error:", error.response?.data || error.message);
    throw error;
  }
}

module.exports = summarizeText;
