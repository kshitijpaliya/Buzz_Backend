import express from "express";
import {
  createCampaign,
  //   updateCampaign,
  //   getCampaign,
  //   getUserCampaigns,
  //   updateCampaignStep,
  //   addCreatorsToShortlist,
  //   removeCreatorFromShortlist,
  //   updateCreatorStatus,
  //   getCampaignAnalytics,
  //   deleteCampaign
} from "../controllers/campaignController.js";
// import { authenticateUser } from "../middleware/auth.js"; // Add when auth is ready

const router = express.Router();

// Apply auth middleware to all routes
// router.use(authenticateUser);

// Campaign CRUD
router.post("/", createCampaign);
// router.get("/", getUserCampaigns);
// router.get("/analytics", getCampaignAnalytics);
// router.get("/:campaignId", getCampaign);
// router.put("/:campaignId", updateCampaign);
// router.delete("/:campaignId", deleteCampaign);

// Campaign steps
// router.put("/:campaignId/step", updateCampaignStep);

// Creator management
// router.post("/:campaignId/creators", addCreatorsToShortlist);
// router.delete("/:campaignId/creators/:creatorId", removeCreatorFromShortlist);
// router.put("/:campaignId/creators/:creatorId", updateCreatorStatus);

export default router;
