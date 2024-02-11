import axios from "axios";

export const generateWord = async (): Promise<string> => {
  try {
    const response = await axios.get("https://random-word-api.herokuapp.com/word?number=2");

    return response["data"];
  } catch (error) {
    console.error("Error fetching random word:", error);
    return "";
  }
};
