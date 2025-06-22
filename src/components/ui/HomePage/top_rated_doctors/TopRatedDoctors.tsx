import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Title from "../../common/Title";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import { doctors } from "@/components/about/helpers/uiData";

const TopRatedDoctors = async () => (
  <Box
    sx={{
      py: {
        xs: 10,
        md: 14,
        lg: 24,
      },
      backgroundColor: "rgba(20, 20, 20, 0.1)",
      clipPath: {
        xs: "none",
        sm: "none",
        md: "none",
        lg: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      },
    }}
  >
    <Title
      title="our top rated doctors"
      sub_title="Access to expert physicians and surgeons, advanced technology"
      sub_sub_title="and top-quality surgery facilities right here"
    />

    <Container sx={{ mt: { xs: 5, md: 8, lg: 10 } }}>
      <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
        {doctors?.slice(0, 3).map((doctor: any) => (
          <Grid item xs={12} sm={6} lg={4} key={doctor?.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  height: "250px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={doctor?.profilePhoto}
                  height={300}
                  width={500}
                  alt="doctor photo"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {doctor?.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  {doctor?.qualification}, {doctor?.designation}
                </Typography>

                <Stack
                  mt={1}
                  spacing={1}
                  direction={{
                    xs: "column",
                    md: "column",
                    lg: "row",
                  }}
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <LocationOnIcon sx={{ mr: 0.5 }} />
                    {doctor?.address}
                  </Typography>
                  <Typography color="primary.main">
                    Fee: {doctor?.apointmentFee}
                  </Typography>
                </Stack>
              </CardContent>

              <CardActions
                sx={{
                  px: 2,
                  pb: 3,
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  gap: 1.5,
                  alignItems: "stretch",
                }}
              >
                <Button fullWidth size="small">
                  Book Now
                </Button>
                <Button fullWidth variant="outlined" size="small">
                  View Profile
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={{ xs: 4, md: 6 }}>
        <Link href="/doctors">
          <Button variant="outlined">View All</Button>
        </Link>
      </Box>
    </Container>
  </Box>
);

export default TopRatedDoctors;
