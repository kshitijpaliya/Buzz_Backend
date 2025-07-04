import mongoose from "mongoose";
import User from "./models/User.js";
const MONGO_URI = "";

const creatorNames = [
  { name: "Mansi" },
  { name: "Shalini Paul" },
  { name: "Muskan Jain" },
  { name: "Nikky Thomas" },
  { name: "Naisargi Modi" },
  { name: "Divya Raina" },
  { name: "Shalmali" },
  { name: "Insha Khan" },
  { name: "Garima Chamoli" },
  { name: "Sanjana Nair" },
  { name: "Saloni Jain" },
  { name: "Aashima Gambhir" },
  { name: "Aditi Kabra" },
  { name: "Vidushi Bisani" },
  { name: "Vaishnavi Singh" },
  { name: "Ashwarya Singh" },
  { name: "Pooja" },
  { name: "Aakanksha Kelkar" },
  { name: "Rohit Munde" },
  { name: "Nishant Deswal" },
  { name: "Rupesh Jadwani" },
  { name: "Anurag Kumar" },
  { name: "Aayushi Pandey" },
  { name: "Sakshi" },
  { name: "Aditi" },
  { name: "Chhavi Jain" },
  { name: "Eshita Anil" },
  { name: "Deepali" },
  { name: "Swareena Swaroop" },
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
