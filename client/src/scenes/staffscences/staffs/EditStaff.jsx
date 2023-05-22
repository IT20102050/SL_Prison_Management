import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  useTheme,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const EditStaff = () => {
  const [sname, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [Email, setEmail] = useState("");
  const [designation, setdesignation] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [BasicSalary, setBasicSalary] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [StaffName, setStaffName] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();
  const { _id } = useParams();

  const staffNames = [
    "Correctional Officers",
    "Wardens",
    "Administrative Staff",
    "Medical Staff",
    "Psychologists and Counselors",
    "Support Staff",
    "Educational Staff",
  ];
  useEffect(() => {
    getStaffById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStaffById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/client/staffs/${_id}`
      );
      console.log(response.data);
      setName(response.data.sname);
      setNIC(response.data.NIC);
      setEmail(response.data.Email);
      setdesignation(response.data.designation);
      setBirthday(new Date(response.data.Birthday).toISOString().substr(0, 10));
      setGender(response.data.Gender);
      setAddress(response.data.Address);
      setBasicSalary(response.data.BasicSalary);
      setPhoneNumber(response.data.PhoneNumber);
      setStaffName(response.data.StaffName);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStaff = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5001/client/staffs/${_id}`, {
        sname,
        NIC,
        Email,
        designation,
        Birthday,
        Gender,
        Address,
        BasicSalary,
        PhoneNumber,
        StaffName,
      });
      navigate("/Display  Staff Details");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box m="2.5rem 10.5rem">
      <div className="columns mt-5">
        <div className="column is-half">
          <h1>Update Staff</h1>
          <br></br>
          <form onSubmit={updateStaff}>
            <TextField
              label="Name"
              variant="outlined"
              value={sname}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              fullWidth
              margin="normal"
            />

            <TextField
              label="NIC"
              variant="outlined"
              value={NIC}
              onChange={(e) => setNIC(e.target.value)}
              placeholder="NIC"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Designation"
              variant="outlined"
              value={designation}
              onChange={(e) => setdesignation(e.target.value)}
              placeholder="Designation"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Date of Birth"
              variant="outlined"
              type="Date"
              value={Birthday}
              onChange={(e) => setBirthday(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            {/* <div className="field">
              <label className="lable">Gender</label>
              <div className="control">
                <div className="select  is-fullwidth">
                  <select
                    value={Gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div> */}

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">sex</InputLabel>
              <Select
                label="Sex"
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
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
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Basic Salary"
              variant="outlined"
              value={BasicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              placeholder="Basic Salary"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              fullWidth
              margin="normal"
            />
            <Select
              variant="outlined"
              id="staff-name-select"
              value={StaffName}
              onChange={(e) => setStaffName(e.target.value)}
              fullWidth
              displayEmpty
              margin="normal"
              required
            >
              <MenuItem value="" disabled>
                Select Staff Name
              </MenuItem>
              {staffNames.map((staffName) => (
                <MenuItem key={staffName} value={staffName}>
                  {staffName}
                </MenuItem>
              ))}
            </Select>

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
                backgroundColor: theme.palette.grey[300],
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
              href={`/Discard`}
            >
              Discard
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default EditStaff;
