import translate, { DeeplLanguages } from "deepl";

const deepl_key = process.env.DEEPL_API_KEY === undefined ? "" : process.env.DEEPL_API_KEY;

export async function translateWord(text: string, target: DeeplLanguages) {
  try {
    const res = await translate({ free_api: true, text: text, target_lang: target, auth_key: deepl_key! });
    const result = res.data.translations;
    return result[0];
  } catch (error) {
    console.error("Translation error:", error);
    return {
      text: "",
    };
  }
}
