"use client";

import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfile";
import { Box, Container, Typography } from "@mui/material";

import React, { useState } from "react";
import DoctorInformation from "./components/DoctorInformation";
import ProfileUpdateModal from "./components/ProfileUpdateModal";

const DoctorProfilePage = () => {
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useGetMYProfileQuery({});

  const [updateMYProfile, { isLoading: updating }] =
    useUpdateMYProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    updateMYProfile(formData);
  };

  if (isLoading) {
    <p>Loading...</p>;
  }

  if (isLoading) {
    <Typography>loading...</Typography>;
  }
  return (
    <Box>
      <ProfileUpdateModal open={open} setOpen={setOpen} id={data?.id} />
      <Container
        sx={{
          mt: 6,
        }}
      >
        <DoctorInformation
          setOpen={setOpen}
          data={data}
          fileUploadHandler={fileUploadHandler}
          updating={updating}
        />
      </Container>
    </Box>
  );
};

export default DoctorProfilePage;
