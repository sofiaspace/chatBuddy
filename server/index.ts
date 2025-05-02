import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

dotenv.config();

const app = express();

const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";
const token = process.env.GITHUB_TOKEN;

if (!token) {
  throw new Error("GITHUB_TOKEN is not defined in the environment variables.");
}

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
