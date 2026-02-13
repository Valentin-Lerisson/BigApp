import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { thematicIntensity } from "../../config/studyConfig";

// Style de base pour la typo moderne
const labelStyle = {
  fontFamily: "Neue Haas Grotesk Text Pro, sans-serif",
  color: "#3A3784",
};

/**
 * LÉGENDE : Intensité vs Volume
 */
export const ThematicIntensityLegend = () => {
  const { colors } = thematicIntensity;
  return (
    <Box>
      <Stack direction="row" spacing={4}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 10,
              height: 10,
              bgcolor: colors.intensity,
              borderRadius: "3px",
            }}
          />
          <Typography sx={{ ...labelStyle, fontSize: "13px", fontWeight: 600 }}>
            Intensité concurrentielle
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 10,
              height: 10,
              bgcolor: colors.volume,
              borderRadius: "3px",
            }}
          />
          <Typography sx={{ ...labelStyle, fontSize: "13px", fontWeight: 600 }}>
            Volume
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

/**
 * GRAPHIQUE : Intensité concurrentielle par thématique
 */
export const ThematicIntensityChart = () => {
  const { colors, data } = thematicIntensity;

  return (
    <Box sx={{ width: "100%", height: 500, minHeight: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 40 }}
          barGap={8} // Espace entre les deux barres d'une même thématique
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
            ticks={[0, 50, 100]}
            tickFormatter={(val) => `${val}%`}
            tick={{
              ...labelStyle,
              fontSize: 12,
              fontWeight: 500,
              fill: "#B0B0CC",
            }}
          />
          <Tooltip
            cursor={{ fill: "#F9F9FF" }}
            contentStyle={{
              borderRadius: "15px",
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              fontFamily: labelStyle.fontFamily,
            }}
            formatter={(value) => [`${value}%`]}
          />

          <Bar
            dataKey="intensity"
            fill={colors.intensity}
            barSize={14}
            radius={[10, 10, 10, 10]} // Design capsule
          >
            <LabelList
              dataKey="intensity"
              position="top"
              formatter={(val) => `${val}%`}
              style={{
                fontSize: "11px",
                fontWeight: 800,
                fill: "#3A3784",
                fontFamily: labelStyle.fontFamily,
              }}
              offset={10}
            />
          </Bar>

          <Bar
            dataKey="volume"
            fill={colors.volume}
            barSize={14}
            radius={[10, 10, 10, 10]} // Design capsule
          >
            <LabelList
              dataKey="volume"
              position="top"
              formatter={(val) => `${val}%`}
              style={{
                fontSize: "11px",
                fontWeight: 800,
                fill: "#3A3784",
                fontFamily: labelStyle.fontFamily,
              }}
              offset={10}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
