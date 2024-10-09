import HeroSection from "@/components/ui/HomePage/hero_section/HeroSection";
import HowItWorks from "@/components/ui/HomePage/how_it_work/HowItWork";
import Specialist from "@/components/ui/HomePage/specialist/Specialist";

import Stats from "@/components/ui/HomePage/stats/Stats";
import TopRatedDoctors from "@/components/ui/HomePage/top_rated_doctors/TopRatedDoctors";
import WhyUs from "@/components/ui/HomePage/why_us/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
      <Stats />
    </>
  );
};

export default HomePage;
