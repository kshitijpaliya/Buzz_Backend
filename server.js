import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import creatorRoutes from "./routes/creators.js";
// import videoRoutes from "./routes/videos.js";
import campaignRoutes from "./routes/campaigns.js"; // Add this line

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Routes
app.use("/api/creators", creatorRoutes); // Public dashboard route
// app.use("/api/videos", videoRoutes);
app.use("/api/campaigns", campaignRoutes); // Add this line

// Root route
app.get("/", (req, res) => {
  res.send("Creator-Brand API is running 🚀");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
