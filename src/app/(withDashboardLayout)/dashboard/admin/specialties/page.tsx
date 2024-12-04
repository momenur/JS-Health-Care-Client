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
import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtyQuery,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtyQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  // Handle Delete
  const handleDelete = async (id: string) => {
    console.log(id);
    try {
      const loadingToastId = toast.loading("Deleting specialty...");
      const res = await deleteSpecialty(id).unwrap();
      if (res?.id) {
        toast.dismiss(loadingToastId);
        toast.success("Specialty Deleted successfully!");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  //columns
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box py={1}>
            <Image alt="Icon" height={30} width={30} src={row?.icon} />
          </Box>
        );
      },
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
  // column is end

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
          <Typography
            textAlign="center"
            color="primary.main"
            sx={{
              fontSize: "20px",
              pt: "20px",
              pb: "10px",
            }}
          >
            Specialties
          </Typography>
          <DataGrid
            rows={data}
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

export default SpecialtiesPage;
