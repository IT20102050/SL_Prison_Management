import React, { useState } from "react";
import { Box, useTheme, Button, TextField } from "@mui/material";
import { useGetJailingQuery } from "state/api";
import Header from "components/com_jail/Header";
import { DataGrid } from "@mui/x-data-grid";

const Jailing = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetJailingQuery();
  const [searchValue, setSearchValue] = useState("");
  console.log("data", data);

  //For sear option
  const filteredData = data?.filter((name) =>
    name.category.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  

  const columns = [
    // {
    //  field: "_id",
    //  headerName: "Jail ID",
    //  flex: 1,
    // },
    {
     field: "category",
     headerName: "Category",
     flex: 0.5,
    },
    {
     field: "capacity",
     headerName: "Capacity",
     flex: 1,
    },
    {
     field: "jurisdictions",
     headerName: "Jurisdiction",
     flex: 1,
    },
    {
      field: "status",
     headerName: "Status",
     flex: 1,
    },
    {
      headerName: "Activity",
      flex: 1,
      renderCell: (params) => {
        //const { id } = params.row;
        return (
          <div>
            <Button
              variant="contained"
              color="secondary"
              href={`/editJailing/${params.row._id}`}
            >
              Edit
            </Button>{" "}
            <tb></tb>
            <tb></tb>
            <tb></tb>
          </div>
        );
      },
    },
  ];
  
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Jail" subtitle="List of all jails" />
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
        href={`/addJailing`}
      >
        Add New Jail
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
          "& .MuiDataGrid-footerController": {
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
            label="Search by jail name"
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

export default Jailing;