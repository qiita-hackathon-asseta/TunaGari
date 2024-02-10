import { logger } from "firebase-functions/v1";
import { onRequest } from "firebase-functions/v2/https";

export const helloWorld = onRequest((req, res) => {
  logger.info("Hello World!");
  res.send("Hello from Firebase!");
});
