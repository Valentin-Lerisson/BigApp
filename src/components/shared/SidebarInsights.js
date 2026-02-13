import React from "react";
import { Box, Typography, Stack } from "@mui/material";

// Import des légendes de tous les modules
import { EvolutionLegend } from "../charts/EvolutionVolumeModule";
import { FranceMapLegend } from "../charts/FranceMapModule";
import { WordCloudLegend } from "../charts/WordCloudModule";
import { ThematicEvolutionLegend } from "../charts/ThematicEvolutionModule";
import { ThematicIntensityLegend } from "../charts/ThematicIntensityModule";
import { AudienceLegend } from "../charts/AudienceModule"; // Nouveau

export default function SidebarInsights({
  data,
  activeNetwork,
  insightTab,
  mainTab,
}) {
  const renderLegendContent = () => {
    // 1. Priorité à la légende d'audience si un bouton réseau est actif
    if (activeNetwork) {
      return <AudienceLegend data={data} />;
    }

    // 2. Vue par thématique
    if (mainTab === "thematique") {
      if (insightTab === "evolutions") return <ThematicEvolutionLegend />;
      if (insightTab === "intensite") return <ThematicIntensityLegend />;
    }

    // 3. Vue d'ensemble (Switch classique)
    switch (insightTab) {
      case "volume":
        return <EvolutionLegend data={data} />;
      case "carte":
        return <FranceMapLegend data={data} />;
      case "nuage":
        return <WordCloudLegend data={data} />;
      default:
        return null;
    }
  };

  return (
    <Stack spacing={3} sx={{ height: "100%" }}>
      {/* SECTION LÉGENDE */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: "35px",
          p: 3,
          border: "1px solid #E0E4EC",
          height: "fit-content",
        }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            color: "#3A3784",
            mb: 2,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Légende :
        </Typography>

        {renderLegendContent()}
      </Box>

      {/* SECTION BIG EYE */}
      <Box
        sx={{
          bgcolor: "#E9E7FB",
          borderRadius: "35px",
          p: 4,
          flexGrow: 1,
          border: "1px solid #D1CDFA",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Box
            component="img"
            src="/bigeye.png"
            sx={{ width: 40, height: 40 }}
          />
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
          sx={{
            fontSize: "14px",
            color: "#3A3784",
            lineHeight: 1.6,
            fontWeight: 500,
          }}
        >
          {data?.bigEye || "Sélectionnez une thématique pour voir l'analyse."}
        </Typography>
      </Box>
    </Stack>
  );
}
