"use client";

import { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  Paper,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Button,
  Chip,
} from "@mui/material";
import {
  MedicalServices as MedicalServicesIcon,
  School as SchoolIcon,
  Star as StarIcon,
  VerifiedUser as VerifiedUserIcon,
  Timeline as TimelineIcon,
  FormatQuote as FormatQuoteIcon,
  EmojiEvents as EmojiEventsIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import type React from "react";
import CommonHeader from "@/components/ui/common/CommonHeader";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps): JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Doctor {
  id: number;
  name: string;
  title: string;
  image: string;
  specialization: string;
  education: string;
  experience: string;
  bio: string;
}

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
  date: string;
}

interface Award {
  id: number;
  title: string;
  year: string;
  issuer: string;
  description: string;
}

const AboutUsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [tabValue, setTabValue] = useState<number>(0);

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setTabValue(newValue);
  };

  // Sample doctors data
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Cardiology",
      education: "Harvard Medical School",
      experience: "15+ years",
      bio: "Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating complex cardiac conditions. She leads our medical team with compassion and expertise.",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Senior Physician",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Neurology",
      education: "Johns Hopkins University",
      experience: "12+ years",
      bio: "Dr. Chen specializes in neurological disorders and has pioneered several innovative treatment approaches. His patient-centered care has earned him numerous accolades.",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Specialist",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Pediatrics",
      education: "Stanford University",
      experience: "10+ years",
      bio: "Dr. Rodriguez has dedicated her career to children's health. Her gentle approach and expertise make her a favorite among our youngest patients and their families.",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Surgical Director",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "General Surgery",
      education: "Yale School of Medicine",
      experience: "18+ years",
      bio: "Dr. Wilson leads our surgical department with precision and care. His innovative surgical techniques have helped countless patients recover faster with better outcomes.",
    },
  ];

  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jennifer L.",
      image: "/placeholder.svg?height=100&width=100",
      text: "The care I received at Dr. Smith Medical Clinic was exceptional. The doctors took the time to listen to my concerns and developed a treatment plan that worked perfectly for me.",
      rating: 5,
      date: "March 15, 2023",
    },
    {
      id: 2,
      name: "Robert T.",
      image: "/placeholder.svg?height=100&width=100",
      text: "After struggling with my condition for years, Dr. Chen finally provided the diagnosis and treatment I needed. The entire staff is professional, caring, and attentive.",
      rating: 5,
      date: "January 8, 2023",
    },
    {
      id: 3,
      name: "Maria G.",
      image: "/placeholder.svg?height=100&width=100",
      text: "I brought my daughter to see Dr. Rodriguez, and I couldn't be happier with the care she received. The clinic is child-friendly, and the staff made us feel comfortable from the moment we arrived.",
      rating: 5,
      date: "April 22, 2023",
    },
  ];

  // Sample awards data
  const awards: Award[] = [
    {
      id: 1,
      title: "Excellence in Patient Care",
      year: "2023",
      issuer: "American Medical Association",
      description:
        "Awarded for exceptional patient satisfaction and quality of care.",
    },
    {
      id: 2,
      title: "Top Medical Practice",
      year: "2022",
      issuer: "Healthcare Leaders Association",
      description:
        "Recognized as one of the top medical practices in the region.",
    },
    {
      id: 3,
      title: "Innovation in Healthcare",
      year: "2021",
      issuer: "Medical Innovation Forum",
      description:
        "Awarded for implementing innovative healthcare solutions and technologies.",
    },
    {
      id: 4,
      title: "Community Service Award",
      year: "2020",
      issuer: "City Health Department",
      description:
        "Recognized for outstanding contributions to community health initiatives.",
    },
  ];
  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <CommonHeader
        title="About our clinic"
        subTitle=" Providing exceptional healthcare with compassion and expertise for
            over 20 years. We are expert on Cardiology, Urology, Orthopedic, Dentist, Ophthalmology, neurology."
      />

      {/* Our Story Section */}
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 8, md: 12 }, position: "relative" }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://media.gettyimages.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58="
              alt="Our Clinic Building"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 700,
                mb: 3,
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: "0",
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "2px",
                },
              }}
            >
              Our Story
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, color: "#4b5563", lineHeight: 1.8 }}
            >
              Founded in 2003 by Dr. Robert Smith, our clinic began with a
              simple mission: to provide exceptional healthcare with a personal
              touch. What started as a small practice has grown into a
              comprehensive medical center serving thousands of patients
              annually.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, color: "#4b5563", lineHeight: 1.8 }}
            >
              Over the years, we have expanded our facilities and services while
              maintaining our commitment to personalized care. Our team of
              dedicated healthcare professionals works tirelessly to ensure that
              each patient receives the highest quality care in a comfortable
              and supportive environment.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#4b5563", lineHeight: 1.8 }}
            >
              Today, Dr. Smith Medical Clinic is recognized as a leader in
              healthcare excellence, combining cutting-edge medical technology
              with compassionate care to improve the health and well-being of
              our community.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Mission and Values Section */}
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
            Our Mission & Values
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      borderRadius: "12px",
                      p: 1.5,
                      mr: 2,
                    }}
                  >
                    <MedicalServicesIcon
                      sx={{ color: "#2563eb", fontSize: 32 }}
                    />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Our Mission
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#4b5563", lineHeight: 1.8, mb: 3 }}
                >
                  To provide exceptional healthcare services that improve the
                  quality of life for our patients and their families. We are
                  committed to delivering compassionate, personalized care that
                  addresses the unique needs of each individual.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#4b5563", lineHeight: 1.8 }}
                >
                  We strive to be at the forefront of medical innovation while
                  maintaining the human touch that is essential to healing. Our
                  goal is to be a trusted partner in our patients health
                  journey, supporting them every step of the way.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      borderRadius: "12px",
                      p: 1.5,
                      mr: 2,
                    }}
                  >
                    <VerifiedUserIcon sx={{ color: "#2563eb", fontSize: 32 }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Our Values
                  </Typography>
                </Box>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <StarIcon
                        sx={{ color: "#2563eb", mr: 1, fontSize: 20 }}
                      />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Excellence
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4b5563", ml: 4 }}
                    >
                      Striving for the highest standards in all aspects of care
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <StarIcon
                        sx={{ color: "#2563eb", mr: 1, fontSize: 20 }}
                      />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Compassion
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4b5563", ml: 4 }}
                    >
                      Treating each patient with kindness and empathy
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <StarIcon
                        sx={{ color: "#2563eb", mr: 1, fontSize: 20 }}
                      />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Integrity
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4b5563", ml: 4 }}
                    >
                      Maintaining the highest ethical standards in all we do
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <StarIcon
                        sx={{ color: "#2563eb", mr: 1, fontSize: 20 }}
                      />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Innovation
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4b5563", ml: 4 }}
                    >
                      Embracing new technologies and approaches to improve care
                    </Typography>
                  </Grid>
                </Grid>
                <Typography
                  variant="body1"
                  sx={{ color: "#4b5563", lineHeight: 1.8, mt: "auto" }}
                >
                  These values guide every decision we make and every
                  interaction we have with our patients, ensuring that we
                  provide care that is not only medically excellent but also
                  deeply human.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Meet Our Team Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
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
          Meet Our Expert Team
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons={isMobile ? "auto" : false}
            centered={!isMobile}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#2563eb",
                height: 3,
                borderRadius: "3px",
              },
              "& .MuiTab-root": {
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                "&.Mui-selected": {
                  color: "#2563eb",
                },
              },
            }}
          >
            {doctors.map((doctor, index) => (
              <Tab key={doctor.id} label={doctor.name} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>

        {doctors.map((doctor, index) => (
          <TabPanel key={doctor.id} value={tabValue} index={index}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <Box sx={{ position: "relative", mb: { xs: 4, md: 0 } }}>
                  <Avatar
                    src={doctor.image}
                    alt={doctor.name}
                    sx={{
                      width: { xs: 200, md: 280 },
                      height: { xs: 200, md: 280 },
                      mx: "auto",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                      border: "4px solid white",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%) translateY(50%)",
                      backgroundColor: "#2563eb",
                      color: "white",
                      py: 1,
                      px: 3,
                      borderRadius: "30px",
                      boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {doctor.specialization}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {doctor.name}
                </Typography>
                <Typography variant="h6" sx={{ color: "#4b5563", mb: 3 }}>
                  {doctor.title}
                </Typography>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <SchoolIcon sx={{ color: "#2563eb", mr: 1 }} />
                      <Typography variant="body1">
                        <strong>Education:</strong> {doctor.education}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TimelineIcon sx={{ color: "#2563eb", mr: 1 }} />
                      <Typography variant="body1">
                        <strong>Experience:</strong> {doctor.experience}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Typography
                  variant="body1"
                  sx={{ color: "#4b5563", lineHeight: 1.8, mb: 4 }}
                >
                  {doctor.bio}
                </Typography>

                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderRadius: "10px",
                    padding: "10px 24px",
                    background:
                      "linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)",
                    boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #1d4ed8 0%, #2563eb 100%)",
                      boxShadow: "0 6px 20px rgba(59, 130, 246, 0.6)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Book Appointment
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
        ))}
      </Container>

      {/* Testimonials Section */}
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
            {testimonials.map((testimonial) => (
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
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              sx={{
                                color:
                                  i < testimonial.rating
                                    ? "#facc15"
                                    : "#e5e7eb",
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

      {/* Awards and Recognition Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
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
          Awards & Recognition
        </Typography>

        <Grid container spacing={4}>
          {awards.map((award) => (
            <Grid item xs={12} sm={6} md={3} key={award.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      borderRadius: "50%",
                      p: 2,
                    }}
                  >
                    <EmojiEventsIcon sx={{ color: "#2563eb", fontSize: 32 }} />
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Chip
                    label={award.year}
                    sx={{
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      color: "#2563eb",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {award.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6b7280", mb: 2 }}>
                    {award.issuer}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#4b5563", textAlign: "center", mt: "auto" }}
                >
                  {award.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
