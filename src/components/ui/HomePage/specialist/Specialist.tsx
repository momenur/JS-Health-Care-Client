import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Title from "../../common/Title";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Title
          title="Explore Treatments Across Specialties"
          sub_title=" Experience Doctors Across AllSpecialties"
          position="start"
        />

        <Grid container spacing={5} mt={5}>
          {specialties?.slice(0, 6)?.map((specialty: any) => (
            <Grid
              item
              key={specialty?.id}
              xs={6} // 12 / 6 = 2 columns on extra-small and small screens
              md={4} // 12 / 4 = 3 columns on medium screens
              lg={2} // 12 / 2 = 6 columns on large screens
            >
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "rgba(245, 245, 245, 1)",
                  border: "1px solid rgba(250, 250, 250, 1)",
                  borderRadius: "10px",
                  padding: "40px 10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  "& img": {
                    width: "50px",
                    height: "50px",
                  },
                  "&:hover": {
                    border: "1px solid #1586FD",
                    transition: "all 0.4s",
                  },
                }}
              >
                <Image
                  src={specialty.icon}
                  height={70}
                  width={70}
                  alt="specialty icon"
                />
                <Typography pt={2}>{specialty?.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Button sx={{ mt: "30px" }} variant="outlined">
          view all
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
