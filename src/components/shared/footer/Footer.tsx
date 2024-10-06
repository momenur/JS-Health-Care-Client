import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/consultation">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/consultation">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/consultation">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/consultation">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Link href="/">
            <Image alt="facebook" src={facebookIcon} width={30} height={30} />
          </Link>
          <Link href="/">
            <Image alt="facebook" src={instagramIcon} width={30} height={30} />
          </Link>
          <Link href="/">
            <Image alt="facebook" src={twitterIcon} width={30} height={30} />
          </Link>
          <Link href="/">
            <Image alt="facebook" src={linkedinIcon} width={30} height={30} />
          </Link>
        </Stack>
        <Box sx={{ borderBottom: "1px dashed white " }}></Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <Typography color="#fff" component="p">
            &copy; 2024 JS Doctor. All Rights Reserved
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            J
            <Box
              component="span"
              color="primary.main"
              sx={{
                marginRight: "10px",
              }}
            >
              S
            </Box>{" "}
            Doctor
          </Typography>
          <Typography color="#fff" component="p">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
