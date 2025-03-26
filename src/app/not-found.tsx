import { Box, Typography } from "@mui/material";
import React from "react";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Typography> THIS IS NOT FOUND PAGE</Typography>
      <Typography> No page found form this route</Typography>
    </Box>
  );
};

export default NotFoundPage;
