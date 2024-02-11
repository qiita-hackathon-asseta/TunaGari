import { onRequest } from "firebase-functions/v1/https";
import { generateWord } from "./generateWord";
import { generateImage } from "./generateImage";
import { translateWord } from "./translation";

export const wordToImage = onRequest(async (req, res) => {
  try {
    // 単語を生成
    const randomWords = await generateWord();
    console.log("------------");
    console.log(`randomWords: ${randomWords[0]}, ${randomWords[1]}`);
    console.log("------------");

    // 単語を翻訳
    const firstWord = await translateWord(randomWords[0], "JA");
    const secondWord = await translateWord(randomWords[1], "JA");

    if (firstWord.text == "" || secondWord.text == "") {
      res.status(500).send("Error translating word");
      return;
    }

    // 画像を生成
    const generateResult = await generateImage(randomWords[0], randomWords[1], 2);

    // リクエストを返す
    if (generateResult.status == "success") {
      res.status(200).send({
        firstWord: firstWord.text,
        secondWord: secondWord.text,
        imageUrl: generateResult.imageUrls,
        imageCount: generateResult.imageCount,
      });
    } else {
      res.status(500).send({
        errorCode: "IMAGE_GENERATION_ERROR",
        message: `Error generating image: ${generateResult.message}`,
        firstWord: firstWord.text,
        secondWord: secondWord.text,
      });
    }
  } catch (error: any) {
    console.error("Error generating word to image:", error);
    res.status(500).send({
      errorCode: "INTERNAL_SERVER_ERROR",
      message: error.message,
    });
  }
});
