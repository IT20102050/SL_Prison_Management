import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  useTheme,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddAttendance = () => {
  const [sid, setId] = useState("");
  const [sname, setName] = useState("");
  const [StaffName, setStaffName] = useState("");
  const [status, setStatus] = useState("Present");
  const [sdate, setDate] = useState(new Date());
  const { _id } = useParams();
  console.log("id :", _id);
  const navigate = useNavigate();
  const theme = useTheme();

  const getStaffById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/client/staffs/${_id}`
      );
      console.log(response.data);
      setId(response.data._id);
      setName(response.data.sname);
      setStaffName(response.data.StaffName);
    } catch (error) {
      console.log(error);
    }
  };

  //attendance new
  
  const AttendanceSubmit = async (e) => {
    e.preventDefault();
    const body = {
      sid,
      sname,
      StaffName,
      status,
      sdate,
    };
    try {
      const response = await axios.post(
        "http://localhost:5001/client/attendances",
        body
      );
      console.log("add=", response.data);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStaffById();
  }, [_id]);

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={AttendanceSubmit}>
          <Box m="2.5rem 10.5rem">
            <TextField
              label="Staff ID"
              variant="outlined"
              value={_id}
              placeholder="Staff ID"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Name"
              variant="outlined"
              value={sname}
              placeholder="Name"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Staff Name"
              variant="outlined"
              value={StaffName}
              placeholder="Name"
              fullWidth
              margin="normal"
            />
            {/* <Calendar
  value={date}
  onChange={setDate}
/>*/}

            <DatePicker
              selected={sdate}
              dateFormat="yyyy-MM-dd"
              placeholderText="Date"
              isClearable
            />

            <Box sx={{ width: "100%", marginBottom: "1rem" }}>
              <Select
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                fullWidth
              >
                <MenuItem value="Present">Present</MenuItem>
                <MenuItem value="Absent">Absent</MenuItem>
                <MenuItem value="Late">Late</MenuItem>
              </Select>
            </Box>
            <Button
              sx={{
                bgcolor: "grey.300",
                color: "background.alt",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                float: "right",
              }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default AddAttendance;
