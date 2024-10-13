import { TextField, TextFieldPropsSizeOverrides } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: string;
  fullWidth?: boolean;
};

const JSInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default JSInput;
