import mongoose from "mongoose";
import Campaign from "./models/Campaign.js"; // Adjust the path as necessary
// Replace with your MongoDB connection string
const MONGODB_URI =
  "mongodb+srv://studyforsixmonths:kshitij15pal@buzz.l1iomfs.mongodb.net/?retryWrites=true&w=majority&appName=buzz";

// Replace with the correct path to your Campaign model

async function deleteAllCampaigns() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const result = await Campaign.deleteMany({});
    console.log(`Deleted ${result.deletedCount} campaigns.`);
  } catch (error) {
    console.error("Error deleting campaigns:", error);
  } finally {
    await mongoose.disconnect();
  }
}

deleteAllCampaigns();
