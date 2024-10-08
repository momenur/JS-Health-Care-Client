import { Box } from "@mui/material";
import Title from "../common/Title";

const TopRatedDoctors = () => {
  return (
    <Box
      sx={{
        my: 10,
        py: 20,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Title
        title="our top rated doctors"
        sub_title="Access to expert physicians and surgeons, advanced technology"
        sub_sub_title="and top-quality surgery facilities right here"
      />
    </Box>
  );
};

export default TopRatedDoctors;
