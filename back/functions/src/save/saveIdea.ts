import { https } from "firebase-functions";

const admin = require("firebase-admin");
admin.initializeApp();

export const saveIdea = https.onRequest(async (req, res) => {
  try {
    // リクエストから必要な情報を取得
    const { uid, word1, word2, generatedImageURLs, memo } = req.body;

    // Firestoreにアクセスするためのユーザーの参照
    const userRef = admin.firestore().collection("users").doc(uid);

    // アイデアのサブコレクションに新しいドキュメントを追加
    const ideaRef = await userRef.collection("ideas").add({
      word1: word1,
      word2: word2,
      generatedImageURLs: generatedImageURLs,
      memo: memo,
    });

    // 保存が成功したことをクライアントに返す
    res.status(200).send(`Idea saved with ID: ${ideaRef.id}`);
  } catch (error: any) {
    // エラーが発生した場合、エラーメッセージを返す
    res.status(500).send(`Error saving idea: ${error.message}`);
  }
});
