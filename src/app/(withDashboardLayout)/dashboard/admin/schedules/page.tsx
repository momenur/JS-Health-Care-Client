"use client";

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import ScheduleModal from "./components/ScheduleModal";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Typography>This is Schedules Page</Typography>
    </Box>
  );
};

export default SchedulesPage;
