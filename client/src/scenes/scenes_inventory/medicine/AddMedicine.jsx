import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, useTheme, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddMedicine = () => {
  const [item_name, setItemName] = useState("");
  const [description, setDescript] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [manufacture_date, setManuDate] = useState("");
  const [expire_date, setExpDate] = useState("");
  const [category, setCategory] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [total_quantity, setTotQty] = useState("");
  const [status, setStatus] = useState("Available");
  const navigate = useNavigate();

  const theme = useTheme();


  const saveMedicines = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/client/medicines", {
        item_name,
        description,
        manufacturer,
        manufacture_date,
        expire_date,
        category,
        unit_price,
        total_quantity,
        status,
      });
      navigate("/medicine");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box m="2.5rem 10.5rem">
      <div className="columns mt-5">
        <div className="column is-half">
          <h1>Add Medicine</h1>
          <br></br>
          <form onSubmit={saveMedicines}>
            <TextField
              label="Item Name"
              variant="outlined"
              value={item_name}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="item name"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescript(e.target.value)}
              placeholder="description"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Manufacturer"
              variant="outlined"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              placeholder="manufacturer"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Manufacture Date"
              variant="outlined"
              value={manufacture_date}
              onChange={(e) => setManuDate(e.target.value)}
              placeholder="manufacture date"
              fullWidth
              margin="normal"
              required
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Expiry Date"
              variant="outlined"
              value={expire_date}
              onChange={(e) => setExpDate(e.target.value)}
              placeholder="expiry date"
              fullWidth
              margin="normal"
              required
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Category"
              variant="outlined"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="item name"
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Unit Price"
              variant="outlined"
              value={unit_price}
              onChange={(e) => setUnitPrice(e.target.value)}
              placeholder="unit price"
              fullWidth
              margin="normal"
              required
              type="float"
            />

            <TextField
              label="Quantity"
              variant="outlined"
              value={total_quantity}
              onChange={(e) => setTotQty(e.target.value)}
              placeholder="quantity"
              fullWidth
              margin="normal"
              required
              type="number"
            />

            <TextField
              label="Status"
              variant="outlined"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="status"
              fullWidth
              margin="normal"
              InputProps={{ readOnly: true }}
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

export default AddMedicine;
