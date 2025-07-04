import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";
import creatorRoutes from "./routes/creators.js";
import campaignRoutes from "./routes/campaigns.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(compression()); // Compress responses
app.use(express.json()); // for parsing application/json

// Routes - Make sure these match the API calls
app.use("/api/creators", creatorRoutes); // This should handle /api/creators
app.use("/api/campaigns", campaignRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Creator-Brand API is running 🚀");
});

app.get("/ping", (req, res) => {
  res.send("pong");
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
