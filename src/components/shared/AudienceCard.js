import React from "react";
import { Box, Typography, Stack, Divider, IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const AudienceCard = ({ title, networkIcon, chartImg }) => (
  <Box
    sx={{
      flex: 1,
      bgcolor: "#F5F1FB",
      borderRadius: "30px",
      p: 3,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      border: "1px solid rgba(83, 41, 194, 0.05)",
      minHeight: "380px",
    }}
  >
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Typography
          sx={{
            fontFamily: "Neue Haas Grotesk Text Pro",
            fontSize: "16px",
            fontWeight: 400,
            color: "#3A3784",
          }}
        >
          {title}
        </Typography>
        <HelpOutlineIcon sx={{ color: "#B0B0CC", fontSize: "16px" }} />
      </Stack>
      <Box
        component="img"
        src={networkIcon}
        sx={{ height: 10, objectFit: "contain" }}
      />
    </Stack>

    {/* Diviseur fin, long et centré */}
    <Box
      sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 3 }}
    >
      <Divider
        sx={{ bgcolor: "#5329C2", height: "1px", width: "85%", opacity: 0.4 }}
      />
    </Box>

    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={chartImg}
        sx={{ width: "100%", height: "auto", maxWidth: "260px" }}
      />
    </Box>

    <IconButton
      sx={{ position: "absolute", bottom: 12, right: 12, color: "#B0B0CC" }}
    >
      <OpenInFullIcon sx={{ fontSize: "14px" }} />
    </IconButton>
  </Box>
);

export default AudienceCard;
