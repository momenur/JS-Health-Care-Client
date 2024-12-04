import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const DoctorsPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button>Create Doctor</Button>
        <TextField size="small" placeholder="Search Doctor" />
      </Stack>
    </Box>
  );
};

export default DoctorsPage;
