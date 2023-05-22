import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema(
  {
    sname: String,
    NIC: String,
    Email: String,
    designation: String,
    Birthday: Date,
    Gender: String,
    Address: String,
    BasicSalary: Number,
    PhoneNumber: Number,
    StaffName: String,
  },
  { timestamps: true }
);

const Staff = mongoose.model("staffs", StaffSchema);
export default Staff;
