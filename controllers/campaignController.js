import Campaign from "../models/Campaign.js";
import Creator from "../models/Creator.js";
import User from "../models/User.js";
// Create a new campaign
export const createCampaign = async (req, res) => {
  try {
    const { brandDetails, campaignSetup, briefDetails, creators, payment } =
      req.body;

    const campaign = new Campaign({
      brandDetails,
      campaignSetup,
      briefDetails,
      creators,
      payment,
    });

    await campaign.save();

    res.status(201).json({
      success: true,
      message: "Campaign created successfully",
      data: campaign,
    });
  } catch (error) {
    console.error("Error creating campaign:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create campaign",
      error: error.message,
    });
  }
};

// // Update campaign (for step-by-step updates)
// export const updateCampaign = async (req, res) => {
//   try {
//     const { campaignId } = req.params;
//     const updateData = req.body;

//     const campaign = await Campaign.findOne({
//       campaignId: campaignId,
//       "metadata.createdBy": req.user.id,
//     });

//     if (!campaign) {
//       return res.status(404).json({
//         success: false,
//         message: "Campaign not found",
//       });
//     }

//     // Deep merge for nested objects
//     const mergeObjects = (target, source) => {
//       Object.keys(source).forEach((key) => {
//         if (
//           source[key] &&
//           typeof source[key] === "object" &&
//           !Array.isArray(source[key])
//         ) {
//           if (!target[key]) target[key] = {};
//           mergeObjects(target[key], source[key]);
//         } else {
//           target[key] = source[key];
//         }
//       });
//     };

//     mergeObjects(campaign, updateData);
//     await campaign.save();

//     res.json({
//       success: true,
//       message: "Campaign updated successfully",
//       data: campaign,
//     });
//   } catch (error) {
//     console.error("Error updating campaign:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to update campaign",
//       error: error.message,
//     });
//   }
// };

// // Get campaign by ID
// export const getCampaign = async (req, res) => {
//   try {
//     const { campaignId } = req.params;

//     const campaign = await Campaign.findOne({
//       campaignId: campaignId,
//       "metadata.createdBy": req.user.id,
//     }).populate([
//       {
//         path: "creators.shortlistedCreators.creatorId",
//         select: "handles platform followers avatar userId location niche",
//         populate: {
//           path: "userId",
//           select: "name avatar email",
//         },
//       },
//       {
//         path: "metadata.createdBy",
//         select: "name email role",
//       },
//     ]);

//     if (!campaign) {
//       return res.status(404).json({
//         success: false,
//         message: "Campaign not found",
//       });
//     }

//     res.json({
//       success: true,
//       data: campaign,
//     });
//   } catch (error) {
//     console.error("Error fetching campaign:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch campaign",
//       error: error.message,
//     });
//   }
// };

// // Get all campaigns for a user
// export const getUserCampaigns = async (req, res) => {
//   try {
//     const { page = 1, limit = 10, status, search } = req.query;

//     const filter = { "metadata.createdBy": req.user.id };

//     if (status) {
//       filter.status = status;
//     }

//     if (search) {
//       filter.$or = [
//         { "brandDetails.brandName": { $regex: search, $options: "i" } },
//         { "briefDetails.productName": { $regex: search, $options: "i" } },
//         { campaignId: { $regex: search, $options: "i" } },
//       ];
//     }

//     const campaigns = await Campaign.find(filter)
//       .populate({
//         path: "creators.shortlistedCreators.creatorId",
//         select: "handles platform followers userId",
//         populate: {
//           path: "userId",
//           select: "name avatar",
//         },
//       })
//       .sort({ "lifecycle.createdAt": -1 })
//       .limit(limit * 1)
//       .skip((page - 1) * limit);

//     const total = await Campaign.countDocuments(filter);

//     res.json({
//       success: true,
//       data: {
//         campaigns,
//         pagination: {
//           current: parseInt(page),
//           total: Math.ceil(total / limit),
//           count: campaigns.length,
//           totalCampaigns: total,
//         },
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching campaigns:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch campaigns",
//       error: error.message,
//     });
//   }
// };

// // Update campaign step
// export const updateCampaignStep = async (req, res) => {
//   try {
//     const { campaignId } = req.params;
//     const { step } = req.body;

//     if (step < 1 || step > 7) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid step number. Must be between 1 and 7",
//       });
//     }

//     const campaign = await Campaign.findOneAndUpdate(
//       {
//         campaignId: campaignId,
//         "metadata.createdBy": req.user.id,
//       },
//       {
//         "metadata.step": step,
//         "metadata.isComplete": step === 7,
//         status: step === 7 ? "active" : "draft",
//       },
//       { new: true }
//     );

//     if (!campaign) {
//       return res.status(404).json({
//         success: false,
//         message: "Campaign not found",
//       });
//     }

//     res.json({
//       success: true,
//       message: "Campaign step updated",
//       data: {
//         step: campaign.metadata.step,
//         isComplete: campaign.metadata.isComplete,
//         status: campaign.status,
//       },
//     });
//   } catch (error) {
//     console.error("Error updating campaign step:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to update campaign step",
//       error: error.message,
//     });
//   }
// };

// // Add creators to shortlist
// export const addCreatorsToShortlist = async (req, res) => {
//   try {
//     const { campaignId } = req.params;
//     const { creators } = req.body; // Array of { creatorId, price }

//     if (!Array.isArray(creators) || creators.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Creators array is required and cannot be empty",
//       });
//     }

//     const campaign = await Campaign.findOne({
//       campaignId: campaignId,
//       "metadata.createdBy": req.user.id,
//     });

//     if (!campaign) {
//       return res.status(404).json({
//         success: false,
//         message: "Campaign not found",
//       });
//     }

