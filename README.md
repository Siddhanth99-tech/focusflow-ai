

```md
# 🎙️ FocusFlow AI – The Emotional Voice Journal

FocusFlow AI is a voice-powered journaling assistant that helps users reflect, process emotions, and receive gentle encouragement — powered by Azure AI and OpenAI.

Built for the Azure AI Developer Hackathon, it transcribes voice reflections, detects emotional tone, summarizes content, and delivers mood-boosting affirmations when needed.

---

## 💡 Features

- 🎤 **Voice-to-Text Journaling**  
  Upload `.wav` audio files to transcribe your thoughts using Azure Speech Services.

- 🧠 **Emotional Sentiment Detection**  
  Analyze the emotional tone of your journal entry via Azure Text Analytics.

- ✨ **Smart Summarization with GPT**  
  Summarizes your voice or typed input using Azure OpenAI’s GPT-3.5 model.

- 💙 **Mood Boosters**  
  If your sentiment is negative, you’ll receive a motivational affirmation or emotional support message.

- 📝 **Manual Text Summarizer**  
  Prefer typing? Paste long thoughts and get summaries + mood boosters too.

- 🌗 **Dark & Light Mode**  
  Toggle friendly UIs for comfort.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express
- **Azure Services:**
  - Azure Speech-to-Text
  - Azure Text Analytics
  - Azure OpenAI (GPT-3.5 Turbo)
- **Dev Tools:** GitHub Copilot, VS Code

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/focusflow-ai.git
cd focusflow-ai
npm install
```

### 2. Create Your `.env` File

Create a `.env` file in the root with the following:

```env
AZURE_SUBSCRIPTION_KEY=your-text-analytics-key
AZURE_ENDPOINT=https://<your-region>.api.cognitive.microsoft.com/

OPENAI_API_KEY=your-azure-openai-key
OPENAI_ENDPOINT=https://<your-resource-name>.openai.azure.com/

SPEECH_KEY=your-speech-api-key
SPEECH_REGION=your-region
```


---

### 3. Run the App

```bash
npm start
```

Go to:  
📍 `http://localhost:3000`

---

## 🧪 How to Use

1. Upload a `.wav` voice file — or paste some text manually.
2. Click **Analyze** or **Summarize**.
3. See:
   - 📄 Transcript
   - 💬 Sentiment analysis
   - 📝 GPT-powered summary
   - 💙 Mood booster (if needed)
4. Optional: Download your journal summary.

---

## 🧠 Use Cases

- Daily productivity/emotion check-ins
- Mental health journaling
- Digital wellness tracking
- AI-enhanced emotional support

---

## 🏆 Submission Info

- 🎯 Hackathon: Azure AI Developer Hackathon 2025
- 🧠 Categories:
  - Best Use of Azure AI
  - Best Azure App Integration
  - Best Use of GitHub Copilot
---

## 🤖 GitHub Copilot Used For

- Generating API routes
- Handling async errors
- UI code (form handling, DOM logic)
- Prompt formatting for GPT

---

## 💬 Contact

[LinkedIn](https://linkedin.com/in/siddhanth-pai99)  
[GitHub](https://github.com/Siddhanth99-tech)

---
