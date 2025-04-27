"use client";

import JSForm from "@/components/forms/JSForm";
import JSInput from "@/components/forms/JSInput";
import CheckIcon from "@mui/icons-material/Check";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useForgotPasswordMutation } from "@/redux/api/authApi";

const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
});

const ForgotPasswordPage = () => {
  const [forgotPassword, { isSuccess }] = useForgotPasswordMutation();

  const handleForgotPassword = async (data: FieldValues) => {
    console.log(data);
    toast("please wait...", { duration: 700 });

    try {
      const res = await forgotPassword(data);
      if (res?.data?.status === 200) {
        toast.success("Successfully send code");
      } else {
        throw new Error("Something went wrong");
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
                Forgot password
              </Typography>
            </Box>
          </Stack>

          <Box>
            {isSuccess ? (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                A reset password link send your email successful. Please check
                your email !!!
              </Alert>
            ) : (
              <JSForm
                onSubmit={handleForgotPassword}
                resolver={zodResolver(validationSchema)}
                defaultValues={{
                  email: "",
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
                </Grid>

                <Button
                  sx={{
                    margin: "20px 0",
                  }}
                  fullWidth={true}
                  type="submit"
                >
                  Send code
                </Button>
              </JSForm>
            )}
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ForgotPasswordPage;
