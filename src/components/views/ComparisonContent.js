import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Paper,
  Divider,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// IMPORT DES DONNÉES ET DES MODULES RÉELS
import { studyConfig } from "../../config/studyConfig";
import { EvolutionChart } from "../charts/EvolutionVolumeModule";
import { FranceMapChart } from "../charts/FranceMapModule";
import { AudienceChart } from "../charts/AudienceModule";
import { ThematicIntensityChart } from "../charts/ThematicIntensityModule";
import { WordCloudChart } from "../charts/WordCloudModule";

// --- LOGIQUE D'AGRÉGATION DES AUDIENCES (SOMME DES RÉSEAUX) ---
const getThemeInsights = (themeKey) => {
  const theme = studyConfig[themeKey];
  if (!theme) return { volume: "0", cpc: "—", age: "-", genre: "-" };

  // 1. Volume cumulé (Evolution historique)
  const totalVolume =
    theme.evolutionData?.reduce(
      (acc, curr) => acc + (Number(curr.volume) || 0),
      0,
    ) || 0;

  // 2. Calcul des Audiences Globales (Somme Google + Meta + Tiktok)
  const networks = ["google", "meta", "tiktok"];
  let aggregateGender = { femmes: 0, hommes: 0 };
  let aggregateAges = {};

  networks.forEach((net) => {
    const audience = theme.audiences?.[net];
    if (audience) {
      // Cumul Genre (gestion minuscules/majuscules)
      aggregateGender.femmes += parseFloat(
        audience.gender?.femmes || audience.gender?.Femmes || 0,
      );
      aggregateGender.hommes += parseFloat(
        audience.gender?.hommes || audience.gender?.Hommes || 0,
      );

      // Cumul Âges
      audience.ages?.forEach((ageObj) => {
        aggregateAges[ageObj.label] =
          (aggregateAges[ageObj.label] || 0) + parseFloat(ageObj.value || 0);
      });
    }
  });

  // 3. Détermination du Top Genre Global
  const topGenre =
    aggregateGender.femmes > aggregateGender.hommes ? "Femmes" : "Hommes";

  // 4. Détermination du Top Âge Global
  let topAge = "-";
  let maxAgeValue = 0;
  Object.entries(aggregateAges).forEach(([label, value]) => {
    if (value > maxAgeValue) {
      maxAgeValue = value;
      topAge = label;
    }
  });

  return {
    volume: totalVolume.toLocaleString("fr-FR"),
    cpc: theme.cpc || "—",
    age: topAge,
    genre: topGenre,
  };
};

