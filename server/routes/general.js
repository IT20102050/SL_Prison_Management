import express from "express";
import { logout, postLogin, test } from "../controllers/auth.js";
import ensureAuth from "../middleware/auth.js";
import {
  getUser,
  getDashboardStats,
  getprisonerDashboardStats,
} from "../controllers/general.js";
const router = express.Router();

// PART OF INVENTORY /////////////////////////////////

router.post("/login", postLogin);
router.get("/test", test);
router.get("/logout", logout);
router.get("/user/:id", getUser);
router.get("/dashboard", ensureAuth, getDashboardStats);

// PART OF PROFILE ///////////////////////////////////

router.get("/prisonerDashboard", ensureAuth, getprisonerDashboardStats);

export default router;
