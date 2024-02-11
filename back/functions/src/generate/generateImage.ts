import { OpenAI } from "OpenAI";

require("dotenv").config();

export async function generateImage(firstWord: string, secondWord: string, imageCount: number): Promise<any> {
  let result = {};

  // 画像生成
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // 画像枚数・サイズの指定
    const image = await openai.images.generate({
      model: "dall-e-2",
      prompt: `Generage images of ${firstWord} and ${secondWord}`,
      n: imageCount,
      size: "256x256",
    });
    const imageUrls = image.data;

    console.log("-------------------");
    console.log("prompt", `Generage images of ${firstWord} and ${secondWord}`);
    console.log("Generated image", imageUrls);
    console.log("-------------------");

    result = {
      words: {
        firstWord: firstWord,
        secondWord: secondWord,
      },
      imageCount: imageCount,
      imageUrls: imageUrls,
      status: "success",
    };
  } catch (error: any) {
    console.error("Error generating image", error);
    result = {
      status: "error",
      message: error.message,
    };
  }

  return result;
}
