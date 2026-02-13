import { bioData } from "./themes/bio";
import { prixData } from "./themes/prix";
import { santeData } from "./themes/sante";
import { plaisirData } from "./themes/plaisir";

export const studyConfig = {
  "Vue Globale : Le Bio": bioData,
  "Thématique 1 : Le prix": prixData,
  "Thématique 2 : La santé": santeData,
  "Thématique 3 : Le goût et le plaisir": plaisirData,
};

const themeKeys = Object.keys(studyConfig);

export const thematicAnalysis = {
  years: [2021, 2022, 2023, 2024, 2025],
  // Sécurité : si une couleur manque, on met du gris
  colors: themeKeys.map((key) => studyConfig[key]?.color || "#CCCCCC"),
  data: themeKeys.map((key) => ({
    name: key,
    // Sécurité : si thematicAnalysis est vide dans le fichier thème, on met des zéros
    values: studyConfig[key]?.thematicAnalysis?.values || [0, 0, 0, 0, 0],
  })),
};

export const thematicIntensity = {
  colors: {
    intensity: "#4A90B5",
    volume: "#73994B",
  },
  data: themeKeys.map((key) => ({
    name: key,
    intensity: studyConfig[key]?.thematicIntensity?.intensity || 0,
    volume: studyConfig[key]?.thematicIntensity?.volume || 0,
  })),
};
