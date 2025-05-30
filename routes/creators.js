import express from "express";
import {
  getAllCreators,
  getCreatorById,
} from "../controllers/creatorController.js";

const router = express.Router();

router.get("/", getAllCreators); // Public route for dashboard
router.get("/:id", getCreatorById); // Public route for individual creator details
export default router;
