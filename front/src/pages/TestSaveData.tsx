// src/pages/YourPage.tsx (ページに応じてファイル名やパスは変更してください)
import { saveIdea } from "../api/cloudFunctions";

export const TestSaveData = () => {
  const handleSaveIdea = async () => {
    try {
      const data = {
        uid: "yourUserId", //TODO:ユーザーIDは適切な方法で取得してください
        word1: "First Word",
        word2: "Second Word",
        generatedImageURLs: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
        ],
        memo: "This is a memo",
      };

      await saveIdea(data);
      console.log("Idea saved successfully!");
    } catch (error) {
      console.error("Error saving idea:", error);
    }
  };

  return (
    <div>
      <h1>TestSaveData Page</h1>
      <button onClick={handleSaveIdea}>Save Idea</button>
    </div>
  );
};
