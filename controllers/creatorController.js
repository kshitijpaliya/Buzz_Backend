import Creator from "../models/creator.js";
export const getAllCreators = async (req, res) => {
  try {
    const creators = await Creator.find()
      .populate("userId", "name email avatar role")
      .select("-__v")
      .sort({ createdAt: -1 }); // newest first
    res.status(200).json(creators);
  } catch (err) {
    console.error("Error fetching creators:", err);
    res.status(500).json({ error: "Failed to fetch creators" });
  }
};

export const getCreatorById = async (req, res) => {
  try {
    const { id } = req.params;
    const creator = await Creator.findById(id)
      .populate("userId", "name email avatar role")
      .select("-__v");

    if (!creator) {
      return res.status(404).json({ error: "Creator not found" });
    }
    res.status(200).json(creator);
  } catch (error) {
    console.error("Error fetching creator by ID:", error);
    res.status(500).json({ error: "Failed to fetch creator" });
  }
};
