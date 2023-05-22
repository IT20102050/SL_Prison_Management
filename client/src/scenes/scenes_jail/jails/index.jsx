import React, { useState } from "react";
import { Box, useTheme, TextField } from "@mui/material";
import { useGetJailsQuery } from "state/api";
import Header from "components/com_jail/Header";
import { DataGrid } from "@mui/x-data-grid";

const Jails = () => {

    const theme = useTheme();
    const { data, isLoading } = useGetJailsQuery();
    const [searchValue, setSearchValue] = useState("");
    console.log("data", data);

    //For sear option
    const filteredData = data?.filter((stat) =>
    stat.status.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    const handleSearch = (event) => {
      setSearchValue(event.target.value);
    };

    ////////////////////////////////////////

    const columns = [
      // {
      //   field: "_id",
      //   headerName: "Jail ID",
      //   flex: 1,       
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
        headerName: "Jurisdictions",
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
      },
    ];

    return (
      <Box m="1.5rem 2.5rem">
        <Header title="Jails" subtitle="List of availability of jails" />
        <br></br>
  
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
              label="Search by status"
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
}

export default Jails;