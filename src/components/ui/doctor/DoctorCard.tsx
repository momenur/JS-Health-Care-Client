import {
  Box,
  Card,
  Typography,
  Button,
  Chip,
  Divider,
  IconButton,
} from "@mui/material";
import {
  LocalHospital,
  WorkOutline,
  AccessTime,
  Favorite,
  Share,
  VerifiedUser,
  AttachMoney,
  ArrowForward,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export type Doctor = {
  id: string;
  name: string;
  profilePhoto: string;
  designation: string;
  doctorSpecialties?: { specialties: { title: string } }[];
  apointmentFee: number;
  currentWorkingPlace: string;
  experience: number;
};

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const placeholder =
    "https://static.vecteezy.com/system/resources/thumbnails/026/489/224/small_2x/muslim-malay-woman-doctor-in-hospital-with-copy-space-ai-generated-photo.jpg";

  // Extract specialties as an array of strings
  const specialties =
    doctor?.doctorSpecialties?.map(
      (specialty) => specialty?.specialties?.title
    ) || [];
  console.log({ doctor });
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: "16px",
        overflow: "visible",
        background: "linear-gradient(145deg, #ffffff 0%, #f5f7fa 100%)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
        position: "relative",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          bgcolor: "rgba(46, 196, 182, 0.9)",
          color: "white",
          py: 0.5,
          px: 1.5,
          borderRadius: "20px",
          fontSize: "0.75rem",
          fontWeight: 600,
          backdropFilter: "blur(5px)",
        }}
      >
        <VerifiedUser sx={{ fontSize: 14 }} />
        Verified
      </Box>

      {/* Card Content */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        {/* Left Section - Image */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "280px" },
            height: { xs: "280px", md: "100%" },
            overflow: "hidden",
            borderRadius: { xs: "16px 16px 0 0", md: "16px 0 0 16px" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)",
              zIndex: 1,
            }}
          />
          <Box
            component="img"
            src={doctor?.profilePhoto || placeholder}
            alt="Our Clinic Building"
            sx={{
              width: "100%",
              height: "250px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
          />

          {/* Social Actions */}
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              zIndex: 2,
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton
              size="small"
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                color: "white",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
              }}
            >
              <Favorite fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                color: "white",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
              }}
            >
              <Share fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Right Section - Content */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Doctor Info */}
          <Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 0.5,
                color: "#2d3748",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Dr. {doctor?.name}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: "#4a5568",
                fontWeight: 500,
                mb: 2,
                fontSize: "1rem",
              }}
            >
              {doctor?.designation}
            </Typography>

            {/* Specialties */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#718096",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <LocalHospital fontSize="small" color="primary" />
                Specialties
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {specialties.length > 0 ? (
                  specialties.map((specialty, index) => (
                    <Chip
                      key={index}
                      label={specialty}
                      size="small"
                      sx={{
                        bgcolor: "rgba(66, 153, 225, 0.1)",
                        color: "#3182ce",
                        fontWeight: 500,
                        borderRadius: "8px",
                      }}
                    />
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No specialties listed
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Work & Experience */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 2, md: 4 },
                mb: 3,
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#718096",
                    mb: 0.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <WorkOutline fontSize="small" color="primary" />
                  Working at
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: "#2d3748",
                  }}
                >
                  {doctor?.currentWorkingPlace}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#718096",
                    mb: 0.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <AccessTime fontSize="small" color="primary" />
                  Experience
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: "#2d3748",
                  }}
                >
                  {doctor?.experience}+ Years
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2, opacity: 0.6 }} />

          {/* Actions */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ color: "#718096", mb: 0.5 }}>
                Consultation Fee
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AttachMoney color="primary" />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#2d3748",
                  }}
                >
                  {doctor?.apointmentFee} Taka
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Link
                href={`/doctors/${doctor.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 2,
                    borderWidth: "1.5px",
                    "&:hover": {
                      borderWidth: "1.5px",
                    },
                  }}
                >
                  View Profile
                </Button>
              </Link>

              <Link
                href={`/checkout/${doctor.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForward />}
                  sx={{
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 2,
                    boxShadow: "0 4px 14px rgba(66, 153, 225, 0.4)",
                    background:
                      "linear-gradient(45deg, #4299e1 0%, #63b3ed 100%)",
                    "&:hover": {
                      boxShadow: "0 6px 20px rgba(66, 153, 225, 0.6)",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default DoctorCard;
