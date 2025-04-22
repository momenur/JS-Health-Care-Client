import type React from "react";

import { Typography, Box, Container, Button } from "@mui/material";
import Link from "next/link";

const ServiceFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2563eb",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 150%, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0) 50%), radial-gradient(circle at 80% -50%, rgba(96, 165, 250, 0.8) 0%, rgba(37, 99, 235, 0) 50%)",
          zIndex: 1,
        }}
      />
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography variant="h3">
            Ready to Experience Better Healthcare?
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, mb: 5, opacity: 0.9 }}
          >
            Schedule an appointment today and take the first step towards
            improved health and wellness.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: "10px",
                padding: "12px 32px",
                backgroundColor: "white",
                color: "#2563eb",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
              }}
            >
              Book Appointment
            </Button>
            <Link href="/contact">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: "10px",
                  padding: "12px 32px",
                  borderColor: "white",
                  color: "white",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceFooter;
