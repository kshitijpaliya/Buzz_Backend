import express from "express";
import {
  createCampaign,
  getCampaignById,
} from "../controllers/campaignsController.js";

const router = express.Router();

// Campaign CRUD
router.get("/:campaignId", getCampaignById);
router.post("/", createCampaign);

// Creator filtering

export default router;
