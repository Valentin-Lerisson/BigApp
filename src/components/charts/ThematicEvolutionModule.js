import React, { useState } from "react";
import { Box, Stack, Typography, IconButton, Grid } from "@mui/material";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { thematicAnalysis } from "../../config/studyConfig";

// Style de base pour la typo
const labelStyle = {
  fontFamily: "Neue Haas Grotesk Text Pro, sans-serif",
  color: "#3A3784",
};

// 1. LÉGENDE MODERNISÉE
export const ThematicEvolutionLegend = () => {
  const years = thematicAnalysis?.years || [];
  const themeColors = thematicAnalysis?.colors || [
    "#4A90B5",
    "#3A3A74",
    "#C0435D",
    "#D16432",
    "#4E7326",
  ];

  return (
    <Grid container spacing={2}>
      {years.map((year, i) => (
        <Grid item xs={6} key={year}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 10,
                height: 10,
                bgcolor: themeColors[i] || "#ccc",
                borderRadius: "3px",
              }}
            />
            <Typography
              sx={{ ...labelStyle, fontSize: "13px", fontWeight: 600 }}
            >
              {year} {i === years.length - 1 ? "(préd.)" : ""}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export const ThematicEvolutionChart = () => {
  const [view, setView] = useState("bar");

  const years = thematicAnalysis?.years || [];
  const themeColors = thematicAnalysis?.colors || [
    "#4A90B5",
    "#3A3A74",
    "#C0435D",
    "#D16432",
    "#4E7326",
  ];
  const rawData = thematicAnalysis?.data || [];

  const formattedData = rawData.map((item) => {
    const obj = { name: item.name };
    years.forEach((year, index) => {
      obj[year] = item.values && item.values[index] ? item.values[index] : 0;
    });
    return obj;
  });

  return (
    <Box
      sx={{ width: "100%", height: 500, minHeight: 500, position: "relative" }}
    >
      {/* Sélecteur de vue modernisé */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ position: "absolute", top: -70, right: 0, zIndex: 10 }}
      >
        <IconButton
          onClick={() => setView("bar")}
          sx={{
            bgcolor: view === "bar" ? "#3A3784" : "#F4F4FB",
            borderRadius: "14px",
            p: 1.2,
            transition: "all 0.3s ease",
            "&:hover": { bgcolor: view === "bar" ? "#2A2764" : "#E9E7FB" },
          }}
        >
          <Box
            component="img"
            src="/icon-bar.png"
            sx={{
              width: 22,
              height: 22,
              filter: view === "bar" ? "brightness(0) invert(1)" : "none",
            }}
          />
        </IconButton>
        <IconButton
          onClick={() => setView("line")}
          sx={{
            bgcolor: view === "line" ? "#3A3784" : "#F4F4FB",
            borderRadius: "14px",
            p: 1.2,
            transition: "all 0.3s ease",
            "&:hover": { bgcolor: view === "line" ? "#2A2764" : "#E9E7FB" },
          }}
        >
          <Box
            component="img"
            src="/icon-line.png"
            sx={{
              width: 22,
              height: 22,
              filter: view === "line" ? "brightness(0) invert(1)" : "none",
            }}
          />
        </IconButton>
      </Stack>

      <ResponsiveContainer width="100%" height="100%">
        {view === "bar" ? (
          <BarChart
            data={formattedData}
            margin={{ top: 40, right: 30, left: 0, bottom: 60 }}
          >
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="#F0F0F0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ ...labelStyle, fontSize: 11, fontWeight: 700 }}
              dy={20}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                ...labelStyle,
                fontSize: 12,
                fill: "#B0B0CC",
                fontWeight: 500,
              }}
              domain={[0, "dataMax + 5000"]}
            />

            {years.map((year, i) => (
              <Bar
                key={year}
                dataKey={year}
                fill={themeColors[i]}
                barSize={14}
                radius={[5, 5, 5, 5]} // Look "capsule" moderne
              >
                <LabelList
                  dataKey={year}
                  position="top"
                  style={{
                    fontSize: "10px",
                    fontWeight: 800,
                    fill: "#3A3784",
                    fontFamily: labelStyle.fontFamily,
                  }}
                  offset={12}
                />
              </Bar>
            ))}
          </BarChart>
        ) : (
          <LineChart
            data={formattedData}
            margin={{ top: 40, right: 30, left: 0, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="#F0F0F0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ ...labelStyle, fontSize: 12, fontWeight: 700 }}
              dy={15}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ ...labelStyle, fontSize: 12, fill: "#B0B0CC" }}
            />
            {years.map((year, i) => (
              <Line
                key={year}
                type="monotone"
                dataKey={year}
                stroke={themeColors[i]}
                strokeWidth={4}
                dot={{
                  r: 5,
                  fill: "#fff",
                  stroke: themeColors[i],
                  strokeWidth: 3,
                }}
                activeDot={{ r: 7, strokeWidth: 0 }}
              />
            ))}
          </LineChart>
        )}
      </ResponsiveContainer>
    </Box>
  );
};
