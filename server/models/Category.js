import mongoose from "mongoose";

const CategorySchema = mongoose.Schema(

  {

    category: {
        required: true,
        type: String,
    },

    acronym: {
        required: true,
        type: String,
    },

  },
  
  { timestamps: true}
);

const Category = mongoose.model("Category", CategorySchema)
export default Category;