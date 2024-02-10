import { onRequest } from "firebase-functions/v1/https";

const { GoogleGenerativeAI } = require("@google/generative-ai");

export const generateImage = onRequest(async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const firstWord = req.body.firstWord == null ? "" : req.body.firstWord;
  const secondWord = req.body.secondWord == null ? "" : req.body.secondWord;
  console.log(`firstWord: ${firstWord}`);
  console.log(`secondWord: ${secondWord}`);

  async function run() {
    const prompt = "Write a story about a magic backpack.";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response.text);
    return response.text();
  }

  try {
    const text = await run();
    console.log(text);
    res.send(text);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating image!");
  }
});
