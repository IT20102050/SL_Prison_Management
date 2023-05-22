import React, { useState } from "react";
import axios from "axios";
import { Box, useTheme, Button, TextField } from "@mui/material";
import { useGetMedicinesQuery } from "state/api";
import Header from "components/com_inventory/Header";
import { DataGrid } from "@mui/x-data-grid";

const Medicine = () => {
  const theme = useTheme();
  const { data, isLoading, refetch } = useGetMedicinesQuery();
  const [searchValue, setSearchValue] = useState("");
  console.log("data", data);

  //For sear option
  const filteredData = data?.filter((item) =>
    item.item_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  /*************************************** */

  const deleteMedicines = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this medicine item?"
    );
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5001/client/medicines/${id}`);
        refetch(); // using the refetch function provided by the useGetMedicinesQuery() hook to fetch updated data
      } catch (error) {
        console.log(error);
      }
    }
  };

  const columns = [
    // {
    //   field: "_id",
    //   headerName: "ID",
    //   flex: 1,
    // },
    {
      field: "item_name",
      headerName: "Item Name",
      flex: 0.5,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "manufacturer",
      headerName: "Manufacturer",
      flex: 1,
    },
    {
      field: "unit_price",
      headerName: "Unit Price",
      flex: 1,
    },
    {
      field: "total_quantity",
      headerName: "Total Quantity",
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
              href={`/editMedi/${params.row._id}`}
            >
              Edit
            </Button>{" "}
            <tb></tb>
            <tb></tb>
            <tb></tb>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteMedicines(params.row._id)}
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
      <Header title="Medicine" subtitle="List of all medicine items" />
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
        href={`/addMedi`}
      >
        Add New Item
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

export default Medicine;
