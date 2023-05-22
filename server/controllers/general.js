import User from "../models/user.js";
import Status from "../models/Status.js";
import Situation from "../models/Situation.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// PART OF INVENTORY /////////////////////////////////////////////////

export const getDashboardStats = async (req, res) => {
  try {
    /* Recent Transactions */
    const status = await Status.find().limit(50).sort({ createdOn: -1 });

    res.status(200).json({
      status,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// PART OF PROFILE ////////////////////////////////////////////////////

export const getprisonerDashboardStats = async (req, res) => {
  try {
    /* Recent Transactions */
    const status = await Status.find().limit(50).sort({ createdOn: -1 });

    res.status(200).json({
      status,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// PART OF JAIL ////////////////////////////////////////////////////////

export const getDashboardJail = async (req, res) => {
  try {
    /* Recent Transactions */
    const situation = await Situation.find().limit(50).sort({ createdOn: -1 });

    res.status(200).json({
      situation,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
