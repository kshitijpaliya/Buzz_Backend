import mongoose from "mongoose";
import User from "./models/User.js";
const MONGO_URI =
  "mongodb+srv://studyforsixmonths:kshitij15pal@buzz.l1iomfs.mongodb.net/?retryWrites=true&w=majority&appName=buzz";

const creatorNames = [
  // { name: "Arushi Garg" },
  // { name: "Aayushi Gupta" },
  // { name: "Bhaavya gupta" },
  // { name: "Dhelie" },
  // { name: "Enu" },
  // { name: "Ishita Bhatt" },
  // { name: "Karabi Kashyap" },
  { name: "Khushi" },
  // { name: "shourye" },
  // { name: "Shreya Gaggar" },
  // { name: "Sneh gaur" },
  // { name: "Swastika Mitra" },
  // { name: "Aishwarya Sharma" },
  // { name: "Anwesha Ayoshna" },
  // { name: "Archika" },
  // { name: "Atemla Shiu" },
  // { name: "Ayushi jain" },
  // { name: "Disha Virmani" },
  // { name: "Dr Rohini Jaybhaye" },
  // { name: "Dr. Himaja Reddy" },
  // { name: "Kirti Gosain" },
  // { name: "Mahima Gava" },
  // { name: "malvika bhatt" },
  // { name: "Mansi" },
  // { name: "Meemansa Tripathi" },
  // { name: "Neha Baid" },
  // { name: "Ojasvi Khandelwal" },
  // { name: "Priya" },
  // { name: "Priyanka" },
  // { name: "Raina De" },
  // { name: "Riya" },
  // { name: "Samarth Srivastava" },
  // { name: "Saumya Sarah Baristo" },
  // { name: "Sindhoori" },
  // { name: "Smriti Singh" },
  // { name: "Supreet dhanjal" },
  // { name: "Yaamini Shah" },
  // { name: "Yukti" },
  // { name: "Sandeep rana" },
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
