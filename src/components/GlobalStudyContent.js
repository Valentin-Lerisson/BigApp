import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

// Composant Bouton Audience : Design "Pill" contenu et aéré
const AudienceButton = ({ icon, text }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      p: "10px 16px",
      borderRadius: "20px",
      bgcolor: "#EADEFE",
      border: "1px solid rgba(83, 41, 194, 0.1)",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      width: "100%",
      height: "48px",
      boxSizing: "border-box",
      overflow: "hidden", // Empêche absolument le débordement interne
      "&:hover": {
        bgcolor: "#d8c5fb",
        transform: "translateY(-2px)",
      },
    }}
  >
    <Box
      component="img"
      src={icon}
      sx={{ width: 18, height: 18, flexShrink: 0 }}
    />
    <Divider
      orientation="vertical"
      flexItem
      sx={{
        mx: 1.5,
        borderColor: "rgba(83, 41, 194, 0.3)",
        height: "16px",
        alignSelf: "center",
      }}
    />
    <Typography
      sx={{
        fontFamily: "Neue Haas Grotesk Text Pro",
        fontSize: "12px",
        fontWeight: 600,
        color: "#5329C2",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis", // Ajoute "..." si le bloc est trop étroit
      }}
    >
      {text}
    </Typography>
  </Box>
);

const GlobalStudyContent = () => {
  const [mainTab, setMainTab] = useState("ensemble");
  const [insightTab, setInsightTab] = useState("volume");

  const borderRadiusLarge = "45px";

  return (
    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
      {/* HEADER */}
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontFamily: "Neue Haas Grotesk Text Pro",
            fontSize: "31px",
            fontWeight: 700,
            color: "#3A3784",
          }}
        >
          Vue globale de l’étude
        </Typography>
        <HelpOutlineIcon sx={{ color: "#B0B0CC", fontSize: "26px" }} />
      </Stack>

      {/* NAVIGATION HAUTE */}
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {["ensemble", "thematique"].map((type) => (
          <Grid item xs={12} sm={6} key={type}>
            <Button
              fullWidth
              onClick={() => setMainTab(type)}
              sx={{
                bgcolor:
                  mainTab === type ? "#8AC03E" : "rgba(138, 192, 62, 0.5)",
                color: "white",
                opacity: mainTab === type ? 1 : 0.6,
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
                "&:hover": { bgcolor: "#8AC03E" },
              }}
            >
              {type === "ensemble" ? "Vue d’ensemble" : "Vue par thématique"}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* COLONNE GAUCHE */}
        <Grid
          item
          xs={12}
          lg={8.5}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            {/* TABS */}
            <Stack direction="row" sx={{ width: "100%" }}>
              {["volume", "carte", "nuage"].map((id, index) => {
                const labels = {
                  volume: "Evolution en volume",
                  carte: "Carte de France",
                  nuage: "Nuage de mots clés",
                };
                const active = insightTab === id;
                return (
                  <Box
                    key={id}
                    onClick={() => setInsightTab(id)}
                    sx={{
                      flex: 1,
                      textAlign: "center",
                      py: 2,
                      cursor: "pointer",
                      borderRadius:
                        index === 0
                          ? `${borderRadiusLarge} 0 0 0`
                          : index === 2
                            ? `0 ${borderRadiusLarge} 0 0`
                            : "0",
                      bgcolor: active ? "white" : "rgba(255, 255, 255, 0.45)",
                      border: active
                        ? "1px solid #E0E4EC"
                        : "1px solid transparent",
                      borderBottom: "none",
                      zIndex: active ? 2 : 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Neue Haas Grotesk Text Pro",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#5329C2",
                        opacity: active ? 1 : 0.6,
                      }}
                    >
                      {labels[id]}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>

            {/* PAPER PRINCIPAL CONTENANT L'IMAGE */}
            <Paper
              elevation={0}
              sx={{
                borderRadius: `0 0 ${borderRadiusLarge} ${borderRadiusLarge}`,
                bgcolor: "white",
                p: 4,
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 15px 40px rgba(0,0,0,0.03)",
                border: "1px solid #E0E4EC",
                mt: "-1px",
              }}
            >
              <Box
                component="img"
                src={`/${insightTab}.png`}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  maxWidth: "700px",
                }}
              />
            </Paper>
          </Box>

          {/* SECTION AUDIENCES : PARFAITEMENT CONTENUE */}
          <Paper
            elevation={0}
            sx={{
              mt: 3,
              p: "25px 30px",
              borderRadius: borderRadiusLarge,
              bgcolor: "white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
              border: "1px solid #E0E4EC",
              overflow: "hidden", // Crucial pour que rien ne dépasse
            }}
          >
            <Typography
              sx={{
                fontFamily: "Neue Haas Grotesk Text Pro",
                fontSize: "18px",
                fontWeight: 700,
                color: "#5329C2",
                mb: 3,
              }}
            >
              Quelles sont vos audiences ?
            </Typography>

            {/* Grille responsive avec gap de sécurité */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  md: "1fr 1fr 1fr",
                },
                gap: "20px",
                width: "100%",
              }}
            >
              <AudienceButton
                icon="/google.png"
                text="Les recherches sur Google"
              />
              <AudienceButton icon="/meta.png" text="Les intérêts sur Meta" />
              <AudienceButton
                icon="/tiktok.png"
                text="Les intérêts sur Tiktok"
              />
            </Box>
          </Paper>
        </Grid>

        {/* COLONNE DROITE */}
        <Grid item xs={12} lg={3.5}>
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
                boxShadow: "0 15px 40px rgba(58, 55, 132, 0.05)",
                border: "1px solid #D1CDFA",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 3 }}
              >
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
                  fontWeight: 700,
                  color: "#3A3784",
                  mb: 2,
                }}
              >
                Les consommateurs recherchent avant tout les produits bio
                alimentaires...
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "#3A3784", lineHeight: 1.6 }}
              >
                Le prix est une préoccupation toujours présente depuis 2021.
                <br />
                <br />
                La quête du bien-manger rassemble plusieurs types de
                recherche...
              </Typography>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GlobalStudyContent;
