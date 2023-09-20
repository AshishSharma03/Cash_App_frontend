import { Box } from "@mui/material";
import React from "react";

function Section({ children, bgcolor }) {
  return (
    <Box
      component={"section"}
      minHeight={"100vh"}
      sx={{
        background:
          bgcolor === "primary"
            ? "#000"
            : bgcolor === "secondary"
            ? "#00D54B"
            : "#F8F6F6",
        display:"flex",
        alignItems:"center",
        justifyContent:'center',
        position:"relative"
      }}
    >
      {children}
    </Box>
  );
}

export default Section;
