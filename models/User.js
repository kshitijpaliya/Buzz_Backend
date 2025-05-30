import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String }, // For email/pass auth
    avatar: { type: String },
    role: {
      type: String,
      enum: ["brand", "creator", "admin"],
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
