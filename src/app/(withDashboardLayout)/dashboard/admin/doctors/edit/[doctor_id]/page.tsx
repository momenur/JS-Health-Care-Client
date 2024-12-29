"use client";

import JSFileUpload from "@/components/forms/JSFileUploader";
import JSForm from "@/components/forms/JSForm";
import JSInput from "@/components/forms/JSInput";
import JSSelectField from "@/components/forms/JSSelectFiled";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { Box, Button, duration, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctor_id: string;
  };
};

const DoctorUpdatePage = ({ params }: TParams) => {
  const router = useRouter();
  const id = params?.doctor_id;

  const { data, isLoading } = useGetDoctorQuery(id);
  const [updateDoctor] = useUpdateDoctorMutation();

  // Handel form submit
  const handleFormSubmit = async (values: FieldValues) => {
    // convert experience and apointmentfee string to number
    values.experience = Number(values.experience);
    values.apointmentFee = Number(values.apointmentFee);
    values.id = id;

    // const data = modifyPayload(values);

    try {
      const loadingToastId = toast.loading("Updating Doctor...");
      const res = await updateDoctor({ id: values.id, body: values }).unwrap();

      if (res?.id) {
        toast.dismiss(loadingToastId);
        toast.success("Doctor Updated successfully!", { duration: 3000 });
        router.push("/dashboard/admin/doctors");
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  // Default Value
  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    gender: data?.gender || "",
    experience: data?.experience || 0,
    apointmentFee: data?.apointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
    profilePhoto: data?.profilePhoto || "",
  };

  return (
    <Box>
      <Typography component="h5" variant="h5" pt={2}>
        Update doctor info
      </Typography>
      {isLoading ? (
        "Loading..."
      ) : (
        <JSForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Grid item xs={12} sm={12} md={12}>
              <JSFileUpload name="file" label="Upload Doctor Picture" />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <JSInput
                name="name"
                label="Name"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <JSInput
                name="email"
                type="email"
                label="Email"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <JSInput
                name="contactNumber"
                label="Contract Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <JSInput
                name="address"
                label="Address"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <JSInput
                name="registrationNumber"
                label="Registration Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <JSInput
                name="experience"
                type="number"
                label="Experience"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <JSSelectField
                items={Gender}
                name="gender"
                label="Gender"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <JSInput
                name="apointmentFee"
                type="number"
                label="ApointmentFee"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <JSInput
                name="qualification"
                label="Qualification"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <JSInput
                name="currentWorkingPlace"
                label="Current Working Place"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <JSInput
                name="designation"
                label="Designation"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Stack direction="row" justifyContent="center">
                <Button sx={{ px: "50px", textAlign: "end" }} type="submit">
                  Update
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </JSForm>
      )}
    </Box>
  );
};

export default DoctorUpdatePage;
