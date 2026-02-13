export const prixData = {
  label: "Le Prix",
  color: "#4A90B5",
  lineColor: "#2A607D",
  bigEye:
    "L'analyse BigEye : Les préoccupations liées au pouvoir d'achat boostent les recherches sur les prix bas et les promotions en 2024.",
  evolutionData: [
    { year: "2021", volume: 25000, growth: null },
    { year: "2022", volume: 32000, growth: "+28%" },
    { year: "2023", volume: 28000, growth: "-12.5%" },
    { year: "2024", volume: 35000, growth: "+25%" },
    { year: "2025", volume: 38000, growth: "+8.5%", isEstimated: true },
  ],
  mapData: {
    defaultRegion: "IDF",
    regions: [
      { id: "idf", label: "Île-de-France", value: 3500 },
      { id: "hauts-de-france", label: "Hauts-de-France", value: 3100 },
    ],
    scale: [
      { range: "0 - 1500", color: "#F7D78E" },
      { range: "1501 - 3500", color: "#7A2028" },
    ],
  },
  keywords: [
    { text: "Promotion", value: 90, color: "#2A607D" },
    { text: "Discount", value: 70, color: "#4A90B5" },
    { text: "Budget", value: 50, color: "#A9CCE3" },
  ],
  thematicAnalysis: { values: [25000, 32000, 28000, 35000, 38000] },
  thematicIntensity: { intensity: 80, volume: 90 },
  audiences: {
    google: {
      ages: [
        { label: "25-34", value: 35000, color: "#4EAD4A" },
        { label: "35-44", value: 28000, color: "#97D094" },
      ],
      gender: { femmes: 55, hommes: 45, colors: ["#D44361", "#4136D9"] },
    },
    meta: {
      ages: [],
      gender: { femmes: 60, hommes: 40, colors: ["#D44361", "#4136D9"] },
    },
    tiktok: {
      ages: [],
      gender: { femmes: 70, hommes: 30, colors: ["#D44361", "#4136D9"] },
    },
  },
  legendConfig: {
    volume: [
      { type: "square", label: "Prix", color: "#4A90B5" },
      { type: "line", label: "Tendance", color: "#2A607D" },
    ],
    audience: [{ type: "square", label: "Audience", color: "#5CB059" }],
  },
};
