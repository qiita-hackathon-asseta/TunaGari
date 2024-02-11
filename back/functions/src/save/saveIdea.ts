import { https } from "firebase-functions";

const { admin } = require("../firebaseAdmin");

export const saveIdea = https.onRequest(async (req, res) => {
  try {
    // リクエストから必要な情報を取得
    const { userId, firstWord, secondWord, urls, memo } = req.body;

    // Firestoreにアクセスするためのユーザーの参照
    const userRef = admin.firestore().collection("users").doc(userId);

    // アイデアのサブコレクションに新しいドキュメントを追加
    const ideaRef = await userRef.collection("ideas").add({
      firstWord: firstWord,
      secondWord: secondWord,
      urls: urls,
      memo: memo,
    });

    // 保存が成功したことをクライアントに返す
    res.status(200).send(`Idea saved with ID: ${ideaRef.id}`);
  } catch (error: any) {
    // エラーが発生した場合、エラーメッセージを返す
    res.status(500).send(`Error saving idea: ${error.message}`);
  }
});
