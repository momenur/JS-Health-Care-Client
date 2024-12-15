import JSDatePicker from "@/components/forms/JSDatePicker";
import JSForm from "@/components/forms/JSForm";
import JSTimePicker from "@/components/forms/JSTimePicker";
import JSModal from "@/components/shared/js_modal/JSModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormater";
import { timeFormatter } from "@/utils/timeFormater";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  // Api call
  const [createSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);

    try {
      const loadingToastId = toast.loading("Creating Schedule...");
      const res = await createSchedule(values);

      if (res?.data?.length) {
        toast.dismiss(loadingToastId);
        toast.success("Schedule created successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error("Failed to create Schedule: " + err.message);
    }
  };
  return (
    <JSModal open={open} setOpen={setOpen} title="Create Schedule">
      <JSForm onSubmit={handleFormSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            width: "400px",
          }}
        >
          <Grid item md={12}>
            <JSDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <JSDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <JSTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <JSTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button
          type="submit"
          sx={{
            mt: 2,
          }}
        >
          Create
        </Button>
      </JSForm>
    </JSModal>
  );
};

export default ScheduleModal;
