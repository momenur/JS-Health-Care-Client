import JSFileUpload from "@/components/forms/JSFileUploader";
import JSForm from "@/components/forms/JSForm";
import JSInput from "@/components/forms/JSInput";
import JSModal from "@/components/shared/js_modal/JSModal";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {
    const data = modifyPayload(values);
  };

  return (
    <JSModal open={open} setOpen={setOpen} title="Create A New Specialty">
      <JSForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <JSInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <JSFileUpload name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 2 }} type="submit">
          Create
        </Button>
      </JSForm>
    </JSModal>
  );
};

export default SpecialtyModal;
