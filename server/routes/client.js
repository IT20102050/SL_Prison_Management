import express from "express";
import {
  deleteFoods,
  deleteMedicines,
  getFoods,
  getInventories,
  getMedicines,
  getMedicinesById,
  saveFoods,
  saveMedicines,
  updateFoods,
  updateMedicines,
  getFoodsById,
  //Staff
  getStaffs,
  saveStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  saveAttendance,
  AttendanceSubmit,
  //Jail
  getJails,
  getCategories,
  saveCategories,
  getPsychologist,
  getPsychologistById,
  savePsychologist,
  updatePsychologist,
  deletePsychologist,
  saveJailing,
  updateJailing,
  getJailing,
  getJailingById,
} from "../controllers/client.js";

const router = express.Router();

// PART OF INVENTORY /////////////////////////////

router.get("/inventories", getInventories);

router.get("/medicines", getMedicines);
router.get("/medicines/:id", getMedicinesById);
router.post("/medicines", saveMedicines);
router.patch("/medicines/:id", updateMedicines);
router.delete("/medicines/:id", deleteMedicines);

router.get("/foods", getFoods);
router.get("/foods/:id", getFoodsById);
router.post("/foods", saveFoods);
router.patch("/foods/:id", updateFoods);
router.delete("/foods/:id", deleteFoods);

// PART OF STAFF /////////////////////////////////////

router.get("/staffs", getStaffs);
router.post("/staffs", saveStaff);
router.get("/staffs/:id", getStaffById);
router.patch("/staffs/:id", updateStaff);
router.delete("/staffs/:id", deleteStaff);

//attendance form
router.get("/staffs/:id", getStaffById);
router.post("/attendances", saveAttendance);
router.post("/attendances", AttendanceSubmit);

// PART OF JAIL ///////////////////////////////////////

router.get("/jails", getJails);

router.get("/jailings", getJailing);
router.get("/jailings/:id", getJailingById);
router.post("/jailings", saveJailing);
router.patch("/jailings/:id", updateJailing);

router.get("/categories", getCategories);
router.post("/categories", saveCategories);

router.get("/psychologists", getPsychologist);
router.get("/psychologists/:id", getPsychologistById);
router.post("/psychologists", savePsychologist);
router.patch("/psychologists/:id", updatePsychologist);
router.delete("/psychologists/:id", deletePsychologist);



export default router;
