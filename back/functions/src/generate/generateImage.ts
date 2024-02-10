import { onRequest } from "firebase-functions/v1/https";
import { OpenAI } from "OpenAI";

require("dotenv").config();

export const generateImage = onRequest(async (req, res) => {
  const { firstWord, secondWord } = req.body;

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // TODO: 画像枚数・サイズの指定
    const image = await openai.images.generate({
      model: "dall-e-2",
      prompt: `Generage images of ${firstWord} and ${secondWord}`,
      n: 2,
      size: "256x256",
    });
    const first_image_url = image.data[0].url;
    const second_image_url = image.data[1].url;

    console.log("-------------------");
    console.log("Generated image", first_image_url, second_image_url);
    console.log("-------------------");

    res.status(200).send({ first_image_url, second_image_url });
  } catch (error: any) {
    // 料金のエラー
    if (error.code == "billing_hard_limit_reached") {
      // TODO: サンプル画像を返す？
      res.status(200).send(error.message);
    } else {
      console.error("Error generating image", error);
      res.status(500).send("Internal Server Error");
    }
  }
});
