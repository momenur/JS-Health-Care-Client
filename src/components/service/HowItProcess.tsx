import type React from "react";

import { Typography, Box, Container, Grid } from "@mui/material";
import {
  Healing as HealingIcon,
  AccessTime as AccessTimeIcon,
  Assignment as AssignmentIcon,
  MedicalInformation as MedicalInformationIcon,
} from "@mui/icons-material";

const HowItProcess = () => (
  <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
    <Typography
      variant="h3"
      align="center"
      sx={{
        fontWeight: 700,
        mb: 6,
        position: "relative",
        display: "inline-block",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: {
          xs: "1.75rem", // similar to h4
          sm: "2rem",
          md: "2.5rem", // similar to h3
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: "-8px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60px",
          height: "4px",
          backgroundColor: "#3b82f6",
          borderRadius: "2px",
        },
      }}
    >
      How It Work
    </Typography>

    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              top: "30%",
              right: { xs: "50%", md: 0 },
              width: { xs: 0, md: "70%" },
              height: { xs: "70%", md: 2 },
              borderRight: { xs: "2px dashed #3b82f6", md: "none" },
              borderBottom: { xs: "none", md: "2px dashed #3b82f6" },
              transform: { xs: "translateX(50%)", md: "none" },
              display: { xs: "block", md: "block", lg: "block" },
            },
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              mb: 3,
              position: "relative",
              zIndex: 2,
              boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
            }}
          >
            <AccessTimeIcon sx={{ color: "white", fontSize: 36 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            1. Schedule
          </Typography>
          <Typography variant="body2" sx={{ color: "#4b5563" }}>
            Book an appointment online or call our office to schedule a visit
            with one of our healthcare providers.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={3}>
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              top: "30%",
              right: { xs: "50%", md: 0 },
              width: { xs: 0, md: "70%" },
              height: { xs: "70%", md: 2 },
              borderRight: { xs: "2px dashed #3b82f6", md: "none" },
              borderBottom: { xs: "none", md: "2px dashed #3b82f6" },
              transform: { xs: "translateX(50%)", md: "none" },
              display: { xs: "block", md: "block", lg: "block" },
            },
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              mb: 3,
              position: "relative",
              zIndex: 2,
              boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
            }}
          >
            <AssignmentIcon sx={{ color: "white", fontSize: 36 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            2. Consultation
          </Typography>
          <Typography variant="body2" sx={{ color: "#4b5563" }}>
            Meet with your doctor for a thorough evaluation and discussion of
            your health concerns and goals.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={3}>
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              top: "30%",
              right: { xs: "50%", md: 0 },
              width: { xs: 0, md: "70%" },
              height: { xs: "70%", md: 2 },
              borderRight: { xs: "2px dashed #3b82f6", md: "none" },
              borderBottom: { xs: "none", md: "2px dashed #3b82f6" },
              transform: { xs: "translateX(50%)", md: "none" },
              display: { xs: "block", md: "block", lg: "block" },
            },
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              mb: 3,
              position: "relative",
              zIndex: 2,
              boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
            }}
          >
            <MedicalInformationIcon sx={{ color: "white", fontSize: 36 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            3. Treatment
          </Typography>
          <Typography variant="body2" sx={{ color: "#4b5563" }}>
            Receive a personalized treatment plan designed to address your
            specific health needs and conditions.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={3}>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              mb: 3,
              position: "relative",
              zIndex: 2,
              boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
            }}
          >
            <HealingIcon sx={{ color: "white", fontSize: 36 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            4. Follow-Up
          </Typography>
          <Typography variant="body2" sx={{ color: "#4b5563" }}>
            Ongoing care and follow-up appointments to monitor your progress and
            adjust treatment as needed.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default HowItProcess;
