import type React from "react";

import { Box } from "@mui/material";
import CommonHeader from "@/components/ui/common/CommonHeader";
import ServiceOverView from "@/components/service/ServiceOverView";
import MedicalService from "@/components/service/MedicalService";
import HowItProcess from "@/components/service/HowItProcess";
import InsuranceAndPayment from "@/components/service/InsuranceAndPayment";
import FaqSection from "@/components/service/FaqSection";
import ServiceFooter from "@/components/service/ServiceFooter";

const ServicePage = () => {
  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CommonHeader
        title="Our services"
        subTitle=" Comprehensive healthcare services tailored to meet your needs at
            every stage of life with 20 years of experience,"
      />

      {/* Sections */}
      <ServiceOverView />
      <MedicalService />
      <HowItProcess />
      <InsuranceAndPayment />
      <FaqSection />
      <ServiceFooter />
    </Box>
  );
};

export default ServicePage;
