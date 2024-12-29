"use client";

import { Box, IconButton, Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LoadingButton from "@mui/lab/LoadingButton";
import dayjs from "dayjs";
import { useState } from "react";
import JSModal from "@/components/shared/js_modal/JSModal";
import { useGetAllScheduleQuery } from "@/redux/api/scheduleApi";
import MultipleSelectFieldChip from "./MultipleSelectFieldChip";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import { toast } from "sonner";
import { GridColDef } from "@mui/x-data-grid";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedSchedulesIds, setSelectedSchedulesIds] = useState<string[]>(
    []
  );
  const query: Record<string, any> = {};
  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }
  const { data } = useGetAllScheduleQuery(query);
  const schedules = data?.schedule;
  const [createDoctorSchedule, { isLoading }] =
    useCreateDoctorScheduleMutation();

  const onSubmit = async () => {
    try {
      const loadingToastId = toast.loading("Creating Doctor...");
      const res = await createDoctorSchedule({
        scheduleIds: selectedSchedulesIds,
      });
      if (res.data.count) {
        toast.dismiss(loadingToastId);
        toast.success("Doctor created successfully!");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <JSModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
        <Stack direction="column" gap={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Controlled picker"
              value={dayjs(selectedDate)}
              onChange={(newValue) =>
                setSelectedDate(dayjs(newValue).toISOString())
              }
              sx={{
                width: "100%",
              }}
            />
          </LocalizationProvider>
          <MultipleSelectFieldChip
            schedules={schedules}
            selectedSchedulesIds={selectedSchedulesIds}
            setSelectedSchedulesIds={setSelectedSchedulesIds}
          />

          <LoadingButton
            size="small"
            onClick={onSubmit}
            loading={isLoading}
            loadingIndicator="Submiting..."
            variant="contained"
          >
            Submit
          </LoadingButton>
        </Stack>
      </JSModal>
    </Box>
  );
};

export default DoctorScheduleModal;
