import JSForm from "@/components/forms/JSForm";
import JSModal from "@/components/shared/js_modal/JSModal";
import { Button } from "@mui/material";
import React from "react";
import { FieldValue } from "react-hook-form";

type TProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (value: FieldValue) => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <JSModal open={open} setOpen={setOpen} title="Create Schedule">
      <JSForm onSubmit={handleFormSubmit}>
        <Button type="submit">Create</Button>
      </JSForm>
    </JSModal>
  );
};

export default ScheduleModal;
