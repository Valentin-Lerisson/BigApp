export const bioData = {
  label: "le Bio",
  color: "#D4D99B",
  lineColor: "#738339",
  bigEye:
    "L'analyse BigEye : Le secteur du bio stabilise sa croissance avec une forte résilience sur les produits frais en 2024.",
  evolutionData: [
    { year: "2021", volume: 52744, growth: null },
    { year: "2022", volume: 46992, growth: "-11%" },
    { year: "2023", volume: 49500, growth: "+5,3%" },
    { year: "2024", volume: 44348, growth: "-10%" },
    { year: "2025", volume: 41437, growth: "-6,6%", isEstimated: true },
  ],
  mapData: {
    defaultRegion: "Occitanie",
    regions: [
      { id: "occitanie", label: "Occitanie", value: 2790, path: "M..." },
      { id: "idf", label: "Île-de-France", value: 2000, path: "M..." },
      { id: "paca", label: "PACA", value: 1500, path: "M..." },
    ],
    scale: [
      { range: "0 - 697", color: "#F7D78E" },
      { range: "698 - 1395", color: "#E59253" },
      { range: "1396 - 2092", color: "#E35B42" },
      { range: "2093 - 2790", color: "#7A2028" },
    ],
  },
  keywords: [
    { text: "Bien-être", value: 80, color: "#4E7326" },
    { text: "Santé", value: 70, color: "#4E7326" },
    { text: "Biodiversité", value: 60, color: "#7FA34C" },
    { text: "Prix", value: 55, color: "#97B16A" },
    { text: "Alimentation", value: 50, color: "#BDD19A" },
  ],
  thematicAnalysis: { values: [52744, 46992, 49500, 44348, 41437] },
  thematicIntensity: { intensity: 45, volume: 55 },
  audiences: {
    google: {
      ages: [
        { label: "18-24", value: 27856, color: "#97D094" },
        { label: "25-34", value: 17582, color: "#4EAD4A" },
        { label: "35-44", value: 21423, color: "#97D094" },
        { label: "45-54", value: 15248, color: "#97D094" },
        { label: "+55", value: 15248, color: "#97D094" },
      ],
      gender: { femmes: 40, hommes: 60, colors: ["#D44361", "#4136D9"] },
    },
    meta: {
      ages: [
        { label: "18-24", value: 15000, color: "#97D094" },
        { label: "25-34", value: 25000, color: "#4EAD4A" },
      ],
      gender: { femmes: 55, hommes: 45, colors: ["#D44361", "#4136D9"] },
    },
    tiktok: {
      ages: [{ label: "18-24", value: 45000, color: "#4EAD4A" }],
      gender: { femmes: 65, hommes: 35, colors: ["#D44361", "#4136D9"] },
    },
  },
  legendConfig: {
    volume: [
      { type: "square", label: "le Bio", color: "#D4D99B" },
      { type: "line", label: "Évolution", color: "#738339" },
    ],
    audience: [{ type: "square", label: "Audience", color: "#5CB059" }],
  },
};
