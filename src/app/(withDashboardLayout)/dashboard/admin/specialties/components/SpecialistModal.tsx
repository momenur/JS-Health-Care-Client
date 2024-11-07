import JSFileUpload from "@/components/forms/JSFileUploader";
import JSForm from "@/components/forms/JSForm";
import JSInput from "@/components/forms/JSInput";
import JSModal from "@/components/shared/js_modal/JSModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

//Create Specialty Functions
const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const loadingToastId = toast.loading("Creating specialty...");
      const res = await createSpecialty(data).unwrap();
      if (res?.id) {
        toast.dismiss(loadingToastId);
        toast.success("Specialty created successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      toast.dismiss();
      toast.error("Failed to create specialty: " + err.message);
    }
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
