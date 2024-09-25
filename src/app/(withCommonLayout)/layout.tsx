import Navbar from "@/components/shared/navbar/Navbar";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};

export default CommonLayout;
