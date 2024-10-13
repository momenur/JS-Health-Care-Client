"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import JSForm from "@/components/forms/JSForm";
import JSInput from "@/components/forms/JSInput";

// type TRegisterObj = {
//   address: string;
//   contactNumber: string;
//   email: string;
//   name: string;
// };
// type Inputs = {
//   password: string;
//   patient: TRegisterObj;
// };

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    toast("please wait...", { duration: 700 });
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values?.password,
          email: values?.patient?.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          maxWidth: 600,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            boxShadow: 1,
            width: "100%",
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image
                src={assets?.svgs?.logo}
                alt="register image"
                width={60}
                height={60}
              />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600} py={2}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <JSForm onSubmit={handleRegister}>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <JSInput name="patient.name" label="Name" fullWidth={true} />
                </Grid>
                <Grid item md={6}>
                  <JSInput
                    name="patient.email"
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <JSInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <JSInput
                    name="patient.contactNumber"
                    label="Phone"
                    type="tel"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <JSInput
                    name="patient.address"
                    label="Address"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "20px 0",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
            </JSForm>
            <Typography>
              Do you already have an account? <Link href="/login">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
