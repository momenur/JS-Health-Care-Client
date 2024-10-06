import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ minHeight: "100vh" }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default CommonLayout;
