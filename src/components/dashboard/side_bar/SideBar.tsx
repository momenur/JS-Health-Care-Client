import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} alt="logo" height={50} width={50} />
        <Typography variant="h5" component="h1">
          JS Doctor
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
