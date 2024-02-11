import { https } from "firebase-functions";

const admin = require("firebase-admin");

export const getAllIdeas = https.onRequest(async (req, res) => {
  admin.initializeApp();

  try {
    const userId = req.query.userId;

    if (!userId) {
      throw new Error("User ID is required.");
    }

    // Get a reference to the user's ideas collection
    const ideasCollection = admin
      .firestore()
      .collection(`users/${userId}/ideas`);

    // Get all ideas for the specified user
    const snapshot = await ideasCollection.get();

    const ideas: any[] = [];
    snapshot.forEach((doc: any) => {
      const idea = doc.data();
      ideas.push(idea);
    });

    res.json(ideas);
    res.status(200);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
