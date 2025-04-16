"use client";

import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { doctors } from "@/components/about/helpers/uiData";
import {
  School as SchoolIcon,
  Timeline as TimelineIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
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

const MeetOurExpert = ({ isMobile }: { isMobile: boolean }) => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setTabValue(newValue);
  };
  return (
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
          {doctors?.map((doctor, index) => (
            <Tab key={doctor.id} label={doctor.name} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>

      {doctors?.map((doctor, index) => (
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
  );
};

export default MeetOurExpert;
