import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  useTheme,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const EditJailing = () => {
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [capacity, setCapacity] = useState("");
  const [jurisdictions, setJurisdiction] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getJailingById();
  }, []);

  const getJailingById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/client/jailings/${id}`
      );
      console.log(response.data);
      setStatus(response.data.status);
      setCategory(response.data.category);
      setCapacity(response.data.capacity);
      setJurisdiction(response.data.jurisdictions);
    } catch (error) {
      console.log(error);
    }
  };

  const updateJailing = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5001/client/jailings/${id}`, {
        status,
        category,
        capacity,
        jurisdictions,
      });
      navigate("/jailing");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box m="2.5rem 10.5rem">
      <div className="columns mt-5">
        <div className="column is-half">
          <h1>Update Jail</h1>
          <br></br>
          <form onSubmit={updateJailing}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                label="Status"
                variant="outlined"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="status"
                fullWidth
                margin="normal"
                required
              >
                <MenuItem value={"Available"}>Available</MenuItem>
                <MenuItem value={"Not Availabe"}>Not Available</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                label="Category"
                variant="outlined"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="category"
                fullWidth
                margin="normal"
                required
              >
                <MenuItem value={"Crime"}>Crime</MenuItem>
                <MenuItem value={"Violence"}>Violence</MenuItem>
                <MenuItem value={"Robbery"}>Robbery</MenuItem>
                {/* <MenuItem value={"Child Abuse"}>Child Abuse</MenuItem>
              <MenuItem value={"Real Estats"}>Real Estats</MenuItem> */}
              </Select>
            </FormControl>

            <TextField
              label="Capacity"
              variant="outlined"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="capacity"
              fullWidth
              margin="normal"
              required
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Jurisdiction
              </InputLabel>
              <Select
                label="Jurisdictions"
                variant="outlined"
                value={jurisdictions}
                onChange={(e) => setJurisdiction(e.target.value)}
                placeholder="jurisdictions"
                fullWidth
                margin="normal"
                required
              >
                <MenuItem value={"Decided"}>Decided</MenuItem>
                <MenuItem value={"Not Decided"}>Not Decided</MenuItem>
              </Select>
            </FormControl>

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

export default EditJailing;
