import mongoose from "mongoose";
import User from "./models/User.js";
const MONGO_URI =
  "mongodb+srv://studyforsixmonths:kshitij15pal@buzz.l1iomfs.mongodb.net/?retryWrites=true&w=majority&appName=buzz";

const creatorNames = [
  // { name: "Arpit Yadav", gender: "Male" },
  // { name: "Suprith Shetty", gender: "Male" },
  // { name: "Shruti Agrawal", gender: "Female" },
  // { name: "Sanjana Sharma", gender: "Female" },
  // { name: "Vidushi", gender: "Female" },
  // { name: "Goutam Sree Govind", gender: "Male" },
  // { name: "Anika", gender: "Female" },
  // { name: "Mehak Agrawal", gender: "Female" },
  // { name: "Hitika", gender: "Female" },
  // { name: "Regan Gupta", gender: "Female" },
  // { name: "Shivani Baraily", gender: "Female" },
  { name: "Bageera", gender: "Male" }, // Gender not specified
  // { name: "Aurelia Menezes", gender: "Female" },
  // { name: "Neha Sharma", gender: "Female" },
  // { name: "Madhavi Gorecha", gender: "Female" },
  // { name: "Megha Birlan", gender: "Female" },
  // { name: "Anshika Kodari", gender: "Female" },
  // { name: "Hema.H", gender: "Female" },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    for (const { name, gender } of creatorNames) {
      try {
        const user = await User.create({
          name: name,
          email: `${name.toLowerCase().replace(/\s+/g, "")}@example.com`,
          passwordHash: "", // Add logic if needed
          avatar: "", // Add default avatar logic if needed
          role: "creator",
          gender: gender,
        });

        console.log(`👤 Created user: ${name} (ID: ${user._id})`);
      } catch (error) {
        console.error(`❌ Error creating ${name}:`, error.message);
      }
    }

    console.log("🎉 Seeding completed!");
    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
  }
}

seed();
