import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
  {
  
    item_name: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    manufacturer: {
      required: true,
      type: String,
    },
    manufacture_date: {
      required: true,
      type: Date,
    },
    expire_date: {
      required: true,
      type: Date,
    },
    category: {
      required: true,
      type: String,
    },
    unit_price: {
      required: true,
      type: Number,
    },
    total_quantity: {
      required: true,
      type: Number,
    },

    status: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", FoodSchema);
export default Food;
