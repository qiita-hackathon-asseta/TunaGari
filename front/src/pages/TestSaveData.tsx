// src/pages/YourPage.tsx (ページに応じてファイル名やパスは変更してください)
import { saveIdea } from "../api/cloudFunctions";

export const TestSaveData = () => {
  const handleSaveIdea = async () => {
    try {
      const data = {
        userId: "yourUserId", //TODO:ユーザーIDは適切な方法で取得してください
        firstWord: "First Word",
        secondWord: "Second Word",
        urls: [
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
