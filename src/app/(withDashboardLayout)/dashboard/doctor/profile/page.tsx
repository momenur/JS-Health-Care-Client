"use client";

import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";

const StyledInformationBox = styled(Box)((theme) => ({
  background: "#f4f7fe",
  borderRadius: "10px",
  minWidth: "45%",
  maxWidth: "50%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const DoctorProfilePage = () => {
  const { data, isLoading } = useGetMYProfileQuery({});
  console.log(data);
  if (isLoading) {
    <Typography>loading...</Typography>;
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              height={300}
              width={400}
              src={data?.profilePhoto}
              alt="User Photo"
            />
          </Box>
        </Grid>
        <Grid size={8}>
          <Typography variant="h4" component="h4" color="primary.main">
            Basic information
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            flexWrap="wrap"
          >
            <StyledInformationBox>
              <Typography color="secondary" variant="caption">
                Role
              </Typography>
              <Typography>{data?.role}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography color="secondary" variant="caption">
                Name
              </Typography>
              <Typography>{data?.name}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography color="secondary" variant="caption">
                Email
              </Typography>
              <Typography>{data?.email}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography color="secondary" variant="caption">
                Status
              </Typography>
              <Typography color="primary.main">{data?.status}</Typography>
            </StyledInformationBox>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DoctorProfilePage;
