import React from "react";
import { Paper, Stack, Box, Typography } from "@mui/material";

const SidebarInsights = ({ mainTab, insightTab, borderRadiusLarge }) => (
  <Stack spacing={3} sx={{ height: "100%" }}>
    <Paper
      sx={{
        p: 3,
        borderRadius: "30px",
        bgcolor: "white",
        border: "1px solid #E0E4EC",
      }}
    >
      <Typography sx={{ fontSize: "11px", color: "#3A3784", mb: 2 }}>
        Légende :
      </Typography>
      <Box
        component="img"
        src={`/legende-${insightTab}.png`}
        sx={{ width: "100%" }}
      />
    </Paper>
    <Paper
      sx={{
        p: 4,
        borderRadius: borderRadiusLarge,
        bgcolor: "#E9E7FB",
        flexGrow: 1,
        border: "1px solid #D1CDFA",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
        <Box component="img" src="/bigeye.png" sx={{ width: 40, height: 40 }} />
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "21px",
            fontWeight: 700,
            color: "#220996",
          }}
        >
          BigEye
        </Typography>
      </Stack>
      <Typography
        sx={{ fontSize: "14px", fontWeight: 700, color: "#3A3784", mb: 2 }}
      >
        {mainTab === "ensemble"
          ? "Les consommateurs recherchent avant tout les produits bio..."
          : "L'analyse thématique révèle une corrélation forte..."}
      </Typography>
      <Typography sx={{ fontSize: "14px", color: "#3A3784", lineHeight: 1.6 }}>
        Le prix est une préoccupation toujours présente depuis 2021.
      </Typography>
    </Paper>
  </Stack>
);

export default SidebarInsights;
