import Attendance from "../models/Attendance.js";

export const getStaffChart = async (req, res) => {
  try {
    const attendance = await Attendance.aggregate([
      {
        $group: {
          _id: "$category",
          StaffName: { $addToSet: "$category" },
          count: { $sum: 1 },
        },
      },
      { $project: { _id: 0 } },
    ]).sort({ category: 1 });
    res.status(200).json(attendance[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
