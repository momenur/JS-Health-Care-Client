"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  AccessTime as AccessTimeIcon,
  Send as SendIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import CommonHeader from "@/components/ui/common/CommonHeader";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  [key: string]: string | undefined;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "error" | "warning" | "info";
}

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);

      // Show success message
      setSnackbar({
        open: true,
        message: "Your message has been sent successfully!",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleCloseSnackbar = (): void => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };
  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <CommonHeader
        title="Contact us"
        subTitle="We are here to help and answer any questions you might have. We look
          forward to hearing from you. Ask anything if have any query."
      />

      {/* Contact Information Section */}
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 8, md: 12 }, mt: -6, position: "relative", zIndex: 10 }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
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
                  className="bg-blue-100 p-4 rounded-full mb-4"
                  sx={{
                    background:
                      "linear-gradient(135deg, #e6f2ff 0%, #cce5ff 100%)",
                    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.15)",
                  }}
                >
                  <PhoneIcon sx={{ color: "#2563eb", fontSize: 32 }} />
                </Box>
                <Typography variant="h6" className="font-bold mb-2">
                  Phone
                </Typography>
                <Typography variant="body1" className="text-gray-600 mb-2">
                  Call us directly at
                </Typography>
                <Typography
                  variant="body1"
                  className="font-semibold"
                  sx={{ color: "#2563eb" }}
                >
                  +1 (555) 123-4567
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
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
                  className="bg-blue-100 p-4 rounded-full mb-4"
                  sx={{
                    background:
                      "linear-gradient(135deg, #e6f2ff 0%, #cce5ff 100%)",
                    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.15)",
                  }}
                >
                  <EmailIcon sx={{ color: "#2563eb", fontSize: 32 }} />
                </Box>
                <Typography variant="h6" className="font-bold mb-2">
                  Email
                </Typography>
                <Typography variant="body1" className="text-gray-600 mb-2">
                  Send us an email at
                </Typography>
                <Typography
                  variant="body1"
                  className="font-semibold"
                  sx={{ color: "#2563eb" }}
                >
                  contact@doctorclinic.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
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
                  className="bg-blue-100 p-4 rounded-full mb-4"
                  sx={{
                    background:
                      "linear-gradient(135deg, #e6f2ff 0%, #cce5ff 100%)",
                    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.15)",
                  }}
                >
                  <LocationOnIcon sx={{ color: "#2563eb", fontSize: 32 }} />
                </Box>
                <Typography variant="h6" className="font-bold mb-2">
                  Location
                </Typography>
                <Typography variant="body1" className="text-gray-600 mb-2">
                  Visit our clinic at
                </Typography>
                <Typography
                  variant="body1"
                  className="font-semibold"
                  sx={{ color: "#2563eb" }}
                >
                  123 Medical Center Dr, Healthville, CA 90210
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Contact Form and Office Hours Section */}
      <Box className="bg-white py-12 md:py-16">
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                className="font-bold mb-6"
                sx={{
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
                Send Us a Message
              </Typography>
              <Paper
                elevation={0}
                className="p-6 md:p-8"
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<SendIcon />}
                        sx={{
                          borderRadius: "10px",
                          padding: "12px 24px",
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
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            {/* Office Hours */}
            <Grid item xs={12} md={5}>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                className="font-bold mb-6"
                sx={{
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
                Office Hours
              </Typography>
              <Paper
                elevation={0}
                className="p-6 md:p-8"
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  height: "calc(100% - 70px)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <List sx={{ "& .MuiListItem-root": { py: 2 } }}>
                  <ListItem>
                    <ListItemIcon>
                      <AccessTimeIcon sx={{ color: "#2563eb" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          Monday - Friday
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" sx={{ color: "#4b5563" }}>
                          8:00 AM - 6:00 PM
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component="li"
                    sx={{ borderColor: "rgba(0,0,0,0.08)" }}
                  />
                  <ListItem>
                    <ListItemIcon>
                      <AccessTimeIcon sx={{ color: "#2563eb" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          Saturday
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" sx={{ color: "#4b5563" }}>
                          9:00 AM - 2:00 PM
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider
                    component="li"
                    sx={{ borderColor: "rgba(0,0,0,0.08)" }}
                  />
                  <ListItem>
                    <ListItemIcon>
                      <AccessTimeIcon sx={{ color: "#2563eb" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          Sunday
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" sx={{ color: "#4b5563" }}>
                          Closed
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>

                <Box className="mt-6 md:mt-8 flex-grow">
                  <Typography
                    variant="h6"
                    className="font-bold mb-4"
                    sx={{
                      color: "#1e40af",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '""',
                        width: "4px",
                        height: "20px",
                        backgroundColor: "#3b82f6",
                        marginRight: "10px",
                        borderRadius: "2px",
                      },
                    }}
                  >
                    Emergency Contact
                  </Typography>
                  <Typography
                    variant="body1"
                    className="mb-2"
                    sx={{ color: "#4b5563" }}
                  >
                    For emergencies outside of office hours, please call:
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-bold text-blue-600"
                    sx={{
                      fontSize: "1.1rem",
                      color: "#2563eb",
                      display: "inline-block",
                      padding: "8px 16px",
                      background: "rgba(219, 234, 254, 0.5)",
                      borderRadius: "8px",
                      border: "1px solid rgba(37, 99, 235, 0.2)",
                    }}
                  >
                    +1 (555) 911-0000
                  </Typography>
                </Box>

                {/* Social Media Links */}
                <Box className="mt-6 md:mt-8">
                  <Typography
                    variant="h6"
                    className="font-bold mb-4"
                    sx={{
                      color: "#1e40af",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '""',
                        width: "4px",
                        height: "20px",
                        backgroundColor: "#3b82f6",
                        marginRight: "10px",
                        borderRadius: "2px",
                      },
                    }}
                  >
                    Connect With Us
                  </Typography>
                  <Box className="flex gap-3">
                    <Button
                      variant="contained"
                      sx={{
                        minWidth: 0,
                        p: 1.5,
                        borderRadius: "12px",
                        background: "#1877F2",
                        "&:hover": {
                          background: "#0C63D4",
                        },
                      }}
                    >
                      <FacebookIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        minWidth: 0,
                        p: 1.5,
                        borderRadius: "12px",
                        background: "#1DA1F2",
                        "&:hover": {
                          background: "#0C85D0",
                        },
                      }}
                    >
                      <TwitterIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        minWidth: 0,
                        p: 1.5,
                        borderRadius: "12px",
                        background:
                          "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #e78b2b 0%, #d45e35 25%, #c9233c 50%, #b9205c 75%, #a9167a 100%)",
                        },
                      }}
                    >
                      <InstagramIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        minWidth: 0,
                        p: 1.5,
                        borderRadius: "12px",
                        background: "#0077B5",
                        "&:hover": {
                          background: "#005E93",
                        },
                      }}
                    >
                      <LinkedInIcon fontSize="small" />
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box
        className="w-full h-[400px] md:h-[500px]"
        sx={{ boxShadow: "inset 0 4px 20px rgba(0, 0, 0, 0.05)" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.39439492426837!3d34.0194536259278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b93cca9c7ab1%3A0x9b191d3aac3e37!2sCedars-Sinai%20Medical%20Center!5e0!3m2!1sen!2sus!4v1681489714387!5m2!1sen!2us"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Doctor's Office Location"
        ></iframe>
      </Box>

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
