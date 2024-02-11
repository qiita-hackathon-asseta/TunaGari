// src/services/cloudFunctions.ts
import axios from "axios";

interface SaveIdeaData {
  userId: string;
  firstWord: string;
  secondWord: string;
  urls: string[];
  memo: string;
}

export const saveIdea = async (data: SaveIdeaData) => {
  try {
    if (data === undefined) {
      throw new Error("データがありません。");
    }

    const functionsURL: string = process.env.REACT_APP_DEV_FUNCTIONS_URL || "";

    const response = await axios.post(`${functionsURL}/saveIdea`, data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
