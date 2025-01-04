/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";

import JSFullScreenModal from "@/components/shared/js_modal/JSFullScreenModal";

import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";

import { FieldValues } from "react-hook-form";
import { Button, Grid } from "@mui/material";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import JSForm from "@/components/forms/JSForm";
import JSInput from "@/components/forms/JSInput";
import JSSelectField from "@/components/forms/JSSelectFiled";
import { Gender } from "@/types";
import MultipleSelectFieldChip from "../../schedules/components/MultipleSelectFieldChip";
import { useGetAllSpecialtyQuery } from "@/redux/api/specialtiesApi";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const validationSchema = z.object({
  experience: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  apointmentFee: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  name: z.string().optional(),
  contactNumber: z.string().optional(),
  registrationNumber: z.string().optional(),
  gender: z.string().optional(),
  qualification: z.string().optional(),
  currentWorkingPlace: z.string().optional(),
  designation: z.string().optional(),
});

const ProfileUpdateModal = ({ open, setOpen, id }: TProps) => {
  const { data: doctorData, refetch, isSuccess } = useGetDoctorQuery(id);
  const { data: allSpecialties } = useGetAllSpecialtyQuery(undefined);
  const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState([]);

  const [updateDoctor, { isLoading: updating }] = useUpdateDoctorMutation();

  useEffect(() => {
    if (!isSuccess) return;

    setSelectedSpecialtiesIds(
      doctorData?.doctorSpecialties.map((sp: any) => {
        return sp.specialtiesId;
      })
    );
  }, [isSuccess]);

  const submitHandler = async (values: FieldValues) => {
    const specialties = selectedSpecialtiesIds.map((specialtiesId: string) => ({
      specialtiesId,
      isDeleted: false,
    }));

    console.log({ id });
    // return;

    const excludedFields: Array<keyof typeof values> = [
      "email",
      "id",
      "role",
      "needPasswordChange",
      "status",
      "createdAt",
      "updatedAt",
      "isDeleted",
      "averageRating",
      "review",
      "profilePhoto",
      "registrationNumber",
      "schedules",
      "doctorSpecialties",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );

    updatedValues.specialties = specialties;

    try {
      updateDoctor({ body: updatedValues, id });
      await refetch();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <JSFullScreenModal open={open} setOpen={setOpen} title="Update Profile">
      <JSForm
        onSubmit={submitHandler}
        defaultValues={doctorData}
        resolver={zodResolver(validationSchema)}
      >
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="email"
              type="email"
              label="Email"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="contactNumber"
              label="Contract Number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput name="address" label="Address" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="registrationNumber"
              label="Registration Number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="experience"
              type="number"
              label="Experience"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSSelectField
              items={Gender}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="apointmentFee"
              type="number"
              label="ApointmentFee"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="qualification"
              label="Qualification"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="currentWorkingPlace"
              label="Current Working Place"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <JSInput
              name="designation"
              label="Designation"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MultipleSelectFieldChip
              allSpecialties={allSpecialties}
              selectedIds={selectedSpecialtiesIds}
              setSelectedIds={setSelectedSpecialtiesIds}
            />
          </Grid>
        </Grid>

        <Button type="submit" disabled={updating}>
          Save
        </Button>
      </JSForm>
    </JSFullScreenModal>
  );
};

export default ProfileUpdateModal;
