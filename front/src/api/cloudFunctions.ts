// src/services/cloudFunctions.ts
import axios from "axios";

interface SaveIdeaData {
  uid: string;
  word1: string;
  word2: string;
  generatedImageURLs: string[];
  memo: string;
}

export const saveIdea = async (data: SaveIdeaData) => {
  try {
    if (data === undefined) {
      throw new Error("Data is undefined.");
    }

    const functionsURL: string = process.env.REACT_APP_DEV_FUNCTIONS_URL || "";

    console.log(functionsURL);

    if (functionsURL === "") {
      throw new Error("Functions URL is not defined.");
    }

    const response = await axios.post(`${functionsURL}/saveIdea` || "", data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
