import { Request, Response, NextFunction } from "express";
const express = require("express");
const cors = require("cors");

const ModelClient = require("@azure-rest/ai-inference").default;
const { AzureKeyCredential } = require("@azure/core-auth");
const { isUnexpected } = require("@azure-rest/ai-inference");

require("dotenv").config();

const app = express();
const PORT = 5000;

const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";
const token = process.env.GITHUB_TOKEN;

const client = ModelClient(endpoint, new AzureKeyCredential(token));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(express.json());

// app.post("/api/chat", async (req, res) => {
//   const { message } = req.body;
//   console.log("Received message:", message);
//   res.json({ reply: `You said: ${message}` });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

app.post("/api/chat", async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: message },
        ],
        temperature: 1,
        top_p: 1,
        model: model,
      },
    });

    if (isUnexpected(response)) {
      throw response.body.error;
    }

    const reply = response.body.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("GitHub AI Error:", error);
    res.status(500).json({ error: "Failed to fetch response from GitHub AI" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
