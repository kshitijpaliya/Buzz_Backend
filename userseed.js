import mongoose from "mongoose";
import User from "./models/User.js";
const MONGO_URI = "";

const creatorNames = [
  { name: "Sriparna Tarafdar" },
  { name: "Namish Sachdeva" },
  { name: "Mohit Khubani" },
  { name: "Aryan Sharma" },
  { name: "Vishesh Kataria" },
  { name: "Piyush Bhidola" },
  { name: "Dr.Yash Gupta" },
  { name: "Rishi Khandelwal" },
  { name: "Harshal Chavan" },
  { name: "Danish Sharma" },
  { name: "Nazil Khan" },
  { name: "Bhavay Jain" },
  { name: "Nishant" },
  { name: "Priyanka Dhingra" },
  { name: "Jyoti Mittal" },
  { name: "Srishti Sachdeva Bhatia" },
  { name: "Kanak Goyal" },
  { name: "Prerna" },
  { name: "Prakrati Sharma" },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    for (const { name, gender } of creatorNames) {
      try {
        const user = await User.create({
          name: name,
          email: `${name.toLowerCase().replace(/\s+/g, "")}@example1.com`,
          passwordHash: "", // Add logic if needed
          avatar: "", // Add default avatar logic if needed
          role: "creator",
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
