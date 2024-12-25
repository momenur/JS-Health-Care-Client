import JSModal from "@/components/shared/js_modal/JSModal";
import { Box, Typography } from "@mui/material";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  return (
    <Box>
      <JSModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
        <Typography> This is Doctor Modal</Typography>
      </JSModal>
    </Box>
  );
};

export default DoctorScheduleModal;
