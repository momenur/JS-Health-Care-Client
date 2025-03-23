"use client";

import { Box, Button, IconButton, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DoctorScheduleModal from "./components/DoctorScheduleModal";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ISchedule } from "@/types/schedule";
import { dateFormatter } from "@/utils/dateFormater";
import dayjs from "dayjs";
import AddIcon from "@mui/icons-material/Add";

const DoctorSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [pagination, setPagination] = useState({ page: 1, limit: 5 });

  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...pagination });

  const schedules = data?.doctorSchedules;
  const meta = data?.meta;

  let pageCount: number;

  if (meta?.total) {
    pageCount = Math.ceil(meta.total / pagination?.limit);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPagination((prev) => ({ ...prev, page: value }));
  };

  useEffect(() => {
    const updateData = schedules?.map((schedule: ISchedule, index: number) => {
      return {
        id: schedule?.scheduleId,
        startDate: dateFormatter(schedule?.schedule?.startDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box mt={3}>
      <Button
        onClick={() => setIsModalOpen(true)}
        sx={{ mb: 1 }}
        startIcon={<AddIcon />}
      >
        Create Schedule
      </Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

      <Box>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid
              rows={allSchedule ?? []}
              columns={columns}
              hideFooterPagination
              slots={{
                footer: () => {
                  return (
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Pagination
                        color="primary"
                        count={pageCount}
                        page={pagination?.page}
                        onChange={handleChange}
                      />
                    </Box>
                  );
                },
              }}
            />
          </Box>
        ) : (
          <h1>Loading.....</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedulePage;
