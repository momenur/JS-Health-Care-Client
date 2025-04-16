import { Box, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import { EmojiEvents as EmojiEventsIcon } from "@mui/icons-material";
import { awards } from "@/components/about/helpers/uiData";

const AwardsSection = ({ isMobile }: { isMobile: boolean }) => (
  <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
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
      Awards & Recognition
    </Typography>

    <Grid container spacing={4}>
      {awards?.map((award) => (
        <Grid item xs={12} sm={6} md={3} key={award.id}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "100%",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderRadius: "50%",
                  p: 2,
                }}
              >
                <EmojiEventsIcon sx={{ color: "#2563eb", fontSize: 32 }} />
              </Box>
            </Box>
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Chip
                label={award.year}
                sx={{
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  color: "#2563eb",
                  fontWeight: 600,
                  mb: 2,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {award.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#6b7280", mb: 2 }}>
                {award.issuer}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#4b5563", textAlign: "center", mt: "auto" }}
            >
              {award.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default AwardsSection;