// --- COMPOSANT DES LIGNES D'INSIGHTS ---
const InsightRow = ({ label, valA, valB, colorA, colorB }) => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{ py: 1.8, position: "relative" }}
  >
    <Typography
      sx={{
        flex: 1,
        textAlign: "right",
        pr: 5,
        fontWeight: 800,
        color: "#3A3784",
        fontSize: "16px",
      }}
    >
      {valA}
    </Typography>
    <Box
      sx={{
        width: "35%",
        height: "10px",
        bgcolor: "#F4F4FB",
        borderRadius: "10px",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Box sx={{ flex: 1, bgcolor: colorA }} />
      <Box sx={{ flex: 1, bgcolor: colorB }} />
    </Box>
    <Typography
      sx={{
        flex: 1,
        textAlign: "left",
        pl: 5,
        fontWeight: 800,
        color: "#3A3784",
        fontSize: "16px",
      }}
    >
      {valB}
    </Typography>
    <Typography
      sx={{
        position: "absolute",
        left: 0,
        color: "#5329C2",
        fontSize: "11px",
        fontWeight: 700,
        opacity: 0.5,
        textTransform: "uppercase",
      }}
    >
      {label}
    </Typography>
    <Typography
      sx={{
        position: "absolute",
        right: 0,
        color: "#5329C2",
        fontSize: "11px",
        fontWeight: 700,
        opacity: 0.5,
        textTransform: "uppercase",
      }}
    >
      {label}
    </Typography>
  </Stack>
);

const ComparisonContent = () => {
  const themes = Object.keys(studyConfig).filter(
    (key) => key !== "Vue Globale : Le bio",
  );
  const [themeA, setThemeA] = useState(themes[0]);
  const [themeB, setThemeB] = useState(themes[1] || themes[0]);
  const [showResults, setShowResults] = useState(false);

  const insightsA = getThemeInsights(themeA);
  const insightsB = getThemeInsights(themeB);

  const ThemeSelector = ({ value, onChange }) => (
    <FormControl
      sx={{
        width: "42%",
        bgcolor: studyConfig[value]?.color || "#8AC03E",
        borderRadius: "50px",
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
      }}
    >
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          color: "white",
          fontFamily: "Neue Haas Grotesk Text Pro",
          fontWeight: 600,
          fontSize: "18px",
          height: "60px",
          px: 2,
          "& .MuiSelect-icon": { color: "white", right: "20px" },
        }}
      >
        {themes.map((t) => (
          <MenuItem key={t} value={t}>
            {t}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const ComparisonCard = ({ title, themeKey, children }) => (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
        p: 4,
        borderRadius: "35px",
        border: "1px solid #E0E4EC",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        minHeight: "400px",
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
        <Typography
          sx={{ fontSize: "16px", fontWeight: 700, color: "#3A3784" }}
        >
          {title}
        </Typography>
        <HelpOutlineIcon sx={{ color: "#B0B0CC", fontSize: "18px" }} />
      </Stack>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 600,
          color: studyConfig[themeKey]?.color,
          mb: 2,
        }}
      >
        {themeKey}
      </Typography>
      <Divider sx={{ mb: 3, opacity: 0.4 }} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Paper>
  );

  return (
    <Box sx={{ width: "100%", pb: 10 }}>
      {/* HEADER PAGE */}
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 6 }}>
        <Typography
          sx={{
            fontFamily: "Neue Haas Grotesk Text Pro",
            fontSize: "31px",
            fontWeight: 800,
            color: "#3A3784",
          }}
        >
          Comparaisons
        </Typography>
        <HelpOutlineIcon sx={{ color: "#B0B0CC", fontSize: "26px" }} />
      </Stack>

      {/* SÉLECTEURS */}
      <Box sx={{ mb: 6 }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <ThemeSelector value={themeA} onChange={setThemeA} />
          <Box
            onClick={() => setShowResults(true)}
            sx={{
              width: 60,
              height: 60,
              bgcolor: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              cursor: "pointer",
              border: "1px solid #E0E4EC",
              transition: "0.2s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <Typography
              sx={{ color: "#3A3784", fontWeight: 800, fontSize: "18px" }}
            >
              vs
            </Typography>
          </Box>
          <ThemeSelector value={themeB} onChange={setThemeB} />
        </Stack>
      </Box>

      {showResults && (
        <Stack spacing={8}>
          {/* 1. COMPARAISON GÉNÉRALE CUMULÉE */}
          <Paper
            elevation={0}
            sx={{
              p: "20px 40px",
              borderRadius: "35px",
              border: "1px solid #E0E4EC",
              mb: 6,
              bgcolor: "white",
            }}
          >
            <Stack spacing={0.5}>
              <InsightRow
                label="Volume cumulé"
                valA={insightsA.volume}
                valB={insightsB.volume}
                colorA={studyConfig[themeA].color}
                colorB={studyConfig[themeB].color}
              />
              <InsightRow
                label="Coût par clic"
                valA={insightsA.cpc}
                valB={insightsB.cpc}
                colorA={studyConfig[themeA].color}
                colorB={studyConfig[themeB].color}
              />
              <InsightRow
                label="Top âge"
                valA={insightsA.age}
                valB={insightsB.age}
                colorA={studyConfig[themeA].color}
                colorB={studyConfig[themeB].color}
              />
              <InsightRow
                label="Top genre"
                valA={insightsA.genre}
                valB={insightsB.genre}
                colorA={studyConfig[themeA].color}
                colorB={studyConfig[themeB].color}
              />
            </Stack>
          </Paper>

          {/* 2. ÉVOLUTION DES RECHERCHES */}
          <Box>
            <Typography
              sx={{
                color: "#3A3784",
                mb: 3,
                fontWeight: 800,
                fontSize: "20px",
                ml: 1,
              }}
            >
              Évolution des recherches
            </Typography>
            <Stack direction="row" spacing={3}>
              <ComparisonCard title="Courbe historique" themeKey={themeA}>
                <EvolutionChart data={studyConfig[themeA]} />
              </ComparisonCard>
              <ComparisonCard title="Courbe historique" themeKey={themeB}>
                <EvolutionChart data={studyConfig[themeB]} />
              </ComparisonCard>
            </Stack>
          </Box>

          {/* 3. INTENSITÉ CONCURRENTIELLE */}
          <Box>
            <Typography
              sx={{
                color: "#3A3784",
                mb: 3,
                fontWeight: 800,
                fontSize: "20px",
                ml: 1,
              }}
            >
              Intensité concurrentielle
            </Typography>
            <Stack direction="row" spacing={3}>
              <ComparisonCard title="Benchmark marché" themeKey={themeA}>
                <ThematicIntensityChart />
              </ComparisonCard>
              <ComparisonCard title="Benchmark marché" themeKey={themeB}>
                <ThematicIntensityChart />
              </ComparisonCard>
            </Stack>
          </Box>

          {/* 4, 5, 6. AUDIENCES META, GOOGLE, TIKTOK */}
          {["meta", "google", "tiktok"].map((net) => (
            <Box key={net}>
              <Typography
                sx={{
                  color: "#3A3784",
                  mb: 3,
                  fontWeight: 800,
                  fontSize: "20px",
                  ml: 1,
                  textTransform: "capitalize",
                }}
              >
                Audience {net}
              </Typography>
              <Stack direction="row" spacing={3}>
                <ComparisonCard title="Âge et Genre" themeKey={themeA}>
                  <AudienceChart data={studyConfig[themeA]} network={net} />
                </ComparisonCard>
                <ComparisonCard title="Âge et Genre" themeKey={themeB}>
                  <AudienceChart data={studyConfig[themeB]} network={net} />
                </ComparisonCard>
              </Stack>
            </Box>
          ))}

          {/* 7. VOLUME GÉOGRAPHIQUE */}
          <Box>
            <Typography
              sx={{
                color: "#3A3784",
                mb: 3,
                fontWeight: 800,
                fontSize: "20px",
                ml: 1,
              }}
            >
              Volume de recherche (Géographique)
            </Typography>
            <Stack direction="row" spacing={3}>
              <ComparisonCard title="Densité régionale" themeKey={themeA}>
                <FranceMapChart data={studyConfig[themeA]} />
              </ComparisonCard>
              <ComparisonCard title="Densité régionale" themeKey={themeB}>
                <FranceMapChart data={studyConfig[themeB]} />
              </ComparisonCard>
            </Stack>
          </Box>

          {/* 8. NUAGE DE MOTS */}
          <Box>
            <Typography
              sx={{
                color: "#3A3784",
                mb: 3,
                fontWeight: 800,
                fontSize: "20px",
                ml: 1,
              }}
            >
              Nuage de mots clés
            </Typography>
            <Stack direction="row" spacing={3}>
              <ComparisonCard title="Univers sémantique" themeKey={themeA}>
                <WordCloudChart data={studyConfig[themeA]} />
              </ComparisonCard>
              <ComparisonCard title="Univers sémantique" themeKey={themeB}>
                <WordCloudChart data={studyConfig[themeB]} />
              </ComparisonCard>
            </Stack>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default ComparisonContent;
