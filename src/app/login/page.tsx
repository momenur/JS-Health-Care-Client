"use client";

import assets from "@/assets";
import JSForm from "@/components/forms/JSForm";
import JSInput from "@/components/forms/JSInput";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (login_data: FieldValues) => {
    toast("please wait...", { duration: 700 });

    try {
      const res = await userLogin(login_data);
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res?.message);
        router.push("/");
      }
    } catch (err: any) {
      console.log(err);
      toast.error("something went wrong !");
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
                Login JS HealthCare
              </Typography>
            </Box>
          </Stack>

          <Box>
            <JSForm onSubmit={handleLogin}>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <JSInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <JSInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography textAlign="end" fontWeight={300} pt={1}>
                Forgot Password
              </Typography>
              <Button
                sx={{
                  margin: "20px 0",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
            </JSForm>
            <Typography>
              Don&apos;t have an account?{" "}
              <Link href="/register">Register Now</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
