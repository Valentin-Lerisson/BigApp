import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PaginationFooter = () => {
  // Style spécifique pour les chiffres
  const numberTextStyle = {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "13px",
    fontWeight: 400,
    color: "#3A3784",
    letterSpacing: "-0.01em",
  };

  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        p: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid rgba(58, 55, 132, 0.05)",
        mt: "auto",
      }}
    >
      <Box sx={{ flex: 1 }} />

      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        sx={{ flex: 1, justifyContent: "center" }}
      >
        <IconButton size="small" sx={{ color: "#7070AA" }}>
          <ChevronLeftIcon fontSize="small" />
        </IconButton>

        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: "#E0E0F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={numberTextStyle}>2</Typography>
        </Box>

        <Typography
          sx={{ color: "#7070AA", fontSize: "13px", fontFamily: "Arial" }}
        >
          ...
        </Typography>

        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: "#F5F5F9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={numberTextStyle}>35</Typography>
        </Box>

        <IconButton size="small" sx={{ color: "#7070AA" }}>
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Box sx={{ flex: 1, textAlign: "right" }}>
        <Typography
          sx={{
            fontFamily: "'Neue Haas Grotesk Text Pro', sans-serif",
            fontSize: "11px",
            color: "#3A3784",
          }}
        >
          <span style={{ fontWeight: 700, fontStyle: "italic" }}>
            Audience Insight®
          </span>{" "}
          outil développé par{" "}
          <span style={{ fontWeight: 400 }}>BigSight, </span>
          <span style={{ fontStyle: "italic" }}>
            étude réalisée en Avril 2025
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default PaginationFooter; // CRUCIAL : Ne pas oublier cette ligne
