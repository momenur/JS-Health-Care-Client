import { Box, Button, Container, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "6rem", md: "8rem" },
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          404
        </Typography>

        <Typography variant="h4" sx={{ mb: 2 }}>
          Page Not Found
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, maxWidth: "600px" }}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>

        <Button
          component={Link}
          href="/"
          startIcon={<Home />}
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          Return to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
