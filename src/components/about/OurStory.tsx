import { Box, Container, Grid, Typography } from "@mui/material";

const OurStory = ({ isMobile }: { isMobile: boolean }) => (
  <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, position: "relative" }}>
    <Grid container spacing={6} alignItems="center">
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="https://media.gettyimages.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58="
          alt="Our Clinic Building"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "16px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            fontWeight: 700,
            mb: 3,
            position: "relative",
            display: "inline-block",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: "0",
              width: "60px",
              height: "4px",
              backgroundColor: "#3b82f6",
              borderRadius: "2px",
            },
          }}
        >
          Our Story
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, color: "#4b5563", lineHeight: 1.8 }}
        >
          Founded in 2003 by Dr. Robert Smith, our clinic began with a simple
          mission: to provide exceptional healthcare with a personal touch. What
          started as a small practice has grown into a comprehensive medical
          center serving thousands of patients annually.
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, color: "#4b5563", lineHeight: 1.8 }}
        >
          Over the years, we have expanded our facilities and services while
          maintaining our commitment to personalized care. Our team of dedicated
          healthcare professionals works tirelessly to ensure that each patient
          receives the highest quality care in a comfortable and supportive
          environment.
        </Typography>
        <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
          Today, Dr. Smith Medical Clinic is recognized as a leader in
          healthcare excellence, combining cutting-edge medical technology with
          compassionate care to improve the health and well-being of our
          community.
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default OurStory;
