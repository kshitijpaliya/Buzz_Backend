import mongoose from "mongoose";
import User from "./user.js"; // Assuming you have a User model
const CreatorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  handles: [
    {
      type: String,
      unique: true, // Ensure unique handle for each creator
    },
  ],
  location: { type: String },
  followers: { type: Number },
  niche: [{ type: String }], // e.g., ['Lifestyle', 'Fitness']
  videoType: [{ type: String }], // e.g., ['Unboxing', 'GRWM']
  agegroup: { type: String }, // e.g., "18-24
  platform: { type: String }, // e.g., "Instagram", "YouTube"
  price: { type: Number }, // Price per video/collab
  avatar: { type: String }, // Optional profile image
  // Link to uploaded videos
  videos: { type: String }, // URL to the video or a JSON array of video URLs
});

export default mongoose.models.Creator ||
  mongoose.model("Creator", CreatorSchema);
