import { Doctor } from "@/types/doctor";
import DashedLine from "@/ui/doctor/DashedLine";
import { Box, Container } from "@mui/material";
import React from "react";

interface PropType {
  searchParams: { specialties: string };
}

const Doctors = async ({ searchParams }: PropType) => {
  let res;

  if (searchParams.specialties) {
    res = await fetch(
      `http://localhost:5000/api/v1/doctor?specialties=${searchParams.specialties}`
    );
  } else {
    res = await fetch("http://localhost:5000/api/v1/doctor");
  }

  const { data } = await res.json();

  // console.log(data);

  return (
    <Container>
      <DashedLine />
    </Container>
  );
};

export default Doctors;
