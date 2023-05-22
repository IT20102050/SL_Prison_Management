import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  useTheme,
  Box,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddPsychologist = () => {
  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const [reassign_date, setReassignDate] = useState("");
  const [p_category, setCate] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();

  const savePsychologist = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/client/psychologists", {
        name,
        qualification,
        reassign_date,
        p_category,
        role,
      });
        navigate("/psychologist");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClear = () => {
    setName("");
    setQualification("");
    setReassignDate("");
    setCate("");
    setRole("");
  };

  return (
    <Box m="2.5rem 10.5rem">
      <div className="columns mt-5">
        <div className="column is-half">
          <h1>Add a Psychologist</h1>
          <br></br>
          <form onSubmit={savePsychologist}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Qualification"
              variant="outlined"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              placeholder="qualification"
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Reassign_Date"
              variant="outlined"
              value={reassign_date}
              onChange={(e) => setReassignDate(e.target.value)}
              placeholder="reassign_date"
              fullWidth
              margin="normal"
              required
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Jail Category
              </InputLabel>
              <Select
                label="Jail Category"
                variant="outlined"
                value={p_category}
                onChange={(e) => setCate(e.target.value)}
                placeholder="p_category"
                fullWidth
                margin="normal"
                required
              >
                <MenuItem value={"Crime"}>Crime</MenuItem>
                <MenuItem value={"Violence"}>Violence</MenuItem>
                <MenuItem value={"Robbery"}>Robbery</MenuItem>
                {/* <MenuItem value={"Child Abuse"}>Child Abuse</MenuItem> */}
                {/* <MenuItem value={"Real Estats"}>Real Estats</MenuItem> */}
              </Select>
            </FormControl>

            <TextField
              label="Role"
              variant="outlined"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="role"
              fullWidth
              margin="normal"
              required
            />

            <br></br>
            <br></br>

            <Button variant="contained" color="error" onClick={handleClear}>
              Clear
            </Button>

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

export default AddPsychologist;
