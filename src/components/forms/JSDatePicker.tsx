import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IDatePicker {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const JSDatePicker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
  sx,
}: IDatePicker) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              timezone="system"
              disablePast
              {...field}
              onChange={(date) => onChange(date)}
              value={value || Date.now()}
              slotProps={{
                textField: {
                  required: required,
                  size: size,
                  sx: {
                    ...sx,
                  },
                  variant: "outlined",
                  fullWidth: fullWidth,
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default JSDatePicker;
