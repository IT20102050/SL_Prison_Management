import React, { useState } from "react";
import axios from "axios";
import { Box, useTheme, Button, TextField } from "@mui/material";
import { useGetFoodsQuery } from "state/api";
import Header from "components/com_inventory/Header";
import { DataGrid } from "@mui/x-data-grid";

const Food = () => {
  const theme = useTheme();
  const { data, isLoading, refetch } = useGetFoodsQuery();
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

  const deleteFoods = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this food item?"
    );
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5001/client/foods/${id}`);
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
        //const { id } = params.row; // assuming your row data has an "id" property
        return (
          <div>
            <Button
              variant="contained"
              color="secondary"
              href={`/editFood/${params.row._id}`}
            >
              Edit
            </Button>{" "}
            <tb></tb>
            <tb></tb>
            <tb></tb>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteFoods(params.row._id)}
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
      <Header title="Food" subtitle="List of all food items" />
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
        href={`/addFood`}
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

export default Food;
