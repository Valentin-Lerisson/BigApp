import React from "react";
import { Box, Grid, Typography, Stack, Paper } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";

// Style commun pour la typo
const labelStyle = {
  fontFamily: "Neue Haas Grotesk Text Pro, sans-serif",
  color: "#3A3784",
};

export const AudienceLegend = ({ data }) => {
  const items = data?.legendConfig?.audience || [];
  return (
    <Stack spacing={1.5}>
      {items.map((item, i) => (
        <Stack key={i} direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 10,
              height: 10,
              bgcolor: item.color,
              borderRadius: "3px",
            }}
          />
          <Typography sx={{ ...labelStyle, fontSize: "13px", fontWeight: 600 }}>
            {item.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export const AudienceChart = ({ data, network }) => {
  const audienceData = data?.audiences?.[network];
  if (!audienceData)
    return (
      <Typography sx={{ p: 2, fontFamily: "Neue Haas Grotesk Text Pro" }}>
        Données non trouvées.
      </Typography>
    );

  const genderData = [
    { name: "Femmes", value: audienceData.gender.femmes },
    { name: "Hommes", value: audienceData.gender.hommes },
  ];

  return (
    <Grid container spacing={3}>
      {/* 1. GRAPHIQUE DES ÂGES */}
      <Grid item xs={12} md={6}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: "30px",
            bgcolor: "#F9F9FF",
            border: "1px solid #E0E4EC",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Typography
              sx={{ ...labelStyle, fontSize: "17px", fontWeight: 700 }}
            >
              Âges de l’audience
            </Typography>
            <Typography
              sx={{
                ...labelStyle,
                fontSize: "12px",
                fontWeight: 800,
                color: "#5329C2",
                bgcolor: "#E9E7FB",
                px: 1.5,
                py: 0.5,
                borderRadius: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {network}
            </Typography>
          </Stack>

          <Box sx={{ width: "100%", height: 220 }}>
            <ResponsiveContainer>
              <BarChart
                data={audienceData.ages}
                margin={{ top: 10, bottom: 0, left: -40 }} // Décalage pour aligner
              >
                <CartesianGrid
                  strokeDasharray="0"
                  vertical={false}
                  horizontal={false}
                  stroke="#F0F0F0"
                />
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    ...labelStyle,
                    fontSize: 12,
                    fontWeight: 500,
                    fill: "#B0B0CC",
                  }}
                />
                <YAxis hide />
                <Bar
                  dataKey="value"
                  barSize={14}
                  radius={[6, 6, 6, 6]} // Barres capsules modernes
                >
                  {audienceData.ages.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

      {/* 2. GRAPHIQUE DU GENRE */}
      <Grid item xs={12} md={6}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: "30px",
            bgcolor: "#F9F9FF",
            border: "1px solid #E0E4EC",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Typography
              sx={{ ...labelStyle, fontSize: "17px", fontWeight: 700 }}
            >
              Le genre de l’audience
            </Typography>
            <Box
              sx={{ bgcolor: "#E9E7FB", px: 1.5, py: 0.5, borderRadius: "8px" }}
            >
              <Typography
                sx={{
                  ...labelStyle,
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "#5329C2",
                  textTransform: "uppercase",
                }}
              >
                {network}
              </Typography>
            </Box>
          </Stack>

          <Box
            sx={{
              width: "100%",
              height: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* BADGE FEMMES */}
            <Box
              sx={{
                position: "absolute",
                left: 10,
                top: "30%",
                bgcolor: "#fff",
                boxShadow: "0 4px 12px rgba(212, 67, 97, 0.15)",
                px: 1.8,
                py: 1,
                borderRadius: "15px",
                textAlign: "center",
                zIndex: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#D44361",
                  fontWeight: 800,
                  fontSize: "15px",
                  fontFamily: labelStyle.fontFamily,
                }}
              >
                {audienceData.gender.femmes}%
              </Typography>
              <Typography
                sx={{
                  color: "#D44361",
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  opacity: 0.7,
                }}
              >
                Femmes
              </Typography>
            </Box>

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65} // Plus grand pour un cercle plus fin
                  outerRadius={85}
                  paddingAngle={8}
                  cornerRadius={10} // Bords arrondis sur les segments
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={audienceData.gender.colors[index]}
                      stroke="none"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* BADGE HOMMES */}
            <Box
              sx={{
                position: "absolute",
                right: 10,
                bottom: "20%",
                bgcolor: "#fff",
                boxShadow: "0 4px 12px rgba(65, 54, 217, 0.15)",
                px: 1.8,
                py: 1,
                borderRadius: "15px",
                textAlign: "center",
                zIndex: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#4136D9",
                  fontWeight: 800,
                  fontSize: "15px",
                  fontFamily: labelStyle.fontFamily,
                }}
              >
                {audienceData.gender.hommes}%
              </Typography>
              <Typography
                sx={{
                  color: "#4136D9",
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  opacity: 0.7,
                }}
              >
                Hommes
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
