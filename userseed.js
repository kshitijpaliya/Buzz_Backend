import mongoose from "mongoose";
import User from "./models/User.js";
const MONGO_URI =
  "mongodb+srv://studyforsixmonths:kshitij15pal@buzz.l1iomfs.mongodb.net/?retryWrites=true&w=majority&appName=buzz";

const creatorNames = [
  { name: "Vaishnavi" },
  { name: "Akash Ranpise" },
  { name: "Devraj I" },
  { name: "Harshada Mohal" },
  { name: "Ishita Prasad" },
  { name: "Jagruti" },
  { name: "Kajal Lellwani" },
  { name: "Mithi" },
  { name: "Prranav Vashisitha" },
  { name: "Sanika Vasudeo" },
  { name: "Sara Gogna" },
  { name: "Shreya Goyal" },
  { name: "Aamil" },
  { name: "Aashi Gandhi" },
  { name: "Aksha Mansuri" },
  { name: "Akshita" },
  { name: "Anushree Shankar" },
  { name: "Arunima" },
  { name: "Bhumi Bhardwaj" },
  { name: "Chandni Vadher" },
  { name: "Deepanshi Katra" },
  { name: "Janhvi Hirani" },
  { name: "Khushi Shroff" },
  { name: "Mansi Peshwani" },
  { name: "Meet Bhanushali" },
  { name: "Neeraj Jaiswal" },
  { name: "Palak Babbar" },
  { name: "Pihu Malhotra" },
  { name: "Pratiksha Shinde" },
  { name: "Preksha" },
  { name: "Rahul" },
  { name: "Sakshi Hotchandani" },
  { name: "Samridhi Arora" },
  { name: "Subhav Kapoor" },
  { name: "Vanshika" },
  { name: "Vivienne Simte" },
  { name: "Vaishnavi Shingavi" },
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
