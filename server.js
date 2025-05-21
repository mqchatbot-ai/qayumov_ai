import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = process.env.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;

app.post("/chat", async (req, res) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${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}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
