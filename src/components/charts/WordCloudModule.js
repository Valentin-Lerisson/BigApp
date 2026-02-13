import React from "react";
import { Box, Stack, Typography } from "@mui/material";

// Style de base pour la typo
const labelStyle = {
  fontFamily: "Neue Haas Grotesk Text Pro, sans-serif",
  color: "#3A3784",
};

export const WordCloudLegend = ({ data }) => {
  // On peut rendre l'échelle dynamique si besoin, ou rester sur cette base
  const scale = [
    { range: "Volume élevé", color: "#4E7326" },
    { range: "Volume modéré", color: "#BDD19A" },
  ];

  return (
    <Stack spacing={2}>
      {scale.map((item, i) => (
        <Stack key={i} direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 10,
              height: 10,
              bgcolor: item.color,
              borderRadius: "3px",
            }}
          />
          <Typography sx={{ ...labelStyle, fontSize: "13px", fontWeight: 600 }}>
            {item.range}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export const WordCloudChart = ({ data }) => {
  const words = data?.keywords || [];

  return (
    <Box
      sx={{
        width: "100%",
        height: "450px", // Légèrement réduit pour l'équilibre visuel
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        p: 2,
        bgcolor: "#F9F9FF", // Fond très léger pour faire ressortir les mots
        borderRadius: "40px",
        overflow: "hidden",
      }}
    >
      {words.map((word, i) => {
        // Logique de rotation légère pour un look plus organique
        const rotation =
          i % 3 === 0 ? (i % 2 === 0 ? "3deg" : "-3deg") : "0deg";

        return (
          <Typography
            key={i}
            sx={{
              fontFamily: labelStyle.fontFamily,
              fontSize: {
                xs: `${word.value * 0.5}px`, // Responsive mobile
                md: `${word.value * 0.7}px`, // Desktop
              },
              color: word.color,
              fontWeight: word.value > 60 ? 900 : 600,
              mx: { xs: 1, md: 2.5 },
              my: 1.5,
              display: "inline-block",
              transform: `rotate(${rotation})`,
              transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              cursor: "default",
              opacity: 0.9,
              "&:hover": {
                opacity: 1,
                transform: "scale(1.1) rotate(0deg)",
                filter: "drop-shadow(0px 5px 15px rgba(0,0,0,0.1))",
                zIndex: 10,
              },
            }}
          >
            {word.text}
          </Typography>
        );
      })}
    </Box>
  );
};
