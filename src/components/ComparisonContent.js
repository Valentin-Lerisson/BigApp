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
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const themes = [
  "Thématique 1 : Le prix",
  "Thématique 2 : L'environnement",
  "Thématique 3 : Le goût et le plaisir",
  "Thématique 4 : La praticité",
];

const ComparisonContent = () => {
  const [themeA, setThemeA] = useState(themes[0]);
  const [themeB, setThemeB] = useState(themes[2]);
  const [showResults, setShowResults] = useState(false);

  const borderRadiusLarge = "45px";

  const ThemeSelector = ({ value, onChange }) => (
    <FormControl
      sx={{
        width: "42%",
        bgcolor: "#8AC03E",
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
          fontWeight: 500,
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

  // Carte d'insight standard réutilisée pour tout
  const ComparisonCard = ({ title, themeName, imgPath }) => (
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
        position: "relative",
        minHeight: "400px",
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
        <Typography
          sx={{
            fontFamily: "Neue Haas Grotesk Text Pro",
            fontSize: "18px",
            fontWeight: 500,
            color: "#3A3784",
          }}
        >
          {title}
        </Typography>
        <HelpOutlineIcon sx={{ color: "#B0B0CC", fontSize: "18px" }} />
      </Stack>
      <Typography
        sx={{
          fontFamily: "Neue Haas Grotesk Text Pro",
          fontSize: "15px",
          fontWeight: 500,
          color: "#7D4DE8",
          mb: 2,
        }}
      >
        {themeName}
      </Typography>
      <Divider sx={{ mb: 3, opacity: 0.4, width: "100%" }} />

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
          src={imgPath}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            maxHeight: "320px",
          }}
        />
      </Box>
      <OpenInFullIcon
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
          color: "#B0B0CC",
          fontSize: "16px",
          cursor: "pointer",
        }}
      />
    </Paper>
  );

  return (
    <Box sx={{ width: "100%", pb: 5 }}>
      {/* HEADER PAGE */}
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 6 }}>
        <Typography
          sx={{
            fontFamily: "Neue Haas Grotesk Text Pro",
            fontSize: "31px",
            fontWeight: 700,
            color: "#3A3784",
          }}
        >
          Comparaisons
        </Typography>
        <HelpOutlineIcon sx={{ color: "#B0B0CC", fontSize: "26px" }} />
      </Stack>

      {/* ZONE SÉLECTEURS */}
      <Box sx={{ mb: 6 }}>
        <Typography
          sx={{
            color: "#3A3784",
            mb: 3,
            fontSize: "18px",
            fontWeight: 500,
            fontFamily: "Neue Haas Grotesk Text Pro",
          }}
        >
          Choisissez deux thématiques à comparer :
        </Typography>
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
              width: 55,
              height: 55,
              bgcolor: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              cursor: "pointer",
              zIndex: 2,
              border: "1px solid #E0E4EC",
              "&:hover": { transform: "scale(1.05)" },
              transition: "0.2s",
            }}
          >
            <Typography
              sx={{ color: "#5329C2", fontWeight: 700, fontSize: "18px" }}
            >
              vs
            </Typography>
          </Box>
          <ThemeSelector value={themeB} onChange={setThemeB} />
        </Stack>
      </Box>

      {showResults && (
        <Stack spacing={6}>
          {/* 1. STATS GLOBALES (TABLEAU VIOLET) */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: borderRadiusLarge,
              overflow: "hidden",
              border: "1px solid #E0E4EC",
            }}
          >
            <Box
              component="img"
              src="/stats-comparaison-full.png"
              sx={{ width: "100%", display: "block" }}
            />
          </Paper>

          {/* 2. ÉVOLUTION DES RECHERCHES */}
          <Stack direction="row" spacing={3}>
            <ComparisonCard
              title="Évolution des recherches"
              themeName={themeA}
              imgPath="/evol-a.png"
            />
            <ComparisonCard
              title="Évolution des recherches"
              themeName={themeB}
              imgPath="/evol-b.png"
            />
          </Stack>

          {/* 3. INTENSITÉ CONCURRENTIELLE */}
          <Stack direction="row" spacing={3}>
            <ComparisonCard
              title="Intensité concurrentielle"
              themeName={themeA}
              imgPath="/intensite-a.png"
            />
            <ComparisonCard
              title="Intensité concurrentielle"
              themeName={themeB}
              imgPath="/intensite-b.png"
            />
          </Stack>

          {/* 4. AUDIENCE META - ÂGES */}
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "#3A3784", mb: 2, fontWeight: 700, ml: 1 }}
            >
              Audience Meta
            </Typography>
            <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
              <ComparisonCard
                title="Âges de l’audience"
                themeName={themeA}
                imgPath="/meta-age-a.png"
              />
              <ComparisonCard
                title="Âges de l’audience"
                themeName={themeB}
                imgPath="/meta-age-b.png"
              />
            </Stack>
            {/* 5. AUDIENCE META - GENRE */}
            <Stack direction="row" spacing={3}>
              <ComparisonCard
                title="Le genre de l’audience"
                themeName={themeA}
                imgPath="/meta-genre-a.png"
              />
              <ComparisonCard
                title="Le genre de l’audience"
                themeName={themeB}
                imgPath="/meta-genre-b.png"
              />
            </Stack>
          </Box>

          {/* 6. AUDIENCE GOOGLE - ÂGES */}
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "#3A3784", mb: 2, fontWeight: 700, ml: 1 }}
            >
              Audience Google
            </Typography>
            <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
              <ComparisonCard
                title="Âges de l’audience"
                themeName={themeA}
                imgPath="/google-age-a.png"
              />
              <ComparisonCard
                title="Âges de l’audience"
                themeName={themeB}
                imgPath="/google-age-b.png"
              />
            </Stack>
            {/* 7. AUDIENCE GOOGLE - GENRE */}
            <Stack direction="row" spacing={3}>
              <ComparisonCard
                title="Le genre de l’audience"
                themeName={themeA}
                imgPath="/google-genre-a.png"
              />
              <ComparisonCard
                title="Le genre de l’audience"
                themeName={themeB}
                imgPath="/google-genre-b.png"
              />
            </Stack>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default ComparisonContent;
