import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Style de base pour la cohérence
const labelStyle = {
  fontFamily: "Neue Haas Grotesk Text Pro, sans-serif",
  fill: "#3A3784",
};

const CustomLabel = ({ x, y, width, value, index, chartData }) => {
  const point = chartData && chartData[index];
  if (!point) return null;

  return (
    <g>
      {/* Valeur Principale (Volume) */}
      <text
        x={x + width / 2}
        y={y - 25}
        fill="#3A3784"
        textAnchor="middle"
        style={{
          fontSize: "14px",
          fontWeight: 700,
          fontFamily: labelStyle.fontFamily,
        }}
      >
        {value?.toLocaleString("fr-FR")}
      </text>

      {/* Badge de Croissance */}
      {point.growth && (
        <text
          x={x + width / 2}
          y={y - 10}
          textAnchor="middle"
          fill={point.growth.startsWith("-") ? "#D44361" : "#8AC03E"}
          style={{
            fontSize: "11px",
            fontWeight: 800,
            fontFamily: labelStyle.fontFamily,
          }}
        >
          {point.growth}
        </text>
      )}
    </g>
  );
};

export const EvolutionLegend = ({ data }) => {
  const items = data?.legendConfig?.volume || [];
  return (
    <Stack spacing={2}>
      {items.map((item, i) => (
        <Stack key={i} direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 12,
              height: item.type === "square" ? 12 : 4,
              bgcolor: item.color,
              borderRadius: "4px",
            }}
          />
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#3A3784",
              fontFamily: labelStyle.fontFamily,
            }}
          >
            {item.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export const EvolutionChart = ({ data }) => {
  const chartData = data?.evolutionData || [];

  return (
    <Box sx={{ width: "100%", height: 450, minHeight: 450 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={chartData}
          margin={{ top: 40, right: 30, left: 0, bottom: 20 }}
        >
          {/* Grille discrète uniquement horizontale */}
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke="#F0F0F0"
          />

          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#B0B0CC",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: labelStyle.fontFamily,
            }}
            dy={15}
          />

          <YAxis hide domain={[0, "dataMax + 12000"]} />

          {/* Barres stylisées en capsules */}
          <Bar
            dataKey="volume"
            barSize={20}
            label={<CustomLabel chartData={chartData} />}
            radius={[10, 10, 10, 10]} // Bords arrondis partout pour un look moderne
          >
            {chartData.map((entry, i) => (
              <Cell
                key={i}
                fill={data?.color}
                fillOpacity={entry.isEstimated ? 0.4 : 0.8} // Opacité réduite pour les estimations
              />
            ))}
          </Bar>

          {/* Ligne "Glow" épaisse */}
          <Line
            type="monotone"
            dataKey="volume"
            stroke={data?.lineColor}
            strokeWidth={4}
            dot={{
              r: 6,
              fill: "#fff",
              stroke: data?.lineColor,
              strokeWidth: 3,
            }}
            activeDot={{ r: 8, strokeWidth: 0 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};
