import React, { useState } from "react";
import { Box, useTheme, Button, TextField } from "@mui/material";
import { useGetCategoriesQuery } from "state/api";
import Header from "components/com_jail/Header";
import { DataGrid } from "@mui/x-data-grid";

const Category = () => {

  const theme = useTheme();
  const { data, isLoading } = useGetCategoriesQuery();
  const [searchValue, setSearchValue] = useState("");
  console.log("data", data)

  //For sear option
  const filteredData = data?.filter((cate) => 
    cate.acronym.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const columns = [
    {
        field: "category",
        headerName: "Category",
        flex: 0.5,
    },
    {
        field: "acronym",
        headerName: "Acronym",
        flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
        <Header title="Category" subtitle="List of categories"/>
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
          href={`/addcategory`}
        >
          Add New Category
        </Button>

        <Box
          mt="40px"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[100],
                boarderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme.palette.primary.light,
            },
            "& .MuiDataGrid=footerContainer": {
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
            label="Search by category name"
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

export default Category;