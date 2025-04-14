"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { navbar_options } from "@/constant/navbar_options";
import dynamic from "next/dynamic";
import useUserInfo from "@/hooks/useUserInfo";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const userInfo = useUserInfo();
  const AuthButton = dynamic(() => import("@/app/login/AuthButton"), {
    ssr: false,
  });
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <AppBar
        sx={{
          bgcolor: "white",
          boxShadow: "none",
          borderBottom: "1px solid lightgray",
        }}
        position="static"
      >
        <Container>
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h4"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#202020",
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

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: "black",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {navbar_options.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography
                      color={pathName === page?.path ? "primary.main" : ""}
                      component={Link}
                      href={page?.path}
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {page?.path_name}
                    </Typography>
                  </MenuItem>
                ))}
                {userInfo?.userId && (
                  <Typography
                    component={Link}
                    href="/dashboard"
                    sx={{ textAlign: "center" }}
                  >
                    Dashboard
                  </Typography>
                )}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              JS Doctor
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navbar_options.map((page, index) => (
                <Typography
                  color={pathName === page?.path ? "primary.main" : ""}
                  component={Link}
                  href={page?.path}
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    px: 2,
                    display: "block",
                    textTransform: "capitalize",
                    fontSize: "18px",
                  }}
                >
                  {page?.path_name}
                </Typography>
              ))}
              {userInfo?.userId && (
                <Typography
                  component={Link}
                  href="/dashboard"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    px: 2,
                    display: "block",
                    textTransform: "capitalize",
                  }}
                >
                  Dashboard
                </Typography>
              )}
            </Box>

            <AuthButton />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;
