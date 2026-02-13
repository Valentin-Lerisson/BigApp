import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const AudienceButton = ({ icon, text, active, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      display: "flex",
      alignItems: "center",
      p: "10px 20px",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: "100%",
      height: "60px", // Un peu plus haut pour le texte en 16px
      boxSizing: "border-box",
      bgcolor: active ? "#5329C2" : "#EADEFE",
      color: active ? "white" : "#5329C2",
      boxShadow: active ? "0 10px 20px rgba(83, 41, 194, 0.2)" : "none",
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
        width: 28, // Légèrement plus grand pour aller avec le texte 16px
        height: 28,
        flexShrink: 0,
        filter: active ? "brightness(0) invert(1)" : "none",
      }}
    />
    <Divider
      orientation="vertical"
      flexItem
      sx={{
        mx: 2,
        height: "22px",
        alignSelf: "center",
        borderColor: active
          ? "rgba(255,255,255,0.3)"
          : "rgba(83, 41, 194, 0.3)",
      }}
    />
    <Typography
      sx={{
        fontFamily: "Neue Haas Grotesk Text Pro",
        fontSize: "16px", // TAILLE DEMANDÉE
        fontWeight: 500, // PAS EN GRAS
        lineHeight: 1.2,
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default AudienceButton;
