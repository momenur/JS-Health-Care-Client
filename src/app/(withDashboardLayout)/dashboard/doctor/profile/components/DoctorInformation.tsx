import AutoFileUploader from "@/components/forms/AutoFileUploader";
import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const StyledInformationBox = styled(Box)((theme) => ({
  background: "#f4f7fe",
  borderRadius: "10px",
  minWidth: "45%",
  maxWidth: "50%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const DoctorInformation = ({
  data,
  updating,
  fileUploadHandler,
  setOpen,
}: any) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            height: 300,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            height={300}
            width={400}
            src={data?.profilePhoto}
            alt="User Photo"
          />
        </Box>
        <Box>
          {updating ? (
            <p>Uploading...</p>
          ) : (
            <AutoFileUploader
              name="file"
              label="Choose Your Profile Photo"
              icon={<CloudUploadIcon />}
              onFileUpload={fileUploadHandler}
              variant="text"
              sx={{ border: "1px solid #ADD8E6", width: "100%", mb: "16px" }}
            />
          )}
          <Button
            startIcon={<EditOutlinedIcon />}
            fullWidth
            onClick={() => setOpen(true)}
          >
            Edit Profile
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h5" component="h5" color="primary.main">
          Basic information
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap="wrap">
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Role
            </Typography>
            <Typography>{data?.role}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Name
            </Typography>
            <Typography>{data?.name}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Email
            </Typography>
            <Typography>{data?.email}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Status
            </Typography>
            <Typography color="primary.main">{data?.status}</Typography>
          </StyledInformationBox>
        </Stack>
        <Typography variant="h5" component="h5" color="primary.main" mt={6}>
          Professional information
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap="wrap">
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Appointment fee
            </Typography>
            <Typography>{data?.apointmentFee}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Phone
            </Typography>
            <Typography>{data?.contactNumber}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Experience
            </Typography>
            <Typography>{data?.experience}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              qualification
            </Typography>
            <Typography color="primary.main">{data?.qualification}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Current working place
            </Typography>
            <Typography color="primary.main">
              {data?.currentWorkingPlace}
            </Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Reg Number
            </Typography>
            <Typography color="primary.main">
              {data?.registrationNumber}
            </Typography>
          </StyledInformationBox>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DoctorInformation;
