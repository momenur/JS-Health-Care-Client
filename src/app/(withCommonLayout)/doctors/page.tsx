import DoctorCard from "@/components/ui/doctor/DoctorCard";
import { Doctor } from "@/types/doctor";
import DashedLine from "@/ui/doctor/DashedLine";
import { Box, Container } from "@mui/material";
import React from "react";

interface PropType {
  searchParams: { specialties: string };
}

const Doctors = async ({ searchParams }: PropType) => {
  const res = await fetch("http://localhost:5000/api/v1/doctor");

  const { data } = await res.json();

  return (
    <Container
      sx={{
        my: 6,
      }}
    >
      {data?.map((doctor: Doctor, index: number) => (
        <Box key={doctor?.id} sx={{ bgcolor: "#f0f0f0", padding: 3 }}>
          <DoctorCard doctor={doctor} />
          {index + 1 < data?.length && <DashedLine />}
        </Box>
      ))}
    </Container>
  );
};

export default Doctors;
