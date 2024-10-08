import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  console.log(specialties);
  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={500}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Experience Doctors Across AllSpecialties
          </Typography>
        </Box>
        <Stack direction="row" gap={5} mt={5}>
          {specialties?.map((specialty: any) => (
            <Box
              key={specialty?.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(250, 250, 250, 1),",
                borderRadius: "10px",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid #1586FD",
                  borderRadius: "10px",
                  transition: "all",
                  transitionDuration: "0.4s",
                  padding: "40px 10px",
                },
              }}
            >
              <Image
                src={specialty.icon}
                height={70}
                width={70}
                alt="specialty icon"
              />
              <Box>
                <Typography textAlign="center" pt={2}>
                  {specialty?.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button sx={{ mt: "30px" }} variant="outlined">
          view all
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
