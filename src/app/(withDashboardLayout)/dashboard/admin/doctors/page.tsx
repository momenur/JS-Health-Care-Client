"use client";

import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DoctorModal from "./components/DoctorModal";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //Fetching data
  const { data, isLoading } = useGetAllDoctorsQuery({});
  const doctors = data?.doctors;
  const meta = data?.meta;

  //Handle Doctor delete
  const handleDelete = async (id: string) => {
    console.log(id);
  };

  //columns
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "apointmentFee",
      headerName: "Appointment Fee",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "currentWorkingPlace",
      headerName: "Hospital",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "Action",
      headerName: "Actions",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row?.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Doctor" />
      </Stack>

      {!isLoading ? (
        <Box>
          <Typography
            textAlign="center"
            color="primary.main"
            sx={{
              fontSize: "20px",
              pt: "20px",
              pb: "10px",
            }}
          >
            Doctors Table
          </Typography>
          <DataGrid
            rows={doctors}
            columns={columns}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 10 } },
            }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
          />
        </Box>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default DoctorsPage;
