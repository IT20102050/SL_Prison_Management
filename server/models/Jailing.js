import mongoose from "mongoose";

const JailingSchema = mongoose.Schema(
  {
    
    status: {
        required: true,
        type: String,
    },

    category: {
        required: true,
        type: String,
    },

    capacity: {
        required: true,
        type: String,
    },

    jurisdictions: {
        required: true,
        type: String,
    },

  },

  { timestamps: true} 
);

const Jailing = mongoose.model("Jailing", JailingSchema)
export default Jailing;