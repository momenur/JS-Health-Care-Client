import { Box, Typography } from "@mui/material";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Typography>This is Common</Typography>
      {children}
    </Box>
  );
};

export default DashboardLayout;
