"use client";

import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfile";
import { Container, Typography } from "@mui/material";

import React from "react";
import DoctorInformation from "./components/DoctorInformation";

const DoctorProfilePage = () => {
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
    <Container
      sx={{
        mt: 6,
      }}
    >
      <DoctorInformation
        data={data}
        fileUploadHandler={fileUploadHandler}
        updating={updating}
      />
    </Container>
  );
};

export default DoctorProfilePage;
