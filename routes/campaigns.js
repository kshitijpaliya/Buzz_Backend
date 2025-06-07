import express from "express";
import { createCampaign } from "../controllers/campaignsController.js";

const router = express.Router();

// Campaign CRUD
router.post("/", createCampaign);

// Creator filtering

export default router;
