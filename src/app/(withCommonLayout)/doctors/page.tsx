import { Container, Typography } from "@mui/material";
import React from "react";

const Doctors = async () => {
  return (
    <Container
      sx={{
        my: 6,
      }}
    >
      <Typography
        variant="h1"
        align="center"
        sx={{
          fontWeight: 600,
          fontSize: "40px",
          mb: 6,
          position: "relative",
          display: "inline-block",
          left: "50%",
          transform: "translateX(-50%)",
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "4px",
            backgroundColor: "#3b82f6",
            borderRadius: "2px",
          },
        }}
      >
        All doctors of our clinic
      </Typography>
    </Container>
  );
};

export default Doctors;

// import DoctorCard from "@/components/ui/doctor/DoctorCard";
// import { Doctor } from "@/types/doctor";
// import DashedLine from "@/ui/doctor/DashedLine";
// import { Box, Container, Typography } from "@mui/material";
// import React from "react";

// async function fetchDoctors() {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/doctors`,
//       {
//         cache: "no-store", // prevent caching during SSR
//       }
//     );

//     if (!res.ok) {
//       throw new Error(`Failed to fetch doctors. Status: ${res.status}`);
//     }

//     const contentType = res.headers.get("content-type");
//     if (!contentType?.includes("application/json")) {
//       const text = await res.text();
//       throw new Error(`Expected JSON, got: ${text.substring(0, 100)}`);
//     }

//     const data = await res.json();
//     return data;
//   } catch (err: any) {
//     console.error("Fetch error:", err.message);
//     return [];
//   }
// }

// const Doctors = async () => {
//   const doctors = await fetchDoctors();

//   return (
//     <Container
//       sx={{
//         my: 6,
//       }}
//     >
//       <Typography
//         variant="h1"
//         align="center"
//         sx={{
//           fontWeight: 600,
//           fontSize: "40px",
//           mb: 6,
//           position: "relative",
//           display: "inline-block",
//           left: "50%",
//           transform: "translateX(-50%)",
//           "&:after": {
//             content: '""',
//             position: "absolute",
//             bottom: "-8px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "60px",
//             height: "4px",
//             backgroundColor: "#3b82f6",
//             borderRadius: "2px",
//           },
//         }}
//       >
//         All doctors of our clinic
//       </Typography>
//       {doctors?.map((doctor: Doctor, index: number) => (
//         <Box key={doctor?.id} sx={{ padding: 3, borderRadius: 2 }}>
//           <DoctorCard doctor={doctor} />
//           {index + 1 < doctors?.length && <DashedLine />}
//         </Box>
//       ))}
//     </Container>
//   );
// };

// export default Doctors;
