import React, { useState } from "react";
import { Box } from "@mui/material";

// 1. IMPORTS DU LAYOUT
import SideBar from "./components/layout/SideBar";
import Topbar from "./components/layout/Topbar";
import ProfileBar from "./components/layout/ProfileBar";
import PaginationFooter from "./components/layout/PaginationFooter";

// 2. IMPORTS DES VIEWS
import LandingPage from "./components/views/LandingPage";
import StudyTemplate from "./components/views/StudyTemplate"; // Le moteur unique dynamique
import ComparisonContent from "./components/views/ComparisonContent";

export default function App() {
  const [view, setView] = useState("landing");

  // Correction de la casse pour correspondre à la clé exacte de studyConfig
  const [activeTab, setActiveTab] = useState("Vue Globale : Le Bio");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeNetwork, setActiveNetwork] = useState(null);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#f0f2f9",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat:wght@400;500;600;700&display=swap');
          body { margin: 0; padding: 0; overflow: hidden; background-color: #f0f2f9; }
        `}
      </style>

      {/* DASHBOARD CONTAINER - SCALING GLOBAL 75% */}
      <Box
        sx={{
          width: "133.333vw",
          height: "133.333vh",
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          transform: "scale(0.75)",
          transformOrigin: "top left",
          p: 3,
          boxSizing: "border-box",
          filter: view === "landing" ? "blur(20px)" : "none",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: view === "landing" ? "none" : "auto",
        }}
      >
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setActiveNetwork(null); // Reset l'audience lors d'un changement d'onglet
          }}
          onBack={() => setView("landing")}
          sx={{ height: "100%" }}
        />

        <Box
          sx={{
            flexGrow: 1,
            ml: 3,
            mr: 1.5,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100%",
          }}
        >
          {/* TOPBAR & PROFILE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 3,
              flexShrink: 0,
            }}
          >
            <Topbar />
            <ProfileBar />
          </Box>

          {/* CONTENEUR BLANC GLASSMORPHISM */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              bgcolor: "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur(15px)",
              borderRadius: "55px",
              border: "1px solid rgba(255, 255, 255, 0.7)",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                "&::-webkit-scrollbar": { width: "8px" },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(58, 55, 132, 0.15)",
                  borderRadius: "10px",
                },
              }}
            >
              {/* ZONE DE CONTENU DYNAMIQUE UNIQUE */}
              <Box sx={{ p: 5, flex: 1 }}>
                {activeTab === "Comparaisons" ? (
                  <ComparisonContent />
                ) : (
                  <StudyTemplate
                    activeTab={activeTab}
                    activeNetwork={activeNetwork}
                    setActiveNetwork={setActiveNetwork}
                  />
                )}
              </Box>

              <PaginationFooter />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* LANDING PAGE OVERLAY */}
      {view === "landing" && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 1000,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "rgba(240, 242, 249, 0.2)",
            backdropFilter: "blur(5px)",
          }}
        >
          <LandingPage onOpen={() => setView("dashboard")} />
        </Box>
      )}
    </Box>
  );
}
