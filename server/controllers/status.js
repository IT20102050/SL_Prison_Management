import Medicine from "../models/Medicine.js";
import Food from "../models/Food.js";
import Prisoner from "../models/prisonerModel.js";


//PART OF INVENTORY /////////////////////////////////////////
//get all items from status

export const getStatus = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    const foods = await Food.find();
    const Status = [...medicines, ...foods];
    res.status(200).json(Status[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// PART OF PROFILE ///////////////////////////////////////////

export const getstatusPrisoner = async (req, res) => {
  try {
    const prisoner = await Prisoner.aggregate([
      {
        $group: {
          _id: "$category",
          category: { $addToSet: "$category" },
          count: { $sum: 1 },
        },
      },
      { $project: { _id: 0 } },
    ]).sort({ category: 1 });
    res.status(200).json(prisoner);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
