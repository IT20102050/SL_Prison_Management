import React, {useState} from "react";
import { Box, useTheme, Button, TextField } from "@mui/material";
import { useGetallPrisonersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const ListPrisoners = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetallPrisonersQuery();
  const [searchValue, setSearchValue] = useState("");
  console.log("data", data);

  //For sear option
  const filteredData = data?.filter((item) =>
  item.nic.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };


  const columns = [
    // {
    //   field: "_id",
    //   headerName: "Prisoner ID",
    //   flex: 1,
    // },
    {
      field: "fullname",
      headerName: "Full Name",
      flex: 1,
    },
    {
      field: "nic",
      headerName: "NIC",
      flex: 1,
    },
    {
      field: "dateofbirth",
      headerName: "Date Of Birth",
      flex: 1,
    },
    {
      field: "sex",
      headerName: "Sex",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
        field: "address",
        headerName: "Address",
        flex: 1,
      },
      {
        field: "action",
        headerName: "Action",
        flex: 1,
        renderCell: (params) => {
          const { id } = params.row; // assuming your row data has an "id" property
          return (
            <div>
              <Button
                variant="contained"
                color="secondary"
                href={`/updatePrisoner/${params.row._id}`}
              >
                Edit
              </Button>{" "}
              <Button
                variant="contained"
                style={{ backgroundColor: "#99EF37", color: "white" }}
                href={`/profile/${params.row._id}`}
              >
                Profile
              </Button>{" "}
            </div>
          );
        },
      },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="listPrisoners" subtitle="List of all Prisoner Details" />
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
            label="Search by NIC"
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

export default ListPrisoners;
