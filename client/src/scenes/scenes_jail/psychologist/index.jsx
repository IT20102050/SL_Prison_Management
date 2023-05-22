import React, { useState } from "react";
import axios from "axios";
import { Box, useTheme, Button, TextField } from "@mui/material";
import { useGetPsychologistQuery } from "state/api";
import Header from "components/com_jail/Header";
import { DataGrid } from "@mui/x-data-grid";

const Psychologist = () => {
    const theme = useTheme();
    const { data, isLoading, refetch } = useGetPsychologistQuery();
    const [searchValue, setSearchValue] = useState("");
    console.log("data", data);

    //For sear option
    const filteredData = data?.filter((psycholo) => 
      psycholo.role.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    ////////////////////////////////////////////////////////////

    const deletePsychologist = async (id) => {
      const confirmed = window.confirm(
        "Are you sure you want to delete this psychologist record?"
      );
      if (confirmed) {
        try {
            await axios.delete(`http://localhost:5001/client/psychologists/${id}`);
            refetch();
        } catch (error) {
        console.log(error);
        }
      }  

    };

    const columns = [
        // {
        //     field: "_id",
        //     headerName: "ID",
        //     flex: 1,
        // },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
        },
        {
            field: "qualification",
            headerName: "Qualification",
            flex: 0.5,
        },
        {
            field: "p_category",
            headerName: "Psychologist_Category",
            flex: 1,
        },
        {
            field: "role",
            headerName: "Role",
            flex: 1,
        },
        {
        headerName: "Activity",
        flex: 1,
        renderCell: (params) => {
          // const { } = params.row; // assuming your row data has an "id" property
          return (
            <div>
              <Button
                variant="contained"
                color="secondary"
                href={`/editPsycholo/${params.row._id}`}
              >
                Edit
              </Button>{" "}
              <tb></tb>
              <tb></tb>
              <tb></tb>
              <Button
                variant="contained"
                color="error"
                onClick={() => deletePsychologist(params.row._id)}
              >
                Delete
              </Button>
            </div>
          );
        },
      },
    ];

    
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Psychologist" subtitle="List of all psychologists" />
      <br></br>
      <Button
        sx={{
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.background.alt,
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
        type="primary"
        href={`/addPsycholo`}
      >
        Add New Psychologist
      </Button>

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
            label="Search by psychologist role"
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

export default Psychologist;