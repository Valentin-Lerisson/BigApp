import React, { useState } from "react";
import { Box, Grid, Typography, Paper, Stack, Button } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { studyConfig } from "../../config/studyConfig";

// Modules Graphiques
import { EvolutionChart } from "../charts/EvolutionVolumeModule";
import { FranceMapChart } from "../charts/FranceMapModule";
import { WordCloudChart } from "../charts/WordCloudModule";
import { ThematicEvolutionChart } from "../charts/ThematicEvolutionModule";
import { ThematicIntensityChart } from "../charts/ThematicIntensityModule";
import { AudienceChart } from "../charts/AudienceModule";

// UI
import StudyTabHeader from "../shared/StudyTabHeader";
import SidebarInsights from "../shared/SidebarInsights";
import AudienceButton from "../shared/AudienceButton";

export default function StudyTemplate({
  activeTab,
  activeNetwork,
  setActiveNetwork,
}) {
  const data = studyConfig[activeTab];
  const [mainTab, setMainTab] = useState("ensemble");
  const [insightTab, setInsightTab] = useState("volume");

  // Sécurité si la thématique n'existe pas
  if (!data)
    return <Typography sx={{ p: 4 }}>Données non trouvées.</Typography>;

  return (
    <Box sx={{ width: "100%" }}>
      {/* 1. HEADER DYNAMIQUE : Affiche le nom de la thématique active */}
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: "31px",
            fontWeight: 700,
            color: "#3A3784",
            fontFamily: "Neue Haas Grotesk Text Pro",
          }}
        >
          {activeTab}
        </Typography>
        <HelpOutlineIcon sx={{ color: "#B0B0CC", fontSize: "26px" }} />
      </Stack>

      {/* 2. NAVIGATION VUES */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {["ensemble", "thematique"].map((type) => (
          <Grid item xs={6} key={type}>
            <Button
              fullWidth
              onClick={() => {
                setMainTab(type);
                setActiveNetwork(null);
                setInsightTab(type === "ensemble" ? "volume" : "evolutions");
              }}
              sx={{
                bgcolor:
                  mainTab === type ? "#8AC03E" : "rgba(138, 192, 62, 0.5)",
                color: "white",
                borderRadius: "22px",
                py: 1.5,
                textTransform: "none",
                fontSize: "18px",
                fontWeight: 600,
                border:
                  mainTab === type
                    ? "2px solid #C5ED8D"
                    : "2px solid transparent",
              }}
            >
              {type === "ensemble" ? "Vue d’ensemble" : "Vue par thématique"}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8.5}>
          {/* 3. PANNEAU PRINCIPAL */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: "45px",
              bgcolor: "#fff",
              minHeight: "auto",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              border: "1px solid #E0E4EC",
              mb: 2,
            }}
          >
            {!activeNetwork && (
              <StudyTabHeader
                tabs={
                  mainTab === "ensemble"
                    ? ["volume", "carte", "nuage"]
                    : ["evolutions", "intensite"]
                }
                activeTab={insightTab}
                onTabChange={setInsightTab}
                getLabel={(id) =>
                  ({
                    volume: "Evolution en volume",
                    carte: "Carte de France",
                    nuage: "Nuage de mots clés",
                    evolutions: "Les évolutions des thématiques",
                    intensite: "L’intensite concurrentielle",
                  })[id]
                }
              />
            )}

            <Box sx={{ p: 4 }}>
              {activeNetwork ? (
                <AudienceChart data={data} network={activeNetwork} />
              ) : (
                <Box sx={{ width: "100%" }}>
                  {insightTab === "volume" && <EvolutionChart data={data} />}
                  {insightTab === "carte" && <FranceMapChart data={data} />}
                  {insightTab === "nuage" && <WordCloudChart data={data} />}
                  {insightTab === "evolutions" && <ThematicEvolutionChart />}
                  {insightTab === "intensite" && <ThematicIntensityChart />}
                </Box>
              )}
            </Box>
          </Paper>

          {/* 4. ZONE AUDIENCES */}
          {mainTab === "ensemble" && (
            <Paper
              elevation={0}
              sx={{
                p: "25px 35px",
                borderRadius: "35px",
                bgcolor: "#fff",
                border: "1px solid #E0E4EC",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#5329C2",
                  mb: 2.5,
                }}
              >
                Quelles sont vos audiences ?
              </Typography>

              <Grid container spacing={2}>
                {["google", "meta", "tiktok"].map((net) => (
                  <Grid item xs={12} sm={4} key={net}>
                    <AudienceButton
                      icon={`/${net}.png`}
                      text={`Les intérêts sur ${net.charAt(0).toUpperCase() + net.slice(1)}`}
                      active={activeNetwork === net}
                      onClick={() =>
                        setActiveNetwork(activeNetwork === net ? null : net)
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          )}
        </Grid>

        {/* 5. SIDEBAR */}
        <Grid item xs={12} lg={3.5}>
          <SidebarInsights
            data={data}
            activeNetwork={activeNetwork}
            insightTab={insightTab}
            mainTab={mainTab}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
