import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { serviceCategories } from "@/components/service/MedicalService";

const ServiceOverView = () => (
  <Container
    maxWidth="lg"
    sx={{ py: { xs: 8, md: 12 }, mt: -6, position: "relative", zIndex: 10 }}
  >
    <Grid container spacing={4}>
      {serviceCategories.map((category) => (
        <Grid item xs={12} sm={6} md={4} key={category.id}>
          <Card
            className="h-full transform transition-transform duration-300 hover:scale-105"
            sx={{
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
              height: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <CardContent className="flex flex-col items-center text-center p-6">
              <Box
                className="p-4 rounded-full mb-4"
                sx={{
                  background:
                    "linear-gradient(135deg, #e6f2ff 0%, #cce5ff 100%)",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.15)",
                }}
              >
                {category.icon}
              </Box>
              <Typography variant="h5" className="font-bold mb-2">
                {category.title}
              </Typography>
              <Typography variant="body1" className="text-gray-600 mb-4">
                {category.description}
              </Typography>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: "8px",
                  borderColor: "#2563eb",
                  color: "#2563eb",
                  "&:hover": {
                    borderColor: "#1d4ed8",
                    backgroundColor: "rgba(37, 99, 235, 0.04)",
                  },
                  mt: "auto",
                }}
                href={`#${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ServiceOverView;
