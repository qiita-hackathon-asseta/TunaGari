// import { onRequest } from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import { initializeApp } from "firebase/app";
import { wordToImage } from "./src/generate/wordToImage";
import { saveIdea } from "./src/save/saveIdea";
import { getAllIdeas } from "./src/get/getAllIdeas";
// import { helloWorld } from "./src/test/helloWorld";

require("dotenv").config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

// テスト
exports.helloWorld = helloWorld;

// 本番用
exports.wordToImage = wordToImage;
exports.saveIdea = saveIdea;
exports.getAllIdeas = getAllIdeas;
