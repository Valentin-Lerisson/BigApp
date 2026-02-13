export const santeData = {
  label: "La Santé",
  color: "#3A3A74",
  lineColor: "#1E1E4A",
  bigEye:
    "L'analyse BigEye : L'intérêt pour la santé préventive et la nutrition naturelle reste un moteur majeur de consommation.",
  evolutionData: [
    { year: "2021", volume: 38000, growth: null },
    { year: "2022", volume: 41000, growth: "+7.8%" },
    { year: "2023", volume: 43500, growth: "+6.1%" },
    { year: "2024", volume: 48000, growth: "+10.3%" },
    { year: "2025", volume: 52000, growth: "+8.3%", isEstimated: true },
  ],
  mapData: {
    defaultRegion: "IDF",
    regions: [
      { id: "idf", label: "Île-de-France", value: 4800 },
      { id: "paca", label: "PACA", value: 4200 },
    ],
    scale: [
      { range: "0 - 2000", color: "#F7D78E" },
      { range: "4001 - 5000", color: "#7A2028" },
    ],
  },
  keywords: [
    { text: "Nutrition", value: 95, color: "#1E1E4A" },
    { text: "Naturel", value: 55, color: "#8E8ECA" },
  ],
  thematicAnalysis: { values: [38000, 41000, 43500, 48000, 52000] },
  thematicIntensity: { intensity: 65, volume: 75 },
  audiences: {
    google: {
      ages: [{ label: "35-44", value: 45000, color: "#4EAD4A" }],
      gender: { femmes: 65, hommes: 35, colors: ["#D44361", "#4136D9"] },
    },
    meta: {
      ages: [],
      gender: { femmes: 70, hommes: 30, colors: ["#D44361", "#4136D9"] },
    },
    tiktok: {
      ages: [],
      gender: { femmes: 60, hommes: 40, colors: ["#D44361", "#4136D9"] },
    },
  },
  legendConfig: {
    volume: [{ type: "square", label: "Santé", color: "#3A3A74" }],
    audience: [{ type: "square", label: "Audience", color: "#5CB059" }],
  },
};
