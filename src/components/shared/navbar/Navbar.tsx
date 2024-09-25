import { Box, Container, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <Container
        sx={{
          background: "red",
        }}
      >
        <Typography>This is Navbar</Typography>
      </Container>
    </Box>
  );
};

export default Navbar;
