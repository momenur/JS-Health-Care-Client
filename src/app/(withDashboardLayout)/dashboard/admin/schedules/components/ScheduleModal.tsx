import JSDatePicker from "@/components/forms/JSDatePicker";
import JSForm from "@/components/forms/JSForm";
import JSModal from "@/components/shared/js_modal/JSModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <JSModal open={open} setOpen={setOpen} title="Create Schedule">
      <JSForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <JSDatePicker name="startDate" />
          </Grid>
        </Grid>
        <Button type="submit">Create</Button>
      </JSForm>
    </JSModal>
  );
};

export default ScheduleModal;
