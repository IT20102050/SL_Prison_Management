import mongoose from "mongoose";

const PsychologistSchema = mongoose.Schema(
  
  {
    name: {
      required: true,
      type: String,
    },

    qualification: {
        required: true,
        type: String,
    },

    reassign_date: {
        required: true,
        type: Date,
    },

    p_category: {
        required: true,
        type: String,
    },

    role: {
        required: true,
        type: String,
    },
  },

  { timestamps: true}
);

const Psychologist = mongoose.model("Psychologist", PsychologistSchema);
export default Psychologist;