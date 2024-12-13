"use client";

import { Button, Grid, Stack } from "@mui/material";
import { Gender } from "@/types/common";

import { FieldValues } from "react-hook-form";
import JSFullScreenModal from "@/components/shared/js_modal/JSFullScreenModal";
import JSForm from "@/components/forms/JSForm";
import JSInput from "@/components/forms/JSInput";
import JSSelectField from "@/components/forms/JSSelectFiled";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { toast } from "sonner";
import JSFileUpload from "@/components/forms/JSFileUploader";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const [createDoctor] = useCreateDoctorMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    // convert experience and apointmentfee string to number
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.apointmentFee = Number(values.doctor.apointmentFee);

    if (!values?.doctor?.profilePhoto) {
      values.doctor.profilePhoto =
        "https://res.cloudinary.com/drss2rhaa/image/upload/v1734112649/ckcthtigephigbrl017o.jpg";
    }
    console.log(values);

    const data = modifyPayload(values);

    try {
      const loadingToastId = toast.loading("Creating Doctor...");
      const res = await createDoctor(data).unwrap();
      console.log(res);

      if (res?.id) {
        toast.dismiss(loadingToastId);
        toast.success("Doctor created successfully!");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: 0,
      apointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
    password: "",
  };

  return (
    <JSFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
      <JSForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={12}>
            <JSFileUpload name="file" label="Upload Doctor Picture" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="doctor.email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="doctor.contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="doctor.experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSSelectField
              items={Gender}
              name="doctor.gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="doctor.apointmentFee"
              type="number"
              label="ApointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Stack direction="row" justifyContent="center">
              <Button sx={{ px: "50px", textAlign: "end" }} type="submit">
                Create
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </JSForm>
    </JSFullScreenModal>
  );
};

export default DoctorModal;
