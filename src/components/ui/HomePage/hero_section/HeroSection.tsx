import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "column",
          lg: "row",
        },
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: {
              sx: "200px",
              md: "400px",
              lg: "700px",
            },
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets?.svgs?.grid} alt="hero section background image" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          color="primary.main"
          variant="h3"
          component="h1"
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography
          color="secondary.main"
          variant="h6"
          component="p"
          fontWeight={300}
          sx={{
            py: "30px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque modi,
          officiis a totam odio eaque quis soluta ipsum hic quibusdam!
          Perspiciatis
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>

      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image
            src={assets.svgs.arrow}
            alt="arrow image"
            width={100}
            height={100}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              width={240}
              height={380}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor2"
              width={240}
              height={350}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            width={230}
            height={230}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="doctor3"
            width={180}
            height={180}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
