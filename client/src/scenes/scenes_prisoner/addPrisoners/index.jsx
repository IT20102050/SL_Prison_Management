import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, useTheme, Box} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import imageUpload from "../../../utils/imageUpload";

const AddPrisoners = () => {
  const [fullname, setFullName] = useState("");
  const [nic, setNic] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [dateofincarceration, setDateOfIncarceration] = useState("");
  const [releasedate, setReleaseDate] = useState("");
  const [image, setAddImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const theme = useTheme();

  const savePrisoners = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/prisoner/prisoners", {
        fullname,
        nic,
        dateofbirth,
        sex,
        address,
        category,
        dateofincarceration,
        releasedate,
        image,
      });
      navigate("/listprisoners");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const url = await imageUpload(file, 'prisoner')
    setAddImage(url);
  };

  return (
    <Box m="2.5rem 10.5rem">
      <div className="columns mt-5">
        <div className="column is-half">
          <h1>Add Prisoner</h1>
          <br></br>
          <form onSubmit={savePrisoners}>
            <TextField
              label="Full Name"
              variant="outlined"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="full name"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="NIC"
              variant="outlined"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              placeholder="nic"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Date Of Birth"
              variant="outlined"
              value={dateofbirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="date of birth"
              fullWidth
              margin="normal"
              required
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">sex</InputLabel>
            <Select
              label="Sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              placeholder="sex"
              fullWidth
              margin="normal"
              required
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>

            <TextField
              label="Address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="address"
              fullWidth
              margin="normal"
              required
            />

            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">category</InputLabel>
            <Select
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="category type"
              fullWidth
              margin="normal"
              required
            >
              <MenuItem value={"Murder"}>Murder</MenuItem>
              <MenuItem value={"Robbery"}>Robbery</MenuItem>
              <MenuItem value={"Drug"}>Drug</MenuItem>
              <MenuItem value={"Violence"}>Violence</MenuItem>
              <MenuItem value={"Society"}>Society</MenuItem>
              <MenuItem value={"Shoplifting"}>Shoplifting</MenuItem>
            </Select>
          </FormControl>

            <TextField
              label="Date Of Incarceration"
              variant="outlined"
              value={dateofincarceration}
              onChange={(e) => setDateOfIncarceration(e.target.value)}
              placeholder="date of incarceration"
              fullWidth
              margin="normal"
              required
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Release Date"
              variant="outlined"
              value={releasedate}
              onChange={(e) => setReleaseDate(e.target.value)}
              placeholder="release date"
              fullWidth
              margin="normal"
              required
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />  
             <input
             type="file"
             accept="image/*"
             onChange={handleImageChange}
           />
           {selectedImage && (
             <p>Selected image: {selectedImage.name}</p>
           )}

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

export default AddPrisoners;
