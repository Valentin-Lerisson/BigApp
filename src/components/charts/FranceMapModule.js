import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Divider,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Style de base pour la typo moderne
const labelStyle = {
  fontFamily: "Neue Haas Grotesk Text Pro, sans-serif",
  color: "#3A3784",
};

export const FranceMapLegend = ({ data }) => {
  const scale = data?.mapData?.scale || [];
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box
          sx={{
            width: 10,
            height: 10,
            bgcolor: "#C84437",
            borderRadius: "50%",
            boxShadow: "0 0 8px rgba(200, 68, 55, 0.4)",
          }}
        />
        <Typography sx={{ ...labelStyle, fontSize: "14px", fontWeight: 700 }}>
          Pic de volume
        </Typography>
      </Stack>

      {scale.map((item, i) => (
        <Stack key={i} direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 12,
              height: 12,
              bgcolor: item.color,
              borderRadius: "4px", // Plus moderne que 2px
            }}
          />
          <Typography
            sx={{
              ...labelStyle,
              fontSize: "13px",
              fontWeight: 500,
              color: "#6A6A8E",
            }}
          >
            {item.range}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export const FranceMapChart = ({ data }) => {
  const regions = data?.mapData?.regions || [];
  const [selectedId, setSelectedId] = useState(regions[0]?.id || "");

  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={7}>
        <Box
          sx={{
            p: 4,
            bgcolor: "#F9F9FF",
            borderRadius: "40px",
            border: "1px solid #E0E4EC",
            textAlign: "center",
            position: "relative",
            minHeight: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Moteur SVG - Transition ajoutée pour le futur tracé réel */}
          <svg
            viewBox="0 0 400 400"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "380px",
              filter: "drop-shadow(0px 10px 20px rgba(58, 55, 132, 0.05))",
            }}
          >
            {regions.map((reg) => (
              <rect
                key={reg.id}
                x={100 + Math.random() * 150}
                y={100 + Math.random() * 150}
                width="50"
                height="50"
                rx="12" // Coins arrondis sur les régions placeholder
                fill={selectedId === reg.id ? "#5D30C3" : "#D1D1E9"}
                style={{
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  opacity: selectedId === reg.id ? 1 : 0.6,
                }}
                onClick={() => setSelectedId(reg.id)}
              />
            ))}
          </svg>
        </Box>
      </Grid>

      <Grid item xs={12} md={5}>
        <Box sx={{ pl: { md: 2 } }}>
          <Typography
            sx={{
              ...labelStyle,
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              mb: 1,
            }}
          >
            Analyse régionale
          </Typography>
          <Typography
            sx={{
              ...labelStyle,
              fontSize: "14px",
              fontWeight: 500,
              color: "#B0B0CC",
              mb: 4,
            }}
          >
            Sélectionnez une zone pour voir le détail des volumes.
          </Typography>

          <FormControl fullWidth>
            <Select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              IconComponent={KeyboardArrowDownIcon}
              displayEmpty
              sx={{
                borderRadius: "20px",
                bgcolor: "#fff",
                boxShadow: "0 4px 20px rgba(93, 48, 195, 0.08)",
                color: "#3A3784",
                fontFamily: labelStyle.fontFamily,
                fontWeight: 700,
                fontSize: "15px",
                p: "4px 8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #E0E4EC",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5D30C3",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderWidth: "1.5px",
                  borderColor: "#5D30C3",
                },
              }}
            >
              {regions.map((reg) => (
                <MenuItem
                  key={reg.id}
                  value={reg.id}
                  sx={{
                    fontFamily: labelStyle.fontFamily,
                    fontWeight: 600,
                    fontSize: "14px",
                    py: 1.5,
                  }}
                >
                  {reg.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Petit indicateur de valeur optionnel sous le sélecteur */}
          {selectedId && (
            <Stack
              direction="row"
              alignItems="baseline"
              spacing={1}
              sx={{ mt: 3, px: 1 }}
            >
              <Typography
                sx={{ ...labelStyle, fontSize: "32px", fontWeight: 800 }}
              >
                {regions
                  .find((r) => r.id === selectedId)
                  ?.value?.toLocaleString()}
              </Typography>
              <Typography
                sx={{
                  ...labelStyle,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#B0B0CC",
                }}
              >
                recherches
              </Typography>
            </Stack>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
