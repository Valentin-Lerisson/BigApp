export const plaisirData = {
  label: "Le Goût & Le Plaisir",
  color: "#C0435D",
  lineColor: "#7D1E32",
  bigEye:
    "L'analyse BigEye : Le plaisir gustatif reste une valeur refuge, orientée vers la gourmandise de qualité.",
  evolutionData: [
    { year: "2021", volume: 30000 },
    { year: "2022", volume: 31500 },
    { year: "2023", volume: 34000 },
    { year: "2024", volume: 33000 },
    { year: "2025", volume: 36000, isEstimated: true },
  ],
  mapData: {
    defaultRegion: "PACA",
    regions: [{ id: "paca", label: "PACA", value: 3600 }],
    scale: [{ range: "0 - 4000", color: "#7A2028" }],
  },
  keywords: [
    { text: "Gourmandise", value: 90, color: "#7D1E32" },
    { text: "Saveur", value: 85, color: "#C0435D" },
  ],
  thematicAnalysis: { values: [30000, 31500, 34000, 33000, 36000] },
  thematicIntensity: { intensity: 75, volume: 60 },
  audiences: {
    google: {
      ages: [{ label: "25-34", value: 30000 }],
      gender: { femmes: 52, hommes: 48, colors: ["#D44361", "#4136D9"] },
    },
    meta: {
      ages: [],
      gender: { femmes: 58, hommes: 42, colors: ["#D44361", "#4136D9"] },
    },
    tiktok: {
      ages: [],
      gender: { femmes: 55, hommes: 45, colors: ["#D44361", "#4136D9"] },
    },
  },
  legendConfig: {
    volume: [{ type: "square", label: "Plaisir", color: "#C0435D" }],
    audience: [{ type: "square", label: "Audience", color: "#5CB059" }],
  },
};
