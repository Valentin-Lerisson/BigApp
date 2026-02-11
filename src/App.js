import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Fade,
  Zoom,
  IconButton,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LogoutIcon from "@mui/icons-material/Logout";

// ==========================================
// 1. COMPOSANT PAGE D'ACCUEIL (Landing Page)
// ==========================================
const LandingPage = ({ onOpen }) => (
  <Zoom in={true} timeout={500}>
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "90%",
        maxWidth: "1200px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: { xs: "28px", md: "42px" },
          color: "#5D30C4",
          letterSpacing: "-1.5px",
          mb: { xs: 8, md: 12 },
          zIndex: 5,
          textAlign: "center",
        }}
      >
        Audience Insight
      </Typography>

      <Box
        component="img"
        src="/groupe.png"
        sx={{
          position: "absolute",
          top: { xs: 50, md: 90 },
          width: { xs: "100px", md: "140px" },
          zIndex: 6,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          borderRadius: "40px",
          padding: { xs: "40px 20px", md: "60px 45px" },
          width: "100%",
          maxWidth: "940px",
          textAlign: "center",
          zIndex: 2,
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 20px 50px rgba(58, 55, 132, 0.05)",
        }}
      >
        <Typography
          sx={{
            color: "#7070AA",
            fontSize: "16px",
            mb: 1,
            textTransform: "lowercase",
          }}
        >
          Sélectionnez une version du projet
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "#3A3784", fontSize: "28px", fontWeight: 800, mb: 6 }}
        >
          Étude InterBio
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            gap: { xs: 5, md: 2 },
            mb: 6,
          }}
        >
          <StatColumn
            header="échantillon"
            info="16 mots clés"
            value="1 542 256"
            subInfo="recherches sur google"
          />
          <StatColumn
            header="période"
            info="de novembre 2023"
            info2="à novembre 2024"
          />
          <StatColumn
            header="zone géographique"
            info="france"
            info2="espagne"
            info3="italie"
          />
        </Box>
        <Button
          variant="contained"
          onClick={onOpen}
          sx={{
            background: "linear-gradient(135deg, #641BFB, #171FE5)",
            borderRadius: "50px",
            padding: "18px 110px",
            fontSize: "17px",
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Ouvrir
        </Button>
      </Box>
    </Box>
  </Zoom>
);

// ==========================================
// 2. COMPOSANT DASHBOARD
// ==========================================
const Dashboard = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("Vue Globale : Le bio");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // État pour rétracter la sidebar

  const categories = [
    "Vue Globale : Le bio",
    "Thématique 1 : Le prix",
    "Thématique 3 : Le goût et le plaisir",
    "Thématique 4 : Le prix",
    "Comparaisons",
  ];

  return (
    <Fade in={true} timeout={800}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          bgcolor: "#F8F9FD",
          p: 2,
        }}
      >
        {/* --- SIDEBAR AVEC BORDER RADIUS 35PX --- */}
        <Box
          sx={{
            width: isSidebarOpen ? "300px" : "80px",
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 32px)",
            transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            borderRadius: "35px",
            overflow: "hidden", // Important pour le border radius
            boxShadow: "10px 0 30px rgba(0,0,0,0.05)",
          }}
        >
          {/* ENCART 1 (Haut - #5D30C3) */}
          <Box
            sx={{
              bgcolor: "#5D30C3",
              p: isSidebarOpen ? "25px 20px" : "25px 10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              {isSidebarOpen && (
                <Box
                  component="img"
                  src="/bigapplogo.png"
                  sx={{ height: "35px", objectFit: "contain" }}
                />
              )}
              <IconButton
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                sx={{ color: "white" }}
              >
                <MenuOpenIcon
                  sx={{
                    transform: isSidebarOpen
                      ? "rotate(0deg)"
                      : "rotate(180deg)",
                    transition: "0.3s",
                  }}
                />
              </IconButton>
            </Box>

            {isSidebarOpen && (
              <>
                <Box
                  onClick={onBack}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    mb: 2,
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "white" },
                  }}
                >
                  <ArrowBackIosNewIcon sx={{ fontSize: "11px", mr: 0.5 }} />
                  <Typography
                    sx={{
                      fontFamily: "Neue Haas Grotesk Text Pro",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    Projets
                  </Typography>
                </Box>
                <Button
                  fullWidth
                  sx={{
                    bgcolor: "#260a69",
                    color: "white",
                    fontFamily: "Arial Black",
                    fontSize: "18px",
                    py: 1.5,
                    borderRadius: "20px",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#1a074d" },
                  }}
                >
                  Audience Insight
                </Button>
              </>
            )}
          </Box>

          {/* ENCART 2 (Catégories - #7D4DE8) */}
          <Box
            sx={{
              bgcolor: "#7D4DE8",
              flexGrow: 1,
              p: "10px 15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              {categories.map((cat, index) => {
                const isActive = activeTab === cat;
                return (
                  <Box key={cat}>
                    <Box
                      onClick={() => setActiveTab(cat)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: isSidebarOpen
                          ? "space-between"
                          : "center",
                        p: "12px 10px",
                        cursor: "pointer",
                        borderRadius: isActive ? "7px" : "0px",
                        bgcolor: isActive ? "#8DC53E" : "transparent",
                      }}
                    >
                      {isSidebarOpen ? (
                        <>
                          <Typography
                            sx={{
                              fontFamily: "Neue Haas Grotesk Text Pro",
                              fontSize: isActive ? "16px" : "15px",
                              fontWeight: isActive ? 600 : 400,
                              color: isActive
                                ? "white"
                                : "rgba(255,255,255,0.7)",
                            }}
                          >
                            {cat}
                          </Typography>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Divider
                              orientation="vertical"
                              flexItem
                              sx={{
                                height: "18px",
                                borderColor: "rgba(255,255,255,0.3)",
                                mx: 1,
                              }}
                            />
                            <ChevronRightIcon
                              sx={{ color: "white", fontSize: "18px" }}
                            />
                          </Box>
                        </>
                      ) : (
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            bgcolor: isActive
                              ? "white"
                              : "rgba(255,255,255,0.3)",
                          }}
                        />
                      )}
                    </Box>
                    {isSidebarOpen &&
                      !isActive &&
                      index !== categories.length - 1 && (
                        <Divider
                          sx={{ borderColor: "rgba(255,255,255,0.2)", my: 0.5 }}
                        />
                      )}
                  </Box>
                );
              })}
            </Box>

            {/* BOUTON PORTE DE SORTIE (Tout en bas) */}
            <Box sx={{ mt: "auto", pt: 2 }}>
              <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 2 }} />
              <Box
                onClick={onBack}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isSidebarOpen ? "flex-start" : "center",
                  cursor: "pointer",
                  p: "10px",
                  borderRadius: "10px",
                  color: "white",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.1)" },
                }}
              >
                <LogoutIcon
                  sx={{ fontSize: "20px", mr: isSidebarOpen ? 2 : 0 }}
                />
                {isSidebarOpen && (
                  <Typography
                    sx={{
                      fontFamily: "Neue Haas Grotesk Text Pro",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Quitter l'étude
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* --- ZONE DE CONTENU PRINCIPALE --- */}
        <Box
          sx={{ flexGrow: 1, p: 4, overflowY: "auto", transition: "all 0.4s" }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#3A3784", fontWeight: 800, mb: 1 }}
          >
            {activeTab}
          </Typography>
          <Typography sx={{ color: "#7070AA", mb: 4 }}>
            Analyse détaillée des segments d'audience
          </Typography>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "35px",
              p: 4,
              minHeight: "75vh",
              boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
              border: "1px solid #E0E4EC",
            }}
          >
            <Typography variant="h6" sx={{ color: "#3A3784", fontWeight: 700 }}>
              Contenu des données
            </Typography>
            <Divider sx={{ my: 2 }} />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

// ==========================================
// 3. APP PRINCIPALE
// ==========================================
function App() {
  const [view, setView] = useState("landing");
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f0f2f9",
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
      </style>
      {view === "landing" ? (
        <LandingPage onOpen={() => setView("dashboard")} />
      ) : (
        <Dashboard onBack={() => setView("landing")} />
      )}
    </Box>
  );
}

function StatColumn({ header, info, value, subInfo, info2, info3 }) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textTransform: "lowercase",
      }}
    >
      <Typography
        sx={{
          color: "#3A3784",
          fontSize: "16px",
          fontWeight: 800,
          mb: 2,
          minHeight: "40px",
        }}
      >
        {header}
      </Typography>
      <Typography sx={{ color: "#7070AA", fontSize: "14px" }}>
        {info}
      </Typography>
      <Divider
        sx={{ width: "130px", my: 1.5, borderColor: "rgba(58, 55, 132, 0.15)" }}
      />
      {value && (
        <Typography
          sx={{ color: "#7070AA", fontSize: "15px", fontWeight: 800 }}
        >
          {value}
        </Typography>
      )}
      {subInfo && (
        <Typography sx={{ color: "#7070AA", fontSize: "11px" }}>
          {subInfo}
        </Typography>
      )}
      {info2 && (
        <Typography sx={{ color: "#7070AA", fontSize: "14px" }}>
          {info2}
        </Typography>
      )}
      {info3 && (
        <>
          <Divider
            sx={{
              width: "130px",
              my: 1.5,
              borderColor: "rgba(58, 55, 132, 0.15)",
            }}
          />
          <Typography sx={{ color: "#7070AA", fontSize: "14px" }}>
            {info3}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default App;
