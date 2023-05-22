import Medicine from "../models/Medicine.js";
import Food from "../models/Food.js";
import Staff from "../models/Staff.js";
import Attendance from "../models/Attendance.js";
import Jailing from "../models/Jailing.js";
import Category from "../models/Category.js";
import Psychologist from "../models/Psychologist.js";

// PART OF INVENTORY  /////////////////////////////////////////

//get all items from inventories

export const getInventories = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    const foods = await Food.find();
    const Inventory = [...medicines, ...foods];
    res.status(200).json(Inventory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/***************************************************************************************************** */

//get all items from medicines

export const getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get medicine by id

export const getMedicinesById = async (req, res) => {
  try {
    const medicines = await Medicine.findById(req.params.id);
    res.json(medicines);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// add medicine items

export const saveMedicines = async (req, res) => {
  const medicines = new Medicine(req.body);
  try {
    const insertedmedicines = await medicines.save();
    res.status(201).json(insertedmedicines);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update medicine items

export const updateMedicines = async (req, res) => {
  try {
    const updatedmedicines = await Medicine.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedmedicines);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete medicine items

export const deleteMedicines = async (req, res) => {
  try {
    const deletedmedicines = await Medicine.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedmedicines);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/***************************************************************************************** */

//get all items from foods

export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get food by id

export const getFoodsById = async (req, res) => {
  try {
    const foods = await Food.findById(req.params.id);
    res.json(foods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// add food items

export const saveFoods = async (req, res) => {
  const foods = new Food(req.body);
  try {
    const insertedfoods = await foods.save();
    res.status(201).json(insertedfoods);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update food items

export const updateFoods = async (req, res) => {
  try {
    const updatedfoods = await Food.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedfoods);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete food items

export const deleteFoods = async (req, res) => {
  try {
    const deletedfoods = await Food.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedfoods);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// PART OF STAFF  ////////////////////////////////////////////////////////////////


export const getStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find();
    res.status(200).json(staffs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStaffById = async (req, res) => {
  try {
    const staffs = await Staff.findById(req.params.id);
    res.json(staffs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveStaff = async (req, res) => {
  const staffs = new Staff(req.body);
  try {
    const insertStaff = await staffs.save();
    res.status(201).json(insertStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update

export const updateStaff = async (req, res) => {
  try {
    const updatestaff = await Staff.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatestaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete

export const deleteStaff = async (req, res) => {
  try {
    const deletestafffs = await Staff.deleteOne({ _id: req.params.id });
    res.status(200).json(deletestafffs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//add attendance
export const AttendanceSubmit = async (req, res) => {
  const attendances = new Attendance(req.body);
  try {
    const insertedStaffAttendance = await attendances.save();
    res.status(201).json(insertedStaffAttendance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const saveAttendance = async (req, res) => {
  const attendances = new Attendance(req.body);
  try {
    const insertedAttendances = await attendances.save();
    res.status(201).json(insertedAttendances);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get all attendance
export const getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.find();
    res.status(200).json(attendances);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};




// PART OF JAIL //////////////////////////////////////////////////

//get all available jails

export const getJails = async (req, res) => {
  try {
    const jailing = await Jailing.find();
    const Jails = [...Jailing];
    res.status(200).json(Jails);
  }catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/////////////////////////////////////////////////////

//get all jails

export const getJailing = async (req, res) => {
  try {
    const jailing = await Jailing.find();
    res.status(200).json(jailing);
  }catch (error) {
    res.status(404).json({ message: error.message });
  }
};

///////////////////////////////////////////////////

// get jail by id

export const getJailingById = async (req, res) => {
  try {
    const jailing = await Jailing.findById(req.params.id);
    res.json(jailing);
  }catch (error) {
    res.status(404).json({ message: error.message });
  }
};

///////////////////////////////////////////////////////

// add a jail

export const saveJailing = async (req, res) => {
  const jailing = new Jailing(req.body);
  try {
    const insertedjailing = await jailing.save();
    res.status(201).json(insertedjailing);
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
};

////////////////////////////////////////////////////////

//update a jail

export const updateJailing = async (req, res) => {
  try {
    const updatedjailing = await Jailing.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedjailing);
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
};

///////////////////////////////////////////////////////////

//get all categories

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

///////////////////////////////////////////////////////

// add a category

export const saveCategories = async (req, res) => {
  const categories = new Category(req.body);
  try {
    const insertedcategories = await categories.save();
    res.status(201).json(insertedcategories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/////////////////////////////////////////////////////

//get all psychologist details

export const getPsychologist = async (req, res) => {
  try {
    const psychologists = await Psychologist.find();
    res.status(200).json(psychologists);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/////////////////////////////////////////////////////

//get psychologist by Id

export const getPsychologistById = async (req, res) => {
  try {
    const psychologists = await Psychologist.findById(req.params.id);
    res.json(psychologists);
  }catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//////////////////////////////////////////////////////

//add a psychologist

export const savePsychologist = async (req, res) => {
  const psychologist = new Psychologist(req.body);
  try {
    const insertedpsychologist = await psychologist.save();
    res.status(201).json(insertedpsychologist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

///////////////////////////////////////////////////

//update a psychologist

export const updatePsychologist = async (req, res) => {
  try {
    const updatedpsychologist = await Psychologist.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedpsychologist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

////////////////////////////////////////////////////////

//delete a psychologist

export const deletePsychologist = async (req, res) => {
  try {
    const deletedpsychologist = await Psychologist.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedpsychologist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

