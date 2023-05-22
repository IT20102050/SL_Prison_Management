import express from "express";
import {

  deletePrisoners,
  getallPrisoners,
  getPrisoners,
  getPrisonersById,
  // savePrisoners,
  updatePrisoners,
  savePrisoners,
  
} from "../controllers/prisoner.js";

const router = express.Router();

router.get("/allprisoners", getallPrisoners);

router.get("/prisoners", getPrisoners);
router.get("/prisoners/:id", getPrisonersById);
// router.post("/prisoners", savePrisoners);
router.post("/prisoners", savePrisoners);
router.patch("/prisoners/:id", updatePrisoners);
router.delete("/prisoners/:id", deletePrisoners);

export default router;
