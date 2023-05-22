//import Psychologist from "../models/Psychologist.js";
//import Category from "../models/Category.js";
import Jailing from "../models/Jailing.js";

//get all items from status

export const getSituation = async (req, res) => {
  try {
    const jailings = await Jailing.aggregate([
      { $group: { _id: "$category", category: { $addToSet: "$category"}, count: { $sum: 2} } },
      { $project: { _id: 0} }
    ]).sort({category : 1});
    res.status(200).json(jailings[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};