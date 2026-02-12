import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Paper, Stack } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

// Import de tes composants atomiques
import AudienceButton from "./AudienceButton";
import StudyTabHeader from "./StudyTabHeader";
import SidebarInsights from "./SidebarInsights";
import AudienceCard from "./AudienceCard";

const ThematicContent = ({ activeTab, activeNetwork, setActiveNetwork }) => {
  const [mainTab, setMainTab] = useState("ensemble");
  const [insightTab, setInsightTab] = useState("volume");
  const [graphMode, setGraphMode] = useState("bar");

  const borderRadiusLarge = "45px";

  // Reset de la vue quand on change de thématique dans la sidebar
  useEffect(() => {
    setActiveNetwork(null);
    setInsightTab("volume");
  }, [activeTab, setActiveNetwork]);

  const tabs =
    mainTab === "ensemble"
      ? ["volume", "carte", "nuage"]
      : ["evolutions", "intensite"];

  const getLabel = (id) => {
    const labels = {
      volume: "Evolution en volume",
      carte: "Carte de France",
      nuage: "Nuage de mots clés",
      evolutions: "Les évolutions des thématiques",
      intensite: "L’intensité concurrentielle",
    };
    return labels[id];
  };

  // LOGIQUE DE CHANGEMENT D'IMAGES
  // On nettoie le nom de la thématique pour créer un préfixe de fichier (ex: "sante", "prix")
  const getThematicPrefix = (name) => {
    if (name.includes("santé")) return "sante";
    if (name.includes("environnement")) return "env";
    if (name.includes("praticité")) return "prat";
    if (name.includes("prix")) return "prix";
    return "default";
  };

  const thematicPrefix = getThematicPrefix(activeTab);

  return (
    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
      {/* HEADER DYNAMIQUE (Copie sidebar) */}
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontFamily: "Neue Haas Grotesk Text Pro",
            fontSize: "31px",
            fontWeight: 700,
            color: "#3A3784",
          }}
        >
          {activeTab}
        </Typography>
        <HelpOutlineIcon sx={{ color: "#B0B0CC", fontSize: "26px" }} />
      </Stack>

      {/* NAVIGATION BOUTONS VERTS */}
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {["ensemble", "thematique"].map((type) => (
          <Grid item xs={12} sm={6} key={type}>
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
                py: 2,
                textTransform: "none",
                fontFamily: "Neue Haas Grotesk Text Pro",
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
        <Grid
          item
          xs={12}
          lg={8.5}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {!activeNetwork && (
              <StudyTabHeader
                tabs={tabs}
                activeTab={insightTab}
                onTabChange={setInsightTab}
                getLabel={getLabel}
                borderRadiusLarge={borderRadiusLarge}
              />
            )}

            <Paper
              elevation={0}
              sx={{
                borderRadius: activeNetwork
                  ? borderRadiusLarge
                  : `0 0 ${borderRadiusLarge} ${borderRadiusLarge}`,
                bgcolor: "white",
                p: 4,
                border: "1px solid #E0E4EC",
                mt: activeNetwork ? 0 : "-1px",
                transition: "all 0.3s ease",
              }}
            >
              {!activeNetwork ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "400px",
                  }}
                >
                  {/* SOURCE D'IMAGE DYNAMIQUE */}
                  {/* Ex: /sante-volume.png ou /prix-carte.png */}
                  <Box
                    component="img"
                    src={`/${thematicPrefix}-${insightTab}.png`}
                    sx={{ width: "100%", maxWidth: "700px" }}
                    onError={(e) => {
                      e.target.src = `/${insightTab}.png`;
                    }} // Fallback vers image globale si thématique non trouvée
                  />
                </Box>
              ) : (
                <Stack direction="row" spacing={3} sx={{ minHeight: "400px" }}>
                  <AudienceCard
                    title="Âges de l’audience"
                    networkIcon={`/${activeNetwork}2.png`}
                    chartImg={`/age-${thematicPrefix}-${activeNetwork}.png`}
                  />
                  <AudienceCard
                    title="Le genre de l’audience"
                    networkIcon={`/${activeNetwork}2.png`}
                    chartImg={`/genre-${thematicPrefix}-${activeNetwork}.png`}
                  />
                </Stack>
              )}
            </Paper>
          </Box>

          {/* SECTION RÉSEAUX BAS DE PAGE */}
          {mainTab === "ensemble" && (
            <Paper
              elevation={0}
              sx={{
                p: "25px 30px",
                borderRadius: borderRadiusLarge,
                bgcolor: "white",
                border: "1px solid #E0E4EC",
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontFamily: "Neue Haas Grotesk Text Pro",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#3A3784",
                    mb: 0.5,
                  }}
                >
                  Quelles sont vos audiences ?
                </Typography>
                <Box
                  sx={{
                    width: "60px",
                    height: "1.5px",
                    bgcolor: "#5329C2",
                    borderRadius: "10px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "20px",
                }}
              >
                <AudienceButton
                  active={activeNetwork === "google"}
                  onClick={() =>
                    setActiveNetwork(
                      activeNetwork === "google" ? null : "google",
                    )
                  }
                  icon="/google.png"
                  text="Les recherches sur Google"
                />
                <AudienceButton
                  active={activeNetwork === "meta"}
                  onClick={() =>
                    setActiveNetwork(activeNetwork === "meta" ? null : "meta")
                  }
                  icon="/meta.png"
                  text="Les intérêts sur Meta"
                />
                <AudienceButton
                  active={activeNetwork === "tiktok"}
                  onClick={() =>
                    setActiveNetwork(
                      activeNetwork === "tiktok" ? null : "tiktok",
                    )
                  }
                  icon="/tiktok.png"
                  text="Les intérêts sur Tiktok"
                />
              </Box>
            </Paper>
          )}
        </Grid>

        <Grid item xs={12} lg={3.5}>
          <SidebarInsights
            mainTab={mainTab}
            insightTab={activeNetwork || insightTab}
            borderRadiusLarge={borderRadiusLarge}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThematicContent;
