import { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const AddJailing = () => {
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [capacity, setCapacity] = useState("");
  const [jurisdictions, setJurisdiction] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();

  const saveJailing = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/client/jailings", {
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

  const handleClear = () => {
    setStatus("");
    setCategory("");
    setCapacity("");
    setJurisdiction("");
  };

  return (
    <Box m="2.5rem 10.5rem">
      <div className="columns mt-5">
        <div className="column is-half">
          <h1>Add Jail</h1>
          <br></br>
          <form onSubmit={saveJailing}>
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
              <MenuItem value={"Real Estats"}>Real Estats</MenuItem>
              <MenuItem value={"Cyber Crime"}>Cyber Crime</MenuItem>
              <MenuItem value={"Benefit Fraud"}>Benefit Fraud</MenuItem> */}
                {/* <MenuItem value={"Terrorism"}>Terrorism</MenuItem>
              <MenuItem value={"Bribery"}>Bribery</MenuItem>
              <MenuItem value={"Arson"}>Arson</MenuItem>
              <MenuItem value={"Adultery"}>Adultery</MenuItem> */}
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

export default AddJailing;
