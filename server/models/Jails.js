import mongoose from "mongoose";

const JailsSchema = new mongoose.Schema(
  {
    status: {
        required: true,
        type: String,
    },

    capacity: {
        required: true,
        type: String,
    },

    category: {
        required: true,
        type: String,
    },

  },

  { timestamps: true}
);

const Jails = mongoose.model("Jails", JailsSchema)
export default Jails;