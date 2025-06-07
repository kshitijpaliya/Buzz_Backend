import express from "express";
import {
  getAllCreators,
  getCreatorById,
  // getCreatorsWithFilters,
  getFilterOptions,
} from "../controllers/creatorController.js";

const router = express.Router();
// Get filter options (niches, locations, etc.)
router.get("/filter-options", getFilterOptions);

// router.get("/filter-options", getFilterOptions);
router.get("/:id", getCreatorById);
// Always use getCreatorsWithFilters for main list
router.get("/", getAllCreators);

export default router;
