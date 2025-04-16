"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import type React from "react";
import CommonHeader from "@/components/ui/common/CommonHeader";
import OurStory from "@/components/about/OurStory";
import MissionSection from "@/components/about/Mission";
import MeetOurExpert from "@/components/about/MeetOurExpert";
import Testimonials from "@/components/about/Testimonials";
import AwardsSection from "@/components/about/AwardsSection";

const AboutUsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CommonHeader
        title="About our clinic"
        subTitle=" Providing exceptional healthcare with compassion and expertise for
            over 20 years. We are expert on Cardiology, Urology, Orthopedic, Dentist, Ophthalmology, neurology."
      />

      {/* Sections */}
      <OurStory isMobile={isMobile} />
      <MissionSection isMobile={isMobile} />
      <MeetOurExpert isMobile={isMobile} />
      <Testimonials isMobile={isMobile} />
      <AwardsSection isMobile={isMobile} />
    </Box>
  );
};

export default AboutUsPage;
