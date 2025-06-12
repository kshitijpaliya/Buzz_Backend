import mongoose from "mongoose";
import express from "express";
// Replace with your actual MongoDB connection string
const MONGO_URI = "";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const creatorSchema = new mongoose.Schema({
  niches: [String],
  videotypes: [String],
  creatortags: [String],
  // ... other fields
});

const Creator = mongoose.model("Creator", creatorSchema);

async function fetchUniqueFields() {
  try {
    const [niches, videotypes, creatortags] = await Promise.all([
      Creator.distinct("niche"),
      Creator.distinct("videoType"),
      Creator.distinct("creatortags"),
    ]);

    return { niches, videotypes, creatortags };
  } catch (err) {
    console.error("Error fetching unique fields:", err);
    throw err;
  }
}

// Example usage (Express route)
const app = express();

app.get("/api/unique-fields", async (req, res) => {
  try {
    const data = await fetchUniqueFields();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch unique fields" });
  }
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});
