import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, useTheme, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const [category, setCategory] = useState("");
    const [acronym, setAcronym] = useState("");
    const navigate = useNavigate();

    const theme = useTheme();

    const saveCategories = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5001/client/categories", {
            category,
            acronym,
        });
        navigate("/category");
      }  catch (error) {
        console.log(error);
      }
    };

    return (
      <Box m="2.5rem 10.5rem">
        <div className="columns mt-5">
          <div className="columns is-half">
            <h1>Add Category</h1>
            <br></br>
            <form onSubmit={saveCategories}>
                <TextField
                  label="Category"
                  variant="outlined"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="category"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Acronym"
                  variant="outlined"
                  value={acronym}
                  onChange={(e) => setAcronym(e.target.value)}
                  placeholder="acronym"
                  fullWidth
                  margin="normal"
                  required                
                />

                <br></br>
                <br></br>
                <Button
                  sx={{
                    backgroundColor: theme.palette.secondary.light,
                    color: theme.palette.background.alt,
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    float: "right",
                  }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
            </form>
          </div>
        </div>
      </Box>  
    );
};

export default AddCategory;