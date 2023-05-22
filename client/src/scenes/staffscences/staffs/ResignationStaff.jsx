import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, useTheme, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetStaffsQuery } from "state/api";

const ResignationStaff = () => {
  const [id, setid] = useState("");
  const [sname, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [designation, setdesignation] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();
  const { refetch } = useGetStaffsQuery();
  const { _id } = useParams();

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
      setdesignation(response.data.designation);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStaff = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5001/client/staffs/${_id}`, {
        _id,
        sname,
        NIC,
        designation,
      });
      navigate("/Display  Staff Details");
    } catch (error) {
      console.log(error);
    }
  };

  //delete

  const deleteStaff = async (id) => {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5001/client/staffs/${_id}`);
        refetch(); // using the refetch function provided by the useGetMedicinesQuery() hook to fetch updated data
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box m="2.5rem 10.5rem">
      <div className="columns mt-5">
        <div className="column is-half">
          <h1>Staff Resignation</h1>
          <br></br>
          <form onSubmit={updateStaff}>
            <TextField
              label="Staff ID"
              variant="outlined"
              value={_id}
              onChange={(e) => setid(e.target.value)}
              placeholder="Staff ID"
              fullWidth
              margin="normal"
            />

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
              label="Designation"
              variant="outlined"
              value={designation}
              onChange={(e) => setdesignation(e.target.value)}
              placeholder="Designation"
              fullWidth
              margin="normal"
            />

            <br></br>
            <br></br>

            <Button
              sx={{
                backgroundColor: theme.palette.error.dark,
                color: theme.palette.background.alt,
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                float: "right",
                marginLeft: "20px",
              }}
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => deleteStaff(_id)}
            >
              Mark As Resigned
            </Button>

            <Button
              sx={{
                backgroundColor: theme.palette.grey[300],
                color: theme.palette.background.alt,
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
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

export default ResignationStaff;
