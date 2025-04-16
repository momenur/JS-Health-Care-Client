import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  Star as StarIcon,
  FormatQuote as FormatQuoteIcon,
} from "@mui/icons-material";
import { testimonials } from "@/components/about/helpers/uiData";

const Testimonials = ({ isMobile }: { isMobile: boolean }) => (
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
        What Our Patients Say
      </Typography>

      <Grid container spacing={4}>
        {testimonials?.map((testimonial) => (
          <Grid item xs={12} md={4} key={testimonial.id}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(0,0,0,0.05)",
                overflow: "visible",
                position: "relative",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  left: 20,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -12,
                  left: 28,
                  color: "white",
                  zIndex: 2,
                }}
              >
                <FormatQuoteIcon />
              </Box>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b5563",
                    lineHeight: 1.8,
                    mb: 3,
                    fontStyle: "italic",
                  }}
                >
                  {testimonial.text}
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {testimonial.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{
                            color:
                              i < testimonial.rating ? "#facc15" : "#e5e7eb",
                            fontSize: 18,
                          }}
                        />
                      ))}
                      <Typography
                        variant="caption"
                        sx={{ ml: 1, color: "#6b7280" }}
                      >
                        {testimonial.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Testimonials;
