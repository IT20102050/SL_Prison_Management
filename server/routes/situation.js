import express from "express";
import {

    getSituation,

} from "../controllers/situation.js";

const router = express.Router();

router.get("/situation", getSituation);

export default router;