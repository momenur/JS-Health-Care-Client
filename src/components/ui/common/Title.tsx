import { Box, Typography } from "@mui/material";

type TTitleProps = {
  title: string;
  sub_title: string;
  sub_sub_title?: string;
  position?: string;
};

const Title = ({
  title,
  sub_title,
  sub_sub_title,
  position = "center",
}: TTitleProps) => {
  return (
    <Box
      sx={{
        textAlign: `${position}`,
      }}
    >
      <Typography
        sx={{ textTransform: "capitalize" }}
        variant="h4"
        fontWeight={500}
        pb={1}
      >
        {title}
      </Typography>
      <Typography component="p" fontWeight={300} fontSize={18}>
        {sub_title}
      </Typography>
      <Typography component="p" fontWeight={300} fontSize={18}>
        {sub_sub_title}
      </Typography>
    </Box>
  );
};

export default Title;
