import express from "express";
import { getStaffChart } from "../controllers/staffchart.js";

const router = express.Router();

router.get("/status", getStaffChart);

export default router;
