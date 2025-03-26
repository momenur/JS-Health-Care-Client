"use client";

import KeyIcon from "@mui/icons-material/Key";
import JSForm from "@/components/forms/JSForm";
import JSInput from "@/components/forms/JSInput";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const validationSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 character"),
});

const ResetPasswordPage = () => {
  const [error, setError] = useState("");

  const handleResetPassword = async (login_data: FieldValues) => {
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
            <Box
              sx={{
                "& svg": {
                  width: 100,
                  height: 100,
                },
              }}
            >
              <KeyIcon sx={{ color: "primary.main" }} />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600} py={2}>
                Reset password
              </Typography>
            </Box>
          </Stack>

          <Box>
            <JSForm
              onSubmit={handleResetPassword}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                password: "",
              }}
            >
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <JSInput
                    name="newPassword"
                    label="New password"
                    type="password"
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
                Reset Password
              </Button>
            </JSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ResetPasswordPage;
