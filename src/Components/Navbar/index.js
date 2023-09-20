import {
  AppBar,
  Menu,
  MenuItem,
  Typography,
  Toolbar,
  Box,
} from "@mui/material";
import React from "react";
import CustomTypography, { fontColorStanderd, fontStanderd } from "../CustomTypography";

const NavLinks = [
  "Sign in",
  "Legal",
  "Licence",
  "Security",
  "Careers",
  "Press",
  "Support",
  "status",
  "Codeblog",
];

function Navbar({position}) {
  return (
    <AppBar position={position}sx={{ background: "none", boxShadow: "none" }}>
     
      <Box
        sx={{
          padding: "24px 60px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box component={"img"} src="./assets/logo.svg" />
        <Box component={"span"} sx={{ flex: 1 }} />
        <Box
          component={"div"}
          width={"100%"}
          sx={{
            display: "flex",
            gap: "20px",
            display: { xs: "none", sm: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {NavLinks.map((a, i) => (
            <CustomTypography
            fontType={fontStanderd.Highlight}
              fontSize={"12px"}
              key={i}
              component={"a"}
              href={"#"}
            >
              {a}
            </CustomTypography>
          ))}
        </Box>
        <Box component={"span"} sx={{ flex: 1 }} />
        <Box component={"img"} src="./assets/eyebutton.svg" />
      </Box>
    </AppBar>
  );
}

export default Navbar;
