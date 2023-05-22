import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema(
  {
    sid: {
      required: true,
      type: String,
    },
    sname: {
      required: true,
      type: String,
    },
    StaffName: {
      required: true,
      type: String,
    },
    sdate: {
      required: true,
      type: Date,
    },
    status: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const Attendance = mongoose.model("attendance", AttendanceSchema);
export default Attendance;
