import Creator from "./models/Creator.js";
import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://studyforsixmonths:kshitij15pal@buzz.l1iomfs.mongodb.net/?retryWrites=true&w=majority&appName=buzz";

const creators = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    const influencers = [
      {
        userId: "683ea7fce2b3f691b884dcf6",
        handles: [
          "https://www.instagram.com/arpit.realestate/profilecard/?igsh=MnZsdmVvMGJsdHZ0",
        ],
        followers: 10800,
        location: "Delhi Ncr",
        niche: ["Informative: Education/Software/AI"],
        videoType: [
          "Business Content",
          "Storytelling Content",
          "Unboxing Videos",
          "Grwm",
          "Podcast Or Transitions",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Arpit%20Yadav-%20Delhi%20(2000).mp4",
        avatar: "",
      },
      {
        userId: "683ea7fde2b3f691b884dcf9",
        handles: [
          "https://www.instagram.com/suprthshetty?igsh=YW44YjZxODhlcG85&utm_source=qr",
        ],
        followers: 2022,
        location: "Bangalore",
        niche: ["Lifestyle/Fashion"],
        videoType: [
          "Storytelling Content",
          "Unboxing Videos",
          "Grwm Or Transitions",
          "Styling Tips",
          "Grooming Videos",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Suprith%20Shetty-%20Banglore.mp4",
        avatar: "",
      },
      {
        userId: "683ea7fde2b3f691b884dcfb",
        handles: [
          "https://www.instagram.com/weddingchuckles?igsh=MTB6MTdiMjlneGk0cA==",
        ],
        followers: 1893,
        location: "Chhattisgarh",
        niche: ["Lifestyle/Fashion"],
        videoType: [
          "Business Content",
          "Wedding Content Creator",
          "Tips For Bride And Groom",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Shruti%20Agrawal-%20Chhattisgarh(1000-2000).mp4",
        avatar: "",
      },
      {
        userId: "683ea7fde2b3f691b884dcfd",
        handles: [
          "https://www.instagram.com/imsanjana011?igsh=MWtmNTdrcGM4OWpxMg%3D%3D&utm_source=qr",
        ],
        followers: 1413,
        location: "Ghansoli, Navi Mumbai",
        niche: ["Beauty: Skincare/Haircare/Makeup"],
        videoType: [
          "Storytelling Content",
          "Unboxing Videos",
          "Grwm",
          "Skincare Review Or Transitions",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Sanjana%20Sharma-%20Mumbai(3000).mp4",
        avatar: "",
      },
      {
        userId: "683ea7fde2b3f691b884dcff",
        handles: ["Veedoshe"],
        followers: 1393,
        location: "Delhi (currently in Banglore)",
        niche: ["Travel"],
        videoType: [
          "Dance Creator",
          "Business Content",
          "Storytelling Content",
          "Short Red Hair",
          "Grwm Or Transitions",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos: "https://d242xts6unflx7.cloudfront.net/Vidushi-Delhi(3-5k).mp4",
        avatar: "",
      },
      {
        userId: "683ea7fde2b3f691b884dd01",
        handles: ["goutamsreegovind"],
        followers: 2191,
        location: "Kannur",
        niche: ["Lifestyle/Fashion"],
        videoType: [
          "Business Content",
          "Storytelling Content",
          "Unboxing Videos",
          "Grwm Or Transitions",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Goutam%20Sree%20Govind-Kannur.mp4",
        avatar: "",
      },
      {
        userId: "683ea7fde2b3f691b884dd03",
        handles: ["Anikaathakur__"],
        followers: 4021,
        location: "Hyderabad",
        niche: ["Lifestyle/Fashion"],
        videoType: ["Student Creator", "Day In Life", "Fashion"],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Ankia-%20Hyderabad(barter%20or%203-4k).mp4",
        avatar: "",
      },
      {
        userId: "683ea7fde2b3f691b884dd05",
        handles: [
          "https://www.instagram.com/mehakagrawall?igsh=ZWJwYzNxcjVzc3B4&utm_source=qr",
        ],
        followers: 4770,
        location: "Bangalore",
        niche: ["Food"],
        videoType: [
          "Student Creator",
          "Food",
          "Lifestyle And Travel",
          "Food Places Review",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Mehak%20Agrawal-Banglore(4000).mp4",
        avatar: "",
      },
      {
        userId: "683ea7fde2b3f691b884dd07",
        handles: ["hitusmiles"],
        followers: 1208,
        location: "Mumbai",
        niche: ["Lifestyle/Fashion"],
        videoType: [
          "Student Creator",
          "Owns A Pet",
          "Curly Hair",
          "Storytelling",
          "Fashion And Food",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos: "https://d242xts6unflx7.cloudfront.net/Hitika-Mumbai(3-5k).mp4",
        avatar: "",
      },
      {
        userId: "683ea7fee2b3f691b884dd09",
        handles: [
          "https://www.instagram.com/reganguptaa?igsh=Y2pybjJyaTFqZmts&utm_source=qr",
        ],
        followers: 242,
        location: "Amritsar, Punjab",
        niche: ["Lifestyle/Fashion"],
        videoType: ["Bride-To-Be", "Storytelling", "Fashion"],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Regan%20Gupta-Amritsar(3000).mp4",
        avatar: "",
      },
      {
        userId: "683ea7fee2b3f691b884dd0b",
        handles: [
          "https://www.instagram.com/irl_shivani?igsh=N2l4ajQ2OHR1bWlp",
        ],
        followers: 205,
        location: "Sikkim",
        niche: ["Food"],
        videoType: ["Owns A Pet", "Food", "Recipe Videos", "Food Review"],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Shivani%20Baraily-Sikkim(20000.mp4",
        avatar: "",
      },
      {
        userId: "683ea821d4cc316bf8cd5e75",
        handles: [
          "https://www.instagram.com/bageera.chowchow?igsh=MXRsenE2cmxtOTAzaQ%3D%3D&utm_source=qr",
        ],
        followers: 3221,
        location: "Nashik,Maharastra",
        niche: ["Lifestyle/Fashion"],
        videoType: ["Owns A Pet"],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Bageera-Nashik(1000).mp4",
        avatar: "",
      },
      {
        userId: "683ea7fee2b3f691b884dd0e",
        handles: ["@aureliamnz"],
        followers: 1514,
        location: "Nashik",
        niche: ["Lifestyle/Fashion"],
        videoType: ["Student Creator", "Skincare", "Unboxing", "Pr Review"],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Aurelia%20Menezes-Nashik%20(1000).mp4",
        avatar: "",
      },
      {
        userId: "683ea7fee2b3f691b884dd10",
        handles: ["areyyaarneha_"],
        followers: 1120,
        location: "Mahasamund Chhattisgarh",
        niche: ["Beauty: Skincare/Haircare/Makeup"],
        videoType: [
          "Student Creator",
          "Owns A Pet",
          "Dance Creator",
          "Makeup And Skincare",
          "Black Straight Hair",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Neha%20Sharma-Chhattisgarh.mp4",
        avatar: "",
      },
      {
        userId: "683ea7fee2b3f691b884dd12",
        handles: ["@glimpsebygorecha"],
        followers: 6415,
        location: "Delhi NCR",
        niche: ["Lifestyle/Fashion"],
        videoType: [
          "Fitness",
          "Fashion",
          "Yoga Tips",
          "Straight Black Hair",
          "Food Review",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Madhavi%20gorecha-Delhi(yoga%202k).mp4",
        avatar: "",
      },
      {
        userId: "683ea7ffe2b3f691b884dd14",
        handles: [
          "https://www.instagram.com/styleby_megs?igsh=MWp0Zmp5dDNhZXNoYw%3D%3D&utm_source=qr",
        ],
        followers: 10900,
        location: "Delhi",
        niche: ["Lifestyle/Fashion"],
        videoType: [
          "Skincare",
          "Makeup",
          "Unboxing",
          "Storytelling",
          "Straight Black Hair",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Megha%20Birlan-Delhi(2000).mp4",
        avatar: "",
      },
      {
        userId: "683ea7ffe2b3f691b884dd16",
        handles: ["anshikakodari_"],
        followers: 2848,
        location: "Dehradun",
        niche: ["Lifestyle/Fashion"],
        videoType: [
          "Student Creator",
          "Anchor",
          "Fashion",
          "Outfit Review",
          "Straight Short Black Hair",
        ],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Anshika%20Kodari-Dehradun(2-3k).mp4",
        avatar: "",
      },
      {
        userId: "683ea7ffe2b3f691b884dd18",
        handles: ["_hemaraju"],
        followers: 1067,
        location: "Bangalore",
        niche: ["Beauty: Skincare/Haircare/Makeup"],
        videoType: ["Student Creator", "Doctor", "Fashion", "Makeup"],
        agegroup: "",
        platform: "Instagram",
        price: "",
        videos:
          "https://d242xts6unflx7.cloudfront.net/Hema.H-Banglore(500).mp4",
        avatar: "",
      },
    ];

    console.log("📤 Inserting creators...");
    await Creator.insertMany(influencers);
    console.log("✅ Creators inserted successfully");
  } catch (err) {
    console.error("❌ Error inserting creators:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
};

creators();
