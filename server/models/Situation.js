import mongoose from "mongoose";

const SituationSchema = new mongoose.Schema(
{
    category: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
    jurisdictions: {
      required: true,
      type: String,  
    },
    name: {
      required: true,
      type: String,
    },
    role: {
      required: true,
      type: String,  
    },
  },

  { timestamps: true }

);
const Situation = mongoose.model("Situation", SituationSchema);
export default Situation;
