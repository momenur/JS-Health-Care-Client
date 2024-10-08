import { Box, Container, Typography } from "@mui/material";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const specialties = await res.json();
  console.log(specialties);
  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={500}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Experience Doctors Across AllSpecialties
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
