import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import {
  MedicalServices as MedicalServicesIcon,
  Star as StarIcon,
  VerifiedUser as VerifiedUserIcon,
} from "@mui/icons-material";

const MissionSection = ({ isMobile }: { isMobile: boolean }) => (
  <Box
    sx={{
      backgroundColor: "rgba(239, 246, 255, 0.6)",
      py: { xs: 8, md: 12 },
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant={isMobile ? "h4" : "h3"}
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          position: "relative",
          display: "inline-block",
          left: "50%",
          transform: "translateX(-50%)",
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
        Our Mission & Values
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              height: "100%",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Box
                sx={{
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderRadius: "12px",
                  p: 1.5,
                  mr: 2,
                }}
              >
                <MedicalServicesIcon sx={{ color: "#2563eb", fontSize: 32 }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Our Mission
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ color: "#4b5563", lineHeight: 1.8, mb: 3 }}
            >
              To provide exceptional healthcare services that improve the
              quality of life for our patients and their families. We are
              committed to delivering compassionate, personalized care that
              addresses the unique needs of each individual.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#4b5563", lineHeight: 1.8 }}
            >
              We strive to be at the forefront of medical innovation while
              maintaining the human touch that is essential to healing. Our goal
              is to be a trusted partner in our patients health journey,
              supporting them every step of the way.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              height: "100%",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Box
                sx={{
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderRadius: "12px",
                  p: 1.5,
                  mr: 2,
                }}
              >
                <VerifiedUserIcon sx={{ color: "#2563eb", fontSize: 32 }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Our Values
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <StarIcon sx={{ color: "#2563eb", mr: 1, fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Excellence
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#4b5563", ml: 4 }}>
                  Striving for the highest standards in all aspects of care
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <StarIcon sx={{ color: "#2563eb", mr: 1, fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Compassion
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#4b5563", ml: 4 }}>
                  Treating each patient with kindness and empathy
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <StarIcon sx={{ color: "#2563eb", mr: 1, fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Integrity
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#4b5563", ml: 4 }}>
                  Maintaining the highest ethical standards in all we do
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <StarIcon sx={{ color: "#2563eb", mr: 1, fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Innovation
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#4b5563", ml: 4 }}>
                  Embracing new technologies and approaches to improve care
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="body1"
              sx={{ color: "#4b5563", lineHeight: 1.8, mt: "auto" }}
            >
              These values guide every decision we make and every interaction we
              have with our patients, ensuring that we provide care that is not
              only medically excellent but also deeply human.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default MissionSection;
