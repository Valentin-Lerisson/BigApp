import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

// IMPORTS COMPOSANTS
import LandingPage from "./components/LandingPage";
import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";
import ProfileBar from "./components/ProfileBar";
import GlobalStudyContent from "./components/GlobalStudyContent";
import ThematicContent from "./components/ThematicContent";
import ComparisonContent from "./components/ComparisonContent";
import PaginationFooter from "./components/PaginationFooter";

export default function App() {
  const [view, setView] = useState("landing");
  const [activeTab, setActiveTab] = useState("Vue Globale : Le bio");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeNetwork, setActiveNetwork] = useState(null);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        bgcolor: "#f0f2f9",
        p: 3,
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat:wght@400;500;600;700&display=swap');
          body { margin: 0; padding: 0; overflow: hidden; }
        `}
      </style>

      {/* DASHBOARD CONTAINER */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          filter: view === "landing" ? "blur(20px)" : "none",
          transform: view === "landing" ? "scale(1.02)" : "scale(1)",
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
            setActiveNetwork(null);
          }}
          onBack={() => setView("landing")}
        />

        <Box
          sx={{
            flexGrow: 1,
            ml: 3,
            mr: 1.5, // <--- MARGE À DROITE RÉDUITE ICI (Passage de 4 à 1.5)
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100%",
          }}
        >
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

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              bgcolor: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(12px)",
              borderRadius: "45px",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(58, 55, 132, 0.1)",
                  borderRadius: "10px",
                },
              }}
            >
              <Box sx={{ p: 4, flexGrow: 1 }}>
                {/* LOGIQUE D'AFFICHAGE SÉCURISÉE */}

                {activeTab === "Vue Globale : Le bio" && (
                  <GlobalStudyContent
                    activeTab={activeTab}
                    activeNetwork={activeNetwork}
                    setActiveNetwork={setActiveNetwork}
                  />
                )}

                {activeTab.includes("Thématique") && (
                  <ThematicContent
                    activeTab={activeTab}
                    activeNetwork={activeNetwork}
                    setActiveNetwork={setActiveNetwork}
                  />
                )}

                {activeTab === "Comparaisons" && <ComparisonContent />}
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
            bgcolor: "rgba(240, 242, 249, 0.3)",
            backdropFilter: "blur(5px)",
          }}
        >
          <LandingPage onOpen={() => setView("dashboard")} />
        </Box>
      )}
    </Box>
  );
}
