import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Title from "../../common/Title";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  console.log(doctors);
  return (
    <Box
      sx={{
        py: 24,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Title
        title="our top rated doctors"
        sub_title="Access to expert physicians and surgeons, advanced technology"
        sub_sub_title="and top-quality surgery facilities right here"
      />
      <Container
        sx={{
          margin: "50px auto",
        }}
      >
        <Grid container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid item xs={12} sm={6} md={4} key={doctor?.id}>
              <Card>
                <Box>
                  <Image
                    src={doctor?.profilePhoto}
                    height={300}
                    width={500}
                    alt="doctor photo"
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor?.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {doctor?.qualification}, {doctor?.designation}
                  </Typography>
                  <Stack
                    mt={1}
                    marginLeft={-0.5}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography sx={{ color: "text.secondary" }}>
                      <LocationOnIcon />
                      {doctor?.address},
                    </Typography>
                    <Typography color="primary.main">
                      Fee: {doctor?.apointmentFee}
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    pb: 3,
                  }}
                >
                  <Button size="small">Book Now</Button>
                  <Button variant="outlined" size="small">
                    View Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button sx={{ mt: "30px" }} variant="outlined">
            view all
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
