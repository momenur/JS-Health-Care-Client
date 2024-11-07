"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialistModal";
import { useGetAllSpecialtyQuery } from "@/redux/api/specialtiesApi";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtyQuery({});
  console.log(data);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(!isModalOpen)}>
          Create Specialty
        </Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      <Box>
        <Typography>Display Specialties</Typography>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
