// // // Updated seed script
// import mongoose from "mongoose";
// // import User from "./models/user.js";
// // import Creator from "./models/creator.js";

// // const MONGO_URI =
// //   "mongodb+srv://studyforsixmonths:IMlc8Ot6joJ3TsWF@buzz.l1iomfs.mongodb.net/?retryWrites=true&w=majority&appName=buzz";

// // async function seed() {
// //   await mongoose.connect(MONGO_URI);

// //   // 1. Create User
// //   //   const user = await User.create({
// //   //     name: "Aarya",
// //   //     email: "aarya@example.com",
// //   //     passwordHash: "", // Set if needed
// //   //     avatar: "",
// //   //     role: "creator",
// //   //   });

// // 2. Create Creator
// // const creator = await Creator.create({
// //   userId: "6835e0b7bff64cb83b223714", // Changed from 'user' to 'userId'
// //   handles: ["__.ambiverttt"], // Now an array as per schema
// //   followers: 6487,
// //   location: "Mumbai",
// //   niche: ["Beauty: Skincare/Haircare/Makeup"],
// //   videoType: [
// //     "Golden Waley Hairs",
// //     "Jewellery",
// //     "Skincare",
// //     "Feminine Product Reviews",
// //   ],
// //   agegroup: "18-24", // Added missing field
// //   platform: "Instagram", // Added missing field
// //   price: 500,
// //   videos:
// //     "https://d1v63zwcycy1nb.cloudfront.net/Bhaavya%20-%20Mumbai%20-%20(5k).mp4",
// //   avatar: "", // Added to match schema
// // });

// //   //     // 3. Create Video
// //   //   const video = await Video.create({
// //   //     creatorId: user._id, // or creator._id if using Creator model
// //   //     url: "https://d1v63zwcycy1nb.cloudfront.net/Bhaavya%20-%20Mumbai%20-%20(5k).mp4",
// //   //     title: "Golden Waley Hairs, Jewellery, Skincare, Feminine Product Reviews",
// //   //     description: "Sample video for Aarya's beauty niche content.",
// //   //     tags: ["haircare", "jewellery", "skincare", "feminine products"],
// //   //     price: 500,
// //   //     platform: "Instagram",
// //   //   });

// //   console.log("Seeded user and creator:", user, creator);
// //   await mongoose.disconnect();
// // }

// // seed().catch(console.error);
// // import mongoose from "mongoose";
// // import User from "./models/User.js";
// import Creator from "./models/Creator.js";

// const MONGO_URI =
//   "mongodb+srv://studyforsixmonths:IMlc8Ot6joJ3TsWF@buzz.l1iomfs.mongodb.net/?retryWrites=true&w=majority&appName=buzz";

// // const creatorNames = [
// //   "Simran",
// //   "Priya Paropkari",
// //   "Tanza Bakshi",
// //   "Aparna Chandran",
// //   "Aaraya",
// //   "Sanjana Anilkumar",
// //   "Ayush Sengupta",
// //   "Shaswati Bharali",
// //   "Rijya Singhal",
// //   "Heena",
// //   "Khushi",
// //   "Parag Gupta",
// //   "Shiwangi",
// //   "Nupur Choudhary",
// //   "Sugandha Sharma",
// //   "Devansh Kalra",
// //   "Aditya",
// //   "Mugdha",
// //   "Manali",
// // ];

// const creators = async () => {
//   try {
//     console.log("⏳ Connecting to MongoDB...");
//     await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ Connected to MongoDB");

