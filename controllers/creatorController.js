// import Creator from "../models/Creator.js";

// export const getAllCreators = async (req, res) => {
//   try {
//     const creators = await Creator.find()
//       .populate("userId", "name avatar")
//       .select(
//         "userId gender location followers niche videoType creatortags agegroup platform avatar videos"
//       )
//       .sort({ createdAt: -1 }); // newest first
//     res.status(200).json(creators);
//   } catch (err) {
//     console.error("Error fetching creators:", err);
//     res.status(500).json({ error: "Failed to fetch creators" });
//   }
// };

// export const getCreatorById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const creator = await Creator.findById(id).populate({
//       path: "userId",
//       select: "name email contact avatar role",
//     });

//     if (!creator) {
//       return res.status(404).json({ error: "Creator not found" });
//     }

//     res.json(creator);
//   } catch (error) {
//     console.error("Error fetching creator by ID:", error);
//     res.status(500).json({ error: "Failed to fetch creator" });
//   }
// };

import Creator from "../models/Creator.js";

export const getAllCreators = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      category,
      search,
      minFollowers,
      maxFollowers,
      location,
      genders,
      niches,
      types,
    } = req.query;

    // Build filter object
    const filters = {};

    // Category filter (maps to niche field)
    if (category && category !== "all") {
      filters.niche = { $in: [new RegExp(category, "i")] };
    }

    // Search filter - search across name, niche, and location
    if (search) {
      filters.$or = [
        { "userId.name": { $regex: search, $options: "i" } },
        { niche: { $elemMatch: { $regex: search, $options: "i" } } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    // Follower count filters
    if (minFollowers) {
      filters.followers = {
        ...filters.followers,
        $gte: parseInt(minFollowers),
      };
    }

    if (maxFollowers) {
      filters.followers = {
        ...filters.followers,
        $lte: parseInt(maxFollowers),
      };
    }

    // Location filter
    if (location) {
      filters.location = { $regex: location, $options: "i" };
    }

    // Gender filter
    if (genders) {
      const genderArray = genders.split(",");
      filters.gender = { $in: genderArray };
    }

    // Niche filter
    if (niches) {
      const nicheArray = niches.split(",");
      filters.niche = { $in: nicheArray.map((n) => new RegExp(n, "i")) };
    }

    // Video type filter
    if (types) {
      const typeArray = types.split(",");
      filters.videoType = { $in: typeArray.map((t) => new RegExp(t, "i")) };
    }

    console.log("Applied filters:", JSON.stringify(filters, null, 2));

    // Pagination calculations
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const totalItems = await Creator.countDocuments(filters);
    const totalPages = Math.ceil(totalItems / parseInt(limit));

    // Fetch creators with filters and pagination
    const creators = await Creator.find(filters)
      .populate("userId", "name avatar")
      .select(
        "userId gender location followers niche videoType creatortags agegroup platform avatar videos"
      )
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ followers: -1 }); // Sort by followers descending

    // Return paginated response
    res.status(200).json({
      data: creators,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalItems,
        hasNextPage: parseInt(page) < totalPages,
        hasPrevPage: parseInt(page) > 1,
      },
    });
  } catch (err) {
    console.error("Error fetching creators:", err);
    res.status(500).json({ error: "Failed to fetch creators" });
  }
};

export const getCreatorById = async (req, res) => {
  try {
    const { id } = req.params;

    const creator = await Creator.findById(id).populate({
      path: "userId",
      select: "name email contact avatar role",
    });

    if (!creator) {
      return res.status(404).json({ error: "Creator not found" });
    }

    res.json(creator);
  } catch (error) {
    console.error("Error fetching creator by ID:", error);
    res.status(500).json({ error: "Failed to fetch creator" });
  }
};

// Optional: Add a separate endpoint for getting filter options
export const getFilterOptions = async (req, res) => {
  try {
    const [niches, locations, videoTypes] = await Promise.all([
      Creator.distinct("niche"),
      Creator.distinct("location"),
      Creator.distinct("videoType"),
    ]);

    res.json({
      niches: niches.flat(),
      locations: locations.filter(Boolean),
      videoTypes: videoTypes.flat(),
      genders: ["male", "female", "other"],
    });
  } catch (error) {
    console.error("Error fetching filter options:", error);
    res.status(500).json({ error: "Failed to fetch filter options" });
  }
};
