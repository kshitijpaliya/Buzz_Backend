import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: {
      type: String,
      required: false,
      match: [/^[+]?[0-9\s\-\(\)]{10,}$/, "Please enter a valid phone number"],
    },
    passwordHash: { type: String }, // For email/pass auth
    avatar: { type: String },
    role: {
      type: String,
      enum: ["brand", "creator", "admin"],
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
