import Campaign from "../models/Campaign.js";
import Creator from "../models/Creator.js";
import User from "../models/User.js";
// Create a new campaign
export const createCampaign = async (req, res) => {
  try {
    const { brandDetails, campaignSetup, creators, payment } = req.body;
    console.log("Creating campaign with data:", {
      brandDetails,
      campaignSetup,
      creators,
      payment,
    });

    if (creators && Array.isArray(creators.shortlistedCreators)) {
      for (let i = 0; i < creators.shortlistedCreators.length; i++) {
        const creatorEntry = creators.shortlistedCreators[i];
        // If price is not already provided, fetch from Creator model
        if (!creatorEntry.price && creatorEntry.creatorId) {
          const creatorDoc = await Creator.findById(creatorEntry.creatorId);
          if (creatorDoc && creatorDoc.price) {
            creatorEntry.price = creatorDoc.price;
          }
        }
      }
    }

    const campaign = new Campaign({
      brandDetails,
      campaignSetup,
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

// In your campaignController.js
export const getCampaignById = async (req, res) => {
  try {
    const { campaignId } = req.params;

    console.log("Searching for campaign ID:", campaignId);

    // Search by the custom campaignId field (not MongoDB's _id)
    const campaign = await Campaign.findOne({
      campaignId: campaignId,
    }).populate({
      path: "creators.shortlistedCreators.creatorId",
      populate: {
        path: "userId",
        select: "name avatar",
      },
    });

    console.log("Campaign found:", campaign ? "Yes" : "No");

    if (!campaign) {
      console.log("Campaign not found in database");
      return res.status(404).json({ error: "Campaign not found" });
    }

    // Transform shortlisted creators to clean format
    const cleanedShortlistedCreators =
      campaign.creators?.shortlistedCreators?.map((creator) => ({
        _id: creator.creatorId._id,
        name: creator.creatorId.userId?.name || creator.name,
        userId: creator.creatorId.userId,
        gender: creator.creatorId.gender,
        location: creator.creatorId.location,
        followers: creator.creatorId.followers,
        niche: creator.creatorId.niche,
        videoType: creator.creatorId.videoType,
        platform: creator.creatorId.platform,
        avatar: creator.creatorId.avatar,
        videos: creator.creatorId.videos,
        status: creator.status,
        addedAt: creator.addedAt,
      })) || [];

    // Transform the response to match frontend expectations
    const responseData = {
      _id: campaign._id,
      campaignId: campaign.campaignId,
      brandName: campaign.brandDetails?.brandName || "Unknown Brand",
      productName: campaign.campaignSetup?.productName || "Unknown Product",
      shortlistedCreators: cleanedShortlistedCreators,
      createdAt: campaign.createdAt,
      budget:
        campaign.payment?.totalAmount || campaign.campaignSetup?.budget || 0,
      // Include other fields without duplication
      brandDetails: campaign.brandDetails,
      campaignSetup: campaign.campaignSetup,
      payment: campaign.payment,
      status: campaign.status,
      lifecycle: campaign.lifecycle,
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error fetching campaign:", error);
    res.status(500).json({
      error: "Failed to fetch campaign",
      details: error.message,
    });
  }
};
