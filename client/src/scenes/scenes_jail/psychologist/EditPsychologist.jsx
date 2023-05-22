import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  useTheme,
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const EditPsychologist = () => {
  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const [reassign_date, setReassignDate] = useState("");
  const [p_category, setCate] = useState("");
  const [role, setRole] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPsychologistById();
  }, []);

  const getPsychologistById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/client/psychologists/${id}`
      );
      console.log(response.data);
      setName(response.data.name);
      setQualification(response.data.qualification);
      setReassignDate(
        new Date(response.data.reassign_date).toISOString().substr(0, 10)
      );
      setCate(response.data.p_category);
      setRole(response.data.role);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePsychologist = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5001/client/psychologists/${id}`, {
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

  return (
    <Box m="2.5rem 13.5rem">
      <div className="columns mt-5">
        <div className="column is-half">
          <h1>Update a Psychologist</h1>
          <br></br>
          <form onSubmit={updatePsychologist}>
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
                <MenuItem value={"Child Abuse"}>Child Abuse</MenuItem>
                <MenuItem value={"Real Estats"}>Real Estats</MenuItem>
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
              Update
            </Button>

            <Button
              sx={{
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.background.alt,
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                marginRight: "15px",
                float: "right",
              }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Discard
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default EditPsychologist;
