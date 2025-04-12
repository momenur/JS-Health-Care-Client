import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type TProps = {
  title: string;
  subTitle: string;
};

const CommonHeader = ({ title, subTitle }: TProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 md:py-24"
      sx={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
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
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "32px",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            fontWeight: 600,
            pb: 2,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            color: "whitesmoke",
            fontWeight: 500,
            textAlign: "center",
            maxWidth: "750px",
            mx: "auto",
          }}
        >
          {subTitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default CommonHeader;
