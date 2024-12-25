"use client";

import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const DoctorSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Typography>This is Doctor Schedule Page</Typography>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
    </Box>
  );
};

export default DoctorSchedulePage;
