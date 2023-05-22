import React, { useState } from "react";
import { Box, Button, useTheme, TextField } from "@mui/material";
import { useGetStaffsQuery } from "state/api";
import Header from "components/componentsStaff/Header";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
//import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from "@mui/icons-material/CalendarMonthRounded";

const Staffs = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetStaffsQuery();
  const [searchValue, setSearchValue] = useState("");
  console.log("data", data);

  //For search option
  const filteredData = data?.filter((item) =>
    item.sname.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const columns = [
    // {
    //   field: "_id",
    //   headerName: "ID",
    //   flex: 0.75,
    // },
    {
      field: "sname",
      headerName: "Name",
      flex: 0.75,
    },
    {
      field: "NIC",
      headerName: "NIC",
      flex: 0.75,
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 0.75,
    },
    {
      field: "PhoneNumber",
      headerName: "Phone Number",
      flex: 0.75,
    },
    // {
    // field: "designation",
    //   headerName: "Designation",
    // flex: 1,
    // },
    {
      field: "StaffName",
      headerName: "Staff Name",
      flex: 0.8,
    },

    {
      headerName: "Activity",
      flex: 1,
      renderCell: (params) => {
        const { id } = params.row; // assuming your row data has an "id" property

        return (
          <Box key={id} display="flex" justifyContent="center">
            <Button
              variant="contained"
              style={{ backgroundColor: "#99EF37", color: "white" }}
              startIcon={<CheckCircleOutlineIcon />}
              href={`/staff attendance/${params.row._id}`}
            ></Button>

            <Link
              to={`/Edit/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                color="secondary"
                sx={{ mr: 1, marginLeft: "10px" }}
              >
                Edit
              </Button>
            </Link>
            <Button
              variant="contained"
              //startIcon={<DeleteIcon />}
              color="error"
              href={`/Resignation/${params.row._id}`}
            >
              Resignation
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Display Staff Details" subtitle="List of all Staffs" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <Box mb={2}>
          <TextField
            id="search"
            label="Search by item name"
            variant="outlined"
            value={searchValue}
            onChange={handleSearch}
            fullWidth
          />
        </Box>

        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={filteredData || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Staffs;
