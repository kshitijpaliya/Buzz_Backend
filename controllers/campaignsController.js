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
