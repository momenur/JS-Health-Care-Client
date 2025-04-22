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
  Divider,
} from "@mui/material";
import {
  Check as CheckIcon,
  CreditCard as CreditCardIcon,
} from "@mui/icons-material";
import { insuranceProviders } from "@/components/service/helpers/uiData";

const InsuranceAndPayment = () => {
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
                receive the care you need. Some of our accepted insurance plans
                include:
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
                Please contact our office to verify that we accept your specific
                insurance plan before your appointment.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InsuranceAndPayment;
