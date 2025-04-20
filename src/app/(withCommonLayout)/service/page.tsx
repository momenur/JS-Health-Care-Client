"use client";

import type React from "react";

import { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  MedicalServices as MedicalServicesIcon,
  ChildCare as ChildCareIcon,
  Psychology as PsychologyIcon,
  Healing as HealingIcon,
  Biotech as BiotechIcon,
  Check as CheckIcon,
  ArrowForward as ArrowForwardIcon,
  AccessTime as AccessTimeIcon,
  Assignment as AssignmentIcon,
  MedicalInformation as MedicalInformationIcon,
  HealthAndSafety as HealthAndSafetyIcon,
  CreditCard as CreditCardIcon,
} from "@mui/icons-material";
import CommonHeader from "@/components/ui/common/CommonHeader";

interface ServiceCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: Service[];
}

interface Service {
  id: number;
  name: string;
  description: string;
  benefits: string[];
}

interface InsuranceProvider {
  id: number;
  name: string;
  logo: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const ServicePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // Sample service categories data
  const serviceCategories: ServiceCategory[] = [
    {
      id: 1,
      title: "Preventive Care",
      icon: <HealthAndSafetyIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
      description:
        "Comprehensive preventive care services to help you maintain optimal health and prevent illness before it starts.",
      services: [
        {
          id: 101,
          name: "Annual Physical Examinations",
          description:
            "Comprehensive yearly check-ups to assess your overall health status and identify potential health issues early.",
          benefits: [
            "Early detection of health issues",
            "Personalized health recommendations",
            "Comprehensive health assessment",
            "Preventive screenings based on age and risk factors",
          ],
        },
        {
          id: 102,
          name: "Vaccinations",
          description:
            "Protection against preventable diseases through our comprehensive vaccination program for all age groups.",
          benefits: [
            "Protection against serious diseases",
            "Up-to-date immunization schedules",
            "Travel vaccination consultations",
            "Flu shots and seasonal vaccines",
          ],
        },
        {
          id: 103,
          name: "Health Screenings",
          description:
            "Early detection screenings for various conditions including cancer, diabetes, heart disease, and more.",
          benefits: [
            "Early detection of serious conditions",
            "Age and risk-appropriate screening protocols",
            "Comprehensive lab testing",
            "Personalized screening schedules",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Specialized Care",
      icon: <MedicalServicesIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
      description:
        "Expert specialized medical services delivered by our team of experienced specialists across various fields.",
      services: [
        {
          id: 201,
          name: "Cardiology",
          description:
            "Comprehensive heart care services including diagnostics, treatment, and management of cardiovascular conditions.",
          benefits: [
            "Advanced cardiac diagnostics",
            "Heart disease management",
            "Preventive cardiology",
            "Cardiac rehabilitation programs",
          ],
        },
        {
          id: 202,
          name: "Neurology",
          description:
            "Diagnosis and treatment of disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.",
          benefits: [
            "Comprehensive neurological evaluations",
            "Treatment for headaches and migraines",
            "Management of neurological disorders",
            "Advanced diagnostic testing",
          ],
        },
        {
          id: 203,
          name: "Orthopedics",
          description:
            "Treatment of musculoskeletal conditions affecting bones, joints, muscles, ligaments, and tendons.",
          benefits: [
            "Joint pain management",
            "Sports injury treatment",
            "Fracture care",
            "Rehabilitation services",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Pediatric Services",
      icon: <ChildCareIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
      description:
        "Comprehensive healthcare services for children from newborns to adolescents in a child-friendly environment.",
      services: [
        {
          id: 301,
          name: "Well-Child Visits",
          description:
            "Regular check-ups to monitor your child's growth, development, and overall health from infancy through adolescence.",
          benefits: [
            "Growth and development monitoring",
            "Age-appropriate screenings",
            "Immunizations",
            "Parental guidance and education",
          ],
        },
        {
          id: 302,
          name: "Pediatric Immunizations",
          description:
            "Age-appropriate vaccinations to protect your child against preventable diseases.",
          benefits: [
            "Protection against childhood diseases",
            "Adherence to recommended immunization schedules",
            "Vaccine education for parents",
            "Comprehensive immunization records",
          ],
        },
        {
          id: 303,
          name: "Developmental Assessments",
          description:
            "Evaluations to ensure your child is meeting important developmental milestones and early intervention when needed.",
          benefits: [
            "Early identification of developmental delays",
            "Customized intervention strategies",
            "Ongoing developmental monitoring",
            "Coordination with specialists when needed",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Diagnostic Services",
      icon: <BiotechIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
      description:
        "State-of-the-art diagnostic testing and imaging services to accurately diagnose medical conditions.",
      services: [
        {
          id: 401,
          name: "Laboratory Testing",
          description:
            "Comprehensive blood work and other laboratory tests to diagnose conditions and monitor health status.",
          benefits: [
            "Quick and accurate results",
            "Wide range of available tests",
            "Convenient on-site lab",
            "Expert interpretation of results",
          ],
        },
        {
          id: 402,
          name: "Imaging Services",
          description:
            "Advanced imaging technologies including X-rays, ultrasounds, and more for diagnostic purposes.",
          benefits: [
            "State-of-the-art imaging equipment",
            "Experienced radiologists",
            "Digital imaging technology",
            "Prompt results and interpretation",
          ],
        },
        {
          id: 403,
          name: "Cardiac Diagnostics",
          description:
            "Specialized tests to evaluate heart function and diagnose cardiovascular conditions.",
          benefits: [
            "ECG/EKG monitoring",
            "Stress testing",
            "Holter monitoring",
            "Comprehensive cardiac assessments",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Mental Health",
      icon: <PsychologyIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
      description:
        "Supportive mental health services to address emotional, psychological, and social well-being.",
      services: [
        {
          id: 501,
          name: "Psychological Counseling",
          description:
            "Professional counseling services to help patients cope with life challenges, mental health conditions, and emotional difficulties.",
          benefits: [
            "Confidential and supportive environment",
            "Evidence-based therapeutic approaches",
            "Stress and anxiety management",
            "Coping skills development",
          ],
        },
        {
          id: 502,
          name: "Depression & Anxiety Treatment",
          description:
            "Specialized care for patients experiencing depression, anxiety disorders, and related conditions.",
          benefits: [
            "Comprehensive assessment and diagnosis",
            "Personalized treatment plans",
            "Medication management when appropriate",
            "Ongoing support and follow-up",
          ],
        },
        {
          id: 503,
          name: "Behavioral Health Services",
          description:
            "Support for behavioral issues and conditions affecting daily functioning and quality of life.",
          benefits: [
            "Behavioral assessments",
            "Cognitive-behavioral therapy",
            "Family counseling",
            "Lifestyle modification support",
          ],
        },
      ],
    },
  ];

  // Sample insurance providers policy
  const insuranceProviders: InsuranceProvider[] = [
    {
      id: 1,
      name: "Blue Cross Blue Shield",
      logo: "/placeholder.svg?height=60&width=120",
    },
    { id: 2, name: "Aetna", logo: "/placeholder.svg?height=60&width=120" },
    {
      id: 3,
      name: "UnitedHealthcare",
      logo: "/placeholder.svg?height=60&width=120",
    },
    { id: 4, name: "Cigna", logo: "/placeholder.svg?height=60&width=120" },
    { id: 5, name: "Humana", logo: "/placeholder.svg?height=60&width=120" },
    {
      id: 6,
      name: "Kaiser Permanente",
      logo: "/placeholder.svg?height=60&width=120",
    },
  ];

  // Sample FAQs fake data
  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our office, using our online booking system, or through the patient portal. We offer same-day appointments for urgent matters.",
    },
    {
      id: 2,
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring your insurance card, photo ID, list of current medications, medical records if available, and any referral forms if required by your insurance.",
    },
    {
      id: 3,
      question: "Do you accept my insurance?",
      answer:
        "We accept most major insurance plans. Please contact our office to verify that we accept your specific insurance plan before your appointment.",
    },
    {
      id: 4,
      question: "How do I refill my prescription?",
      answer:
        "You can request prescription refills through our patient portal, by calling our office, or by having your pharmacy send us a refill request directly.",
    },
  ];
  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <CommonHeader
        title="Our services"
        subTitle=" Comprehensive healthcare services tailored to meet your needs at
            every stage of life with 20 years of experience,"
      />

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
                    href={`#${category.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services Overview Section */}
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
                    href={`#${category.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Detailed Services Section */}
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
            Our Medical Services
          </Typography>

          {serviceCategories.map((category) => (
            <Box
              key={category.id}
              id={category.title.toLowerCase().replace(/\s+/g, "-")}
              sx={{ mb: 8, scrollMarginTop: "100px" }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      borderRadius: "12px",
                      p: 1.5,
                      mr: 2,
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {category.title}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{ color: "#4b5563", mb: 4, lineHeight: 1.8 }}
                >
                  {category.description}
                </Typography>

                <Grid container spacing={4}>
                  {category.services.map((service) => (
                    <Grid item xs={12} md={4} key={service.id}>
                      <Box
                        sx={{
                          height: "100%",
                          p: 3,
                          borderRadius: "12px",
                          border: "1px solid rgba(59, 130, 246, 0.2)",
                          backgroundColor: "rgba(239, 246, 255, 0.5)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "rgba(239, 246, 255, 0.8)",
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, mb: 2, color: "#1e40af" }}
                        >
                          {service.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#4b5563", mb: 3 }}
                        >
                          {service.description}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, mb: 1, color: "#2563eb" }}
                        >
                          Benefits:
                        </Typography>
                        <List dense disablePadding>
                          {service.benefits.map((benefit, index) => (
                            <ListItem
                              key={index}
                              disablePadding
                              sx={{ mb: 0.5 }}
                            >
                              <ListItemIcon sx={{ minWidth: 28 }}>
                                <CheckIcon
                                  sx={{ color: "#2563eb", fontSize: 18 }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={benefit}
                                primaryTypographyProps={{
                                  variant: "body2",
                                  color: "#4b5563",
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Box>
          ))}
        </Container>
      </Box>

      {/* Service Process Section */}
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
          How It Works
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: "30%",
                  right: { xs: "50%", md: 0 },
                  width: { xs: 0, md: "70%" },
                  height: { xs: "70%", md: 2 },
                  borderRight: { xs: "2px dashed #3b82f6", md: "none" },
                  borderBottom: { xs: "none", md: "2px dashed #3b82f6" },
                  transform: { xs: "translateX(50%)", md: "none" },
                  display: { xs: "block", md: "block", lg: "block" },
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  mb: 3,
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
                }}
              >
                <AccessTimeIcon sx={{ color: "white", fontSize: 36 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                1. Schedule
              </Typography>
              <Typography variant="body2" sx={{ color: "#4b5563" }}>
                Book an appointment online or call our office to schedule a
                visit with one of our healthcare providers.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: "30%",
                  right: { xs: "50%", md: 0 },
                  width: { xs: 0, md: "70%" },
                  height: { xs: "70%", md: 2 },
                  borderRight: { xs: "2px dashed #3b82f6", md: "none" },
                  borderBottom: { xs: "none", md: "2px dashed #3b82f6" },
                  transform: { xs: "translateX(50%)", md: "none" },
                  display: { xs: "block", md: "block", lg: "block" },
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  mb: 3,
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
                }}
              >
                <AssignmentIcon sx={{ color: "white", fontSize: 36 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                2. Consultation
              </Typography>
              <Typography variant="body2" sx={{ color: "#4b5563" }}>
                Meet with your doctor for a thorough evaluation and discussion
                of your health concerns and goals.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: "30%",
                  right: { xs: "50%", md: 0 },
                  width: { xs: 0, md: "70%" },
                  height: { xs: "70%", md: 2 },
                  borderRight: { xs: "2px dashed #3b82f6", md: "none" },
                  borderBottom: { xs: "none", md: "2px dashed #3b82f6" },
                  transform: { xs: "translateX(50%)", md: "none" },
                  display: { xs: "block", md: "block", lg: "block" },
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  mb: 3,
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
                }}
              >
                <MedicalInformationIcon sx={{ color: "white", fontSize: 36 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                3. Treatment
              </Typography>
              <Typography variant="body2" sx={{ color: "#4b5563" }}>
                Receive a personalized treatment plan designed to address your
                specific health needs and conditions.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  mb: 3,
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
                }}
              >
                <HealingIcon sx={{ color: "white", fontSize: 36 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                4. Follow-Up
              </Typography>
              <Typography variant="body2" sx={{ color: "#4b5563" }}>
                Ongoing care and follow-up appointments to monitor your progress
                and adjust treatment as needed.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Insurance & Payment Section */}
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
            Insurance & Payment
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
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
                    <CreditCardIcon sx={{ color: "#2563eb", fontSize: 32 }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Payment Options
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ color: "#4b5563", mb: 3 }}>
                  We offer various payment options to make healthcare accessible
                  and convenient for all our patients:
                </Typography>

                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon sx={{ color: "#2563eb" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Insurance Coverage"
                      secondary="We accept most major insurance plans and will work with your provider to maximize your benefits."
                    />
                  </ListItem>
                  <Divider component="li" variant="inset" />
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon sx={{ color: "#2563eb" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Self-Pay Options"
                      secondary="Transparent pricing and payment plans for patients without insurance coverage."
                    />
                  </ListItem>
                  <Divider component="li" variant="inset" />
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon sx={{ color: "#2563eb" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Flexible Payment Plans"
                      secondary="We offer flexible payment arrangements to help manage healthcare costs."
                    />
                  </ListItem>
                  <Divider component="li" variant="inset" />
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon sx={{ color: "#2563eb" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Health Savings Accounts (HSA)"
                      secondary="We accept HSA and FSA payments for eligible medical services."
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                  Accepted Insurance Providers
                </Typography>

                <Typography variant="body1" sx={{ color: "#4b5563", mb: 4 }}>
                  We work with most major insurance providers to ensure you
                  receive the care you need. Some of our accepted insurance
                  plans include:
                </Typography>

                <Grid container spacing={3}>
                  {insuranceProviders.map((provider) => (
                    <Grid item xs={6} sm={4} key={provider.id}>
                      <Box
                        sx={{
                          p: 2,
                          border: "1px solid rgba(0,0,0,0.08)",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: 80,
                          backgroundColor: "white",
                        }}
                      >
                        <Box
                          component="img"
                          src={provider.logo}
                          alt={provider.name}
                          sx={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Typography
                  variant="body2"
                  sx={{ color: "#6b7280", mt: 3, fontStyle: "italic" }}
                >
                  Please contact our office to verify that we accept your
                  specific insurance plan before your appointment.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQs Section */}
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
          Frequently Asked Questions
        </Typography>

        <Paper
          elevation={0}
          sx={{
            borderRadius: "16px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(0,0,0,0.05)",
            overflow: "hidden",
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleAccordionChange(`panel${index + 1}`)}
              disableGutters
              elevation={0}
              sx={{
                borderBottom:
                  index < faqs.length - 1
                    ? "1px solid rgba(0,0,0,0.08)"
                    : "none",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#2563eb" }} />}
                sx={{
                  backgroundColor:
                    expanded === `panel${index + 1}`
                      ? "rgba(239, 246, 255, 0.6)"
                      : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(239, 246, 255, 0.4)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ backgroundColor: "rgba(239, 246, 255, 0.3)", p: 3 }}
              >
                <Typography variant="body1" sx={{ color: "#4b5563" }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          backgroundColor: "#2563eb",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 150%, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0) 50%), radial-gradient(circle at 80% -50%, rgba(96, 165, 250, 0.8) 0%, rgba(37, 99, 235, 0) 50%)",
            zIndex: 1,
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{ fontWeight: 700, mb: 3 }}
            >
              Ready to Experience Better Healthcare?
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, mb: 5, opacity: 0.9 }}
            >
              Schedule an appointment today and take the first step towards
              improved health and wellness.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "10px",
                  padding: "12px 32px",
                  backgroundColor: "white",
                  color: "#2563eb",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  },
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
                }}
              >
                Book Appointment
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: "10px",
                  padding: "12px 32px",
                  borderColor: "white",
                  color: "white",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicePage;
