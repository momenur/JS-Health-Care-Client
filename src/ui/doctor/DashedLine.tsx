"use client";

import { Box, styled } from "@mui/material";
import React from "react";

const StyledDashedLine = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid",
  borderColor: "#c0c4c3",
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