//     const creatorData = [
//       {
//         userId: "6838549da583bb2f332ba871",
//         handles: ["https://www.instagram.com/a_bemused_poet_"],
//         followers: 5820,
//         location: "Noida",
//         niche: ["Lifestyle/Fashion"],
//         videoType: [
//           "Poet",
//           "Writer",
//           "Dimples On Her Cheeks",
//           "Short Bob Plum Color Hairs",
//         ],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos: "https://d242xts6unflx7.cloudfront.net/Simran%20-%20Noida.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549da583bb2f332ba874",
//         handles: ["Priyaparopkari"],
//         followers: 569,
//         location: "Hyderabad",
//         niche: ["Beauty: Skincare/Haircare/Makeup"],
//         videoType: ["Brown Eyes", "Skincare", "Wellness"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Priya%20-%20Hyderabad.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549da583bb2f332ba876",
//         handles: ["https://www.instagram.com/tanzabakshii"],
//         followers: 1435,
//         location: "Delhi",
//         niche: ["Lifestyle/Fashion"],
//         videoType: ["PR Unboxing", "Straight Long Hairs"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos: "https://d242xts6unflx7.cloudfront.net/Tanza%20-%20Barter.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549da583bb2f332ba878",
//         handles: ["aparna.chandran"],
//         followers: 7641,
//         location: "Chennai",
//         niche: ["Sports & Fitness"],
//         videoType: [
//           "Gym",
//           "Before After Transformation",
//           "Daily Workout Tips",
//           "Diet And Nutrition",
//         ],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Aparna%20-%20Chennai.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549da583bb2f332ba87a",
//         handles: ["https://www.instagram.com/__.ambiverttt"],
//         followers: 6487,
//         location: "Mumbai",
//         niche: ["Beauty: Skincare/Haircare/Makeup"],
//         videoType: [
//           "Golden Waley Hairs",
//           "Jewellry",
//           "Skincare",
//           "Feminine Product Reviews",
//         ],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Aaraya%20-%20Mumbai%20-%20Paid%20(500).mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549da583bb2f332ba87c",
//         handles: ["https://www.instagram.com/sanjanaanilkumar"],
//         followers: 1189,
//         location: "Kottayam, Kerala",
//         niche: ["Beauty: Skincare/Haircare/Makeup"],
//         videoType: ["Short Black Hair", "GRWM", "PR Review"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Sanjana%20-%20Kerala.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba87e",
//         handles: ["ayushsenguptasingss"],
//         followers: 3032,
//         location: "Mumbai",
//         niche: ["Beauty: Skincare/Haircare/Makeup"],
//         videoType: ["Student Creator", "Knows Bengali", "Fashion"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Ayush-%20Mumbai%20-%20500.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba880",
//         handles: ["Shashwatibharali"],
//         followers: 2115,
//         location: "Guwahati, Assam",
//         niche: ["Lifestyle/Fashion"],
//         videoType: [
//           "Student Creator",
//           "Assamese",
//           "Story Teller",
//           "Short Brown Hair",
//         ],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Shaswati%20-%20Guwahati%20-%202k.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba882",
//         handles: ["@rijya.singhal"],
//         followers: 233,
//         location: "Mumbai",
//         niche: ["Beauty: Skincare/Haircare/Makeup"],
//         videoType: [
//           "Small Business Tips",
//           "Packing Tips",
//           "Straight Brown Hair",
//         ],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Rijya%20-%20Mumbai%20-%204k.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba884",
//         handles: ["heenamakhija_"],
//         followers: 2127,
//         location: "Bangalore",
//         niche: ["Lifestyle/Fashion"],
//         videoType: ["Short Black Hair", "Travel Content"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Heena%20-%20Bangalore%20-%20barter.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba886",
//         handles: ["https://instagram.com/style_feel_repeat"],
//         followers: 5925,
//         location: "Pune",
//         niche: ["Lifestyle/Fashion"],
//         videoType: ["Short Black Hair", "Outfit Review And Designing"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Khushi%20-%20Pune%20-%205k.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba888",
//         handles: ["drinks.withGuptaji"],
//         followers: 344,
//         location: "Pune",
//         niche: ["Food"],
//         videoType: ["Drinks", "Cocktails", "Coffee", "Bartender"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Parag%20-%20Pune%20-%202.5k.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba88a",
//         handles: ["Shiwangi_chhetri"],
//         followers: 10200,
//         location: "Siliguri, West Bengal",
//         niche: ["Lifestyle/Fashion"],
//         videoType: ["Nepali", "Airbnb Business", "Property And Travel Content"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Shiwangi%20-%20Siliguri%20-%203k.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba88c",
//         handles: ["nupurdreams"],
//         followers: 4110,
//         location: "Ludhiana",
//         niche: ["Lifestyle/Fashion"],
//         videoType: [
//           "Student Creator",
//           "Illustrate",
//           "Story Teller",
//           "Artist",
//           "Doodle Art",
//         ],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Nupur%20-%20Ludhiana%20-%202k%20(student).mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba88e",
//         handles: ["Sugandha__sharmaa"],
//         followers: 7341,
//         location: "Chandigarh",
//         niche: ["Lifestyle/Fashion"],
//         videoType: ["Outfit Videos And Photoshoot", "Short Black Hair"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Sugandha%20-%202k%20-%20Chandigarh.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba890",
//         handles: ["https://www.instagram.com/iamdevanshkalra"],
//         followers: 3358,
//         location: "Gurgaon",
//         niche: ["Lifestyle/Fashion"],
//         videoType: ["Pastery Chef", "Fashion", "Cooking Videos"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Devansh%20-%202k%20-%20Gurgaon.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba892",
//         handles: ["ai.with.adi"],
//         followers: 10700,
//         location: "Hyderabad",
//         niche: ["Informative: Education/Software/AI"],
//         videoType: ["AI Informative", "Reaction Video"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Aditya%20-%20Hyderabad.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba894",
//         handles: ["@xoxomugs"],
//         followers: 1269,
//         location: "Pune",
//         niche: ["Lifestyle/Fashion"],
//         videoType: [
//           "Student Creator",
//           "Short Red Hair",
//           "Outfit Stylist And Makeup",
//           "Marathi",
//         ],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Mugdha%20-%20Pune%20-%20Student.mp4",
//         avatar: "",
//       },
//       {
//         userId: "6838549ea583bb2f332ba896",
//         handles: ["Manaaaaali"],
//         followers: 2558,
//         location: "Mumbai",
//         niche: ["Lifestyle/Fashion"],
//         videoType: ["Artist", "Outfit Stylist", "PR Unboxing"],
//         agegroup: "",
//         platform: "Instagram",
//         price: "",
//         videos:
//           "https://d242xts6unflx7.cloudfront.net/Manali%20-%20Mumbai%20(student).mp4",
//         avatar: "",
//       },
//     ];
//     console.log("📤 Inserting creators...");
//     await Creator.insertMany(creatorData);
//     console.log("✅ Creators inserted successfully");
//   } catch (err) {
//     console.error("❌ Error inserting creators:", err);
//   } finally {
//     await mongoose.disconnect();
//     console.log("🔌 Disconnected from MongoDB");
//   }
// };

