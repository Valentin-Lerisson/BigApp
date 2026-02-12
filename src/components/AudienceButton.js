import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const AudienceButton = ({ icon, text, active, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      display: "flex",
      alignItems: "center",
      p: "10px 16px",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: "100%",
      height: "54px",
      boxSizing: "border-box",
      // État Actif (Violet) vs Inactif (Clair)
      bgcolor: active ? "#5329C2" : "#EADEFE",
      color: active ? "white" : "#5329C2",
      boxShadow: active ? "0 10px 20px rgba(83, 41, 194, 0.3)" : "none",
      border: "1px solid",
      borderColor: active ? "#5329C2" : "rgba(83, 41, 194, 0.1)",
      "&:hover": {
        bgcolor: active ? "#4321A1" : "#d8c5fb",
        transform: "translateY(-2px)",
      },
    }}
  >
    <Box
      component="img"
      src={icon}
      sx={{
        width: 22,
        height: 22,
        flexShrink: 0,
        filter: active ? "brightness(0) invert(1)" : "none",
      }}
    />
    <Divider
      orientation="vertical"
      flexItem
      sx={{
        mx: 1.5,
        height: "18px",
        alignSelf: "center",
        borderColor: active
          ? "rgba(255,255,255,0.3)"
          : "rgba(83, 41, 194, 0.3)",
      }}
    />
    <Typography
      sx={{
        fontFamily: "Neue Haas Grotesk Text Pro",
        fontSize: "12px",
        fontWeight: 600,
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default AudienceButton;
