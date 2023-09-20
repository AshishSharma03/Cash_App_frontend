import { Button } from "@mui/material";
import React from "react";

function CustomButton({ title, icon, onClick ,bgColor,color,display,width}) {
  return (
    <Button

      color="success"
      onClick={onClick}
      sx={{
        background: bgColor,
        padding: "10px",
        border: (color === '#fff')? "1px solid #fff" :"1px solid #000",
        borderRadius: "7px",
        padding: "25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        color:color,
        fontSize:"12px",
        display:display,
        width:width,
      }}
      startIcon={ icon}
    >
      
      {title}
    </Button>
  );
}

export default CustomButton;