// creators();

// // async function seed() {
// //   try {
// //     await mongoose.connect(MONGO_URI);
// //     console.log("Connected to MongoDB");

// //     await Creator.deleteMany({});
// //     console.log("Cleared existing creators");

// //     await creators();
// //     console.log("Seeded creators");

// //     await mongoose.disconnect();
// //     console.log("Disconnected from MongoDB");
// //   } catch (error) {
// //     console.error("Error during seeding:", error);
// //     await mongoose.disconnect();
// //   }
// // }
// // async function seed() {
// //   try {
// //     await mongoose.connect(MONGO_URI);
// //     console.log("Connected to MongoDB");

// //     for (const name of creatorNames) {
// //       try {
// //         const user = await User.create({
// //           name: name,
// //           email: `${name.toLowerCase().replace(/\s+/g, "")}@example.com`,
// //           passwordHash: "",
// //           avatar: "",
// //           role: "creator",
// //         });

// //         console.log(`✅ Created user: ${name} (ID: ${user._id})`);
// //       } catch (error) {
// //         console.error(`❌ Error creating ${name}:`, error.message);
// //       }
// //     }

// //     console.log("🎉 Seeding completed!");
// //     await mongoose.disconnect();
// //   } catch (error) {
// //     console.error("Error:", error);
// //   }
// // }

// // seed().catch(console.error);
// import mongoose from "mongoose";
// import User from "./models/User.js";

// const MONGO_URI =
//   "mongodb+srv://studyforsixmonths:IMlc8Ot6joJ3TsWF@buzz.l1iomfs.mongodb.net/?retryWrites=true&w=majority&appName=buzz";

// async function migrateUsers() {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("Connected to MongoDB");

//     // Update all users without gender field
//     const result = await User.updateMany(
//       { gender: { $exists: false } }, // Find users without gender field
//       { $set: { gender: "Female" } } // Set default gender
//     );

//     console.log(`Updated ${result.modifiedCount} users with default gender`);

//     await mongoose.disconnect();
//     console.log("Migration completed");
//   } catch (error) {
//     console.error("Migration failed:", error);
//   }
// }

// migrateUsers().catch(console.error);
