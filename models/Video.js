import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creator",
      required: true,
    },

    url: { type: String, required: true }, // S3/Mux URL
    thumbnailUrl: { type: String }, // Optional preview image
    duration: { type: String }, // e.g., "30s", "1m 15s"
    title: { type: String },
    description: { type: String },
    tags: [{ type: String }], // Optional video tags
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    uploadedAt: { type: Date, default: Date.now },

    platform: { type: String }, // Redundant for quick access (also in Creator)
    price: { type: Number }, // Price for that specific video (if dynamic)
  },
  { timestamps: true }
);

export default mongoose.model("Video", videoSchema);
