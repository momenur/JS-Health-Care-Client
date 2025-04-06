"use client";

import { Box, styled } from "@mui/material";
import React from "react";

const StyledDashedLine = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid",
  borderColor: theme.palette.primary.main,
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const DashedLine = () => {
  return (
    <>
      <StyledDashedLine />
    </>
  );
};

export default DashedLine;
