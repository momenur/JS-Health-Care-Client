import CommonHeader from "@/components/ui/common/CommonHeader";
import DoctorCard from "@/components/ui/doctor/DoctorCard";
import { Doctor } from "@/types/doctor";
import DashedLine from "@/ui/doctor/DashedLine";
import { Box, Container, Typography } from "@mui/material";
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
      <Typography
        variant="h1"
        align="center"
        sx={{
          fontWeight: 600,
          fontSize: "40px",
          mb: 6,
          position: "relative",
          display: "inline-block",
          left: "50%",
          transform: "translateX(-50%)",
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "4px",
            backgroundColor: "#3b82f6",
            borderRadius: "2px",
          },
        }}
      >
        All doctors of our clinic
      </Typography>
      {data?.map((doctor: Doctor, index: number) => (
        <Box key={doctor?.id} sx={{ padding: 3, borderRadius: 2 }}>
          <DoctorCard doctor={doctor} />
          {index + 1 < data?.length && <DashedLine />}
        </Box>
      ))}
    </Container>
  );
};

export default Doctors;
