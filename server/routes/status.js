import express from "express";
import {
  getStatus,
  //Profile
  getstatusPrisoner,
} from "../controllers/status.js";

const router = express.Router();

// PART OF INVENTORY ///////////////////////
router.get("/status", getStatus);

// PART OF PROFILE /////////////////////////
router.get("/prisoner", getstatusPrisoner);

export default router;
