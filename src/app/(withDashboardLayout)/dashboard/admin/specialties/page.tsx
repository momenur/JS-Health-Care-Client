"use client";

import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialistModal";
import { useGetAllSpecialtyQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtyQuery({});

  // Handle Delete
  const handleDelete = (id: string) => {
    console.log(id);
  };
  //columns
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 100 },
    {
      field: "icon",
      headerName: "Icon",
      width: 100,
      renderCell: ({ row }) => {
        return (
          <Box py={1}>
            <Image alt="Icon" height={25} width={25} src={row?.icon} />
          </Box>
        );
      },
    },
    {
      field: "Action",
      headerName: "Actions",
      width: 100,
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
        <Button onClick={() => setIsModalOpen(!isModalOpen)}>
          Create Specialty
        </Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      {!isLoading ? (
        <Box>
          <Typography>Display Specialties</Typography>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 5 } },
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

export default SpecialtiesPage;