//     // Validate creators exist
//     const creatorIds = creators.map((c) => c.creatorId);
//     const existingCreators = await Creator.find({ _id: { $in: creatorIds } });

//     if (existingCreators.length !== creatorIds.length) {
//       return res.status(400).json({
//         success: false,
//         message: "Some creators do not exist",
//       });
//     }

//     // Add new creators to shortlist
//     creators.forEach((creator) => {
//       const existingCreator = campaign.creators.shortlistedCreators.find(
//         (sc) => sc.creatorId.toString() === creator.creatorId
//       );

//       if (!existingCreator) {
//         campaign.creators.shortlistedCreators.push({
//           creatorId: creator.creatorId,
//           price: creator.price || 0,
//           status: "shortlisted",
//         });
//       }
//     });

//     await campaign.save();

//     // Return updated campaign with populated data
//     const updatedCampaign = await Campaign.findById(campaign._id).populate({
//       path: "creators.shortlistedCreators.creatorId",
//       select: "handles platform followers userId",
//       populate: {
//         path: "userId",
//         select: "name avatar",
//       },
//     });

//     res.json({
//       success: true,
//       message: "Creators added to shortlist",
//       data: updatedCampaign,
//     });
//   } catch (error) {
//     console.error("Error adding creators to shortlist:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to add creators to shortlist",
//       error: error.message,
//     });
//   }
// };

// // Remove creator from shortlist
// export const removeCreatorFromShortlist = async (req, res) => {
//   try {
//     const { campaignId, creatorId } = req.params;

//     const campaign = await Campaign.findOne({
//       campaignId: campaignId,
//       "metadata.createdBy": req.user.id,
//     });

//     if (!campaign) {
//       return res.status(404).json({
//         success: false,
//         message: "Campaign not found",
//       });
//     }

//     campaign.creators.shortlistedCreators =
//       campaign.creators.shortlistedCreators.filter(
//         (sc) => sc.creatorId.toString() !== creatorId
//       );

//     await campaign.save();

//     res.json({
//       success: true,
//       message: "Creator removed from shortlist",
//       data: campaign,
//     });
//   } catch (error) {
//     console.error("Error removing creator from shortlist:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to remove creator from shortlist",
//       error: error.message,
//     });
//   }
// };

// // Update creator status in campaign
// export const updateCreatorStatus = async (req, res) => {
//   try {
//     const { campaignId, creatorId } = req.params;
//     const { status, notes } = req.body;

//     const validStatuses = ["shortlisted", "selected", "rejected", "completed"];
//     if (!validStatuses.includes(status)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid status",
//       });
//     }

//     const campaign = await Campaign.findOne({
//       campaignId: campaignId,
//       "metadata.createdBy": req.user.id,
//     });

//     if (!campaign) {
//       return res.status(404).json({
//         success: false,
//         message: "Campaign not found",
//       });
//     }

//     const creatorIndex = campaign.creators.shortlistedCreators.findIndex(
//       (sc) => sc.creatorId.toString() === creatorId
//     );

//     if (creatorIndex === -1) {
//       return res.status(404).json({
//         success: false,
//         message: "Creator not found in campaign",
//       });
//     }

//     campaign.creators.shortlistedCreators[creatorIndex].status = status;
//     if (notes) {
//       campaign.creators.shortlistedCreators[creatorIndex].notes = notes;
//     }

//     await campaign.save();

//     res.json({
//       success: true,
//       message: "Creator status updated",
//       data: campaign.creators.shortlistedCreators[creatorIndex],
//     });
//   } catch (error) {
//     console.error("Error updating creator status:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to update creator status",
//       error: error.message,
//     });
//   }
// };

// // Get campaign analytics
// export const getCampaignAnalytics = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const analytics = await Campaign.aggregate([
//       { $match: { "metadata.createdBy": userId } },
//       {
//         $group: {
//           _id: null,
//           totalCampaigns: { $sum: 1 },
//           activeCampaigns: {
//             $sum: { $cond: [{ $eq: ["$status", "active"] }, 1, 0] },
//           },
//           completedCampaigns: {
//             $sum: { $cond: [{ $eq: ["$status", "completed"] }, 1, 0] },
//           },
//           totalSpent: { $sum: "$payment.totalAmount" },
//           totalCreators: { $sum: "$creators.totalCreators" },
//         },
//       },
//     ]);

//     const result = analytics[0] || {
//       totalCampaigns: 0,
//       activeCampaigns: 0,
//       completedCampaigns: 0,
//       totalSpent: 0,
//       totalCreators: 0,
//     };

//     res.json({
//       success: true,
//       data: result,
//     });
//   } catch (error) {
//     console.error("Error fetching campaign analytics:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch campaign analytics",
//       error: error.message,
//     });
//   }
// };

// // Delete campaign
// export const deleteCampaign = async (req, res) => {
//   try {
//     const { campaignId } = req.params;

//     const campaign = await Campaign.findOne({
//       campaignId: campaignId,
//       "metadata.createdBy": req.user.id,
//     });

//     if (!campaign) {
//       return res.status(404).json({
//         success: false,
//         message: "Campaign not found",
//       });
//     }

//     // Don't allow deletion of active campaigns
//     if (campaign.status === "active" || campaign.status === "in_progress") {
//       return res.status(400).json({
//         success: false,
//         message: "Cannot delete active or in-progress campaigns",
//       });
//     }

//     await Campaign.findOneAndDelete({
//       campaignId: campaignId,
//       "metadata.createdBy": req.user.id,
//     });

//     res.json({
//       success: true,
//       message: "Campaign deleted successfully",
//     });
//   } catch (error) {
//     console.error("Error deleting campaign:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to delete campaign",
//       error: error.message,
//     });
//   }
// };
