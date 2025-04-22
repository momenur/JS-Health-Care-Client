import type React from "react";

import {
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  MedicalServices as MedicalServicesIcon,
  ChildCare as ChildCareIcon,
  Psychology as PsychologyIcon,
  Biotech as BiotechIcon,
  Check as CheckIcon,
  HealthAndSafety as HealthAndSafetyIcon,
} from "@mui/icons-material";

interface Service {
  id: number;
  name: string;
  description: string;
  benefits: string[];
}

interface ServiceCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
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

const MedicalService = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(239, 246, 255, 0.6)",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 6,
            position: "relative",
            display: "inline-block",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: {
              xs: "1.75rem", // similar to h4
              sm: "2rem",
              md: "2.5rem", // similar to h3
            },
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
                          <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
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
  );
};

export default MedicalService;
