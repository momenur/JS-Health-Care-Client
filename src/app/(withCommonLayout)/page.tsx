import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/Specialist/Specialist";
import TopRatedDoctors from "@/components/ui/top_rated_doctors/TopRatedDoctors";
import { Box, Button, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
    </>
  );
};

export default HomePage;
