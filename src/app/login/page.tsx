"use client";

import assets from "@/assets";
import JSForm from "@/components/forms/JSForm";
import JSInput from "@/components/forms/JSInput";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Password must be at least 6 character"),
});

const LoginPage = () => {
  const [error, setError] = useState("");

  const handleLogin = async (login_data: FieldValues) => {
    toast("please wait...", { duration: 700 });

    try {
      const res = await userLogin(login_data);
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res?.message);
      } else {
        setError(res?.message);
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
          {error && (
            <Box
              sx={{
                bgcolor: "red",
              }}
            >
              <Typography mb={2} py={0.5} color="white">
                {error}
              </Typography>
            </Box>
          )}
          <Box>
            <JSForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
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

              <Link href="forgot-password">
                <Typography
                  sx={{ textAlign: "end", cursor: "pointer" }}
                  fontWeight={300}
                  pt={1}
                >
                  Forgot Password
                </Typography>
              </Link>
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
