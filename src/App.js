import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Fade,
  Zoom,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Badge,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// --- Dropdown Pillule ---
const CustomDropdown = ({ label, value, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <Typography
        sx={{
          fontFamily: "Neue Haas Grotesk Text Pro",
          fontSize: "11px",
          color: "#3A3784",
          mb: 0.2,
          ml: 1.5,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Typography>
      <Box
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: 1,
          bgcolor: "#E0DDFB",
          px: 2,
          py: 0.5,
          borderRadius: "36px",
          border: "1px solid rgba(148, 122, 216, 0.2)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Neue Haas Grotesk Text Pro",
            fontSize: "12px",
            fontWeight: 600,
            color: "#220996",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </Typography>
        <KeyboardArrowDownIcon sx={{ fontSize: "14px", color: "#220996" }} />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {options.map((opt) => (
          <MenuItem
            key={opt}
            onClick={() => setAnchorEl(null)}
            sx={{ fontSize: "12px" }}
          >
            {opt}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

// ==========================================
// 1. PAGE D'ACCUEIL (Landing Page) - VERSION ADOUCIE
// ==========================================
const LandingPage = ({ onOpen }) => (
  <Zoom in={true} timeout={500}>
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "95%",
        maxWidth: "1000px",
      }}
    >
      {/* HEADER RÉDUIT */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mb: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: { xs: "24px", md: "34px" }, // Taille réduite
            color: "#5D30C4",
            letterSpacing: "-1px",
            zIndex: 10,
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
            top: "-20px",
            width: { xs: "70px", md: "110px" }, // Logo réduit
            zIndex: 6,
            pointerEvents: "none",
            opacity: 0.9,
          }}
        />
      </Box>

      {/* CARTE BLANCHE PLUS FINE */}
      <Box
        sx={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.35)", // Plus transparent
          backdropFilter: "blur(15px)",
          borderRadius: "35px",
          padding: { xs: "25px 15px", md: "40px 35px" }, // Padding réduit
          width: "100%",
          maxWidth: "780px", // Largeur de carte réduite
          textAlign: "center",
          zIndex: 2,
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 15px 40px rgba(58, 55, 132, 0.04)",
        }}
      >
        <Typography
          sx={{
            color: "#7070AA",
            fontSize: "14px",
            mb: 0.5,
            textTransform: "lowercase",
            letterSpacing: "0.5px",
          }}
        >
          Sélectionnez une version du projet
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "#3A3784", fontSize: "22px", fontWeight: 800, mb: 4 }}
        >
          Étude InterBio
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            gap: { xs: 3, md: 1 },
            mb: 4,
          }}
        >
          <StatColumn
            header="échantillon"
            info="16 mots clés"
            value="1 542 256"
            subInfo="recherches google"
          />
          <StatColumn header="période" info="nov. 2023" info2="nov. 2024" />
          <StatColumn
            header="zone"
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
            padding: { xs: "12px 50px", md: "14px 80px" }, // Bouton moins massif
            fontSize: "15px",
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "0 8px 20px rgba(100, 27, 251, 0.2)",
          }}
        >
          Ouvrir
        </Button>
      </Box>
    </Box>
  </Zoom>
);

// ==========================================
// 2. DASHBOARD
// ==========================================
const Dashboard = ({ onBack, isBlurred }) => {
  const [activeTab, setActiveTab] = useState("Vue Globale : Le bio");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const categories = [
    "Vue Globale : Le bio",
    "Thématique 1 : Le prix",
    "Thématique 3 : Le goût et le plaisir",
    "Thématique 4 : Le prix",
    "Comparaisons",
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        bgcolor: "#F8F9FD",
        p: 2,
        filter: isBlurred ? "blur(15px) grayscale(20%)" : "none",
        opacity: isBlurred ? 0.6 : 1,
        transition: "all 0.6s ease",
        pointerEvents: isBlurred ? "none" : "auto",
        overflow: "hidden",
      }}
    >
      {/* SIDEBAR */}
      <Box
        sx={{
          width: isSidebarOpen ? "300px" : "80px",
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 32px)",
          transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderRadius: "35px",
          overflow: "hidden",
          boxShadow: "10px 0 30px rgba(0,0,0,0.05)",
          flexShrink: 0,
        }}
      >
        <Box sx={{ bgcolor: "#5D30C3", p: "25px 20px" }}>
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
                sx={{ height: "30px", objectFit: "contain" }}
              />
            )}
            <IconButton
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              sx={{ color: "white" }}
            >
              <MenuOpenIcon
                sx={{ transform: isSidebarOpen ? "none" : "rotate(180deg)" }}
              />
            </IconButton>
          </Box>
          {isSidebarOpen && (
            <Box>
              <Box
                onClick={onBack}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  mb: 2,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: "11px", mr: 0.5 }} />
                <Typography sx={{ fontSize: "13px" }}>Projets</Typography>
              </Box>
              <Button
                fullWidth
                sx={{
                  bgcolor: "#260a69",
                  color: "white",
                  fontFamily: "Arial Black",
                  fontSize: "16px",
                  py: 1.2,
                  borderRadius: "15px",
                  textTransform: "none",
                }}
              >
                Audience Insight
              </Button>
            </Box>
          )}
        </Box>
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
            {categories.map((cat, index) => (
              <Box key={cat} sx={{ minWidth: 0 }}>
                <Box
                  onClick={() => setActiveTab(cat)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    p: "12px 10px",
                    cursor: "pointer",
                    borderRadius: "7px",
                    bgcolor: activeTab === cat ? "#8DC53E" : "transparent",
                  }}
                >
                  {isSidebarOpen ? (
                    <>
                      <Typography
                        sx={{
                          fontFamily: "Neue Haas Grotesk Text Pro",
                          fontSize: activeTab === cat ? "15px" : "14px",
                          fontWeight: activeTab === cat ? 600 : 400,
                          color: "white",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          flexGrow: 1,
                        }}
                      >
                        {cat}
                      </Typography>
                      <ChevronRightIcon
                        sx={{ color: "white", fontSize: "16px", flexShrink: 0 }}
                      />
                    </>
                  ) : (
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        bgcolor:
                          activeTab === cat ? "white" : "rgba(255,255,255,0.3)",
                        mx: "auto",
                      }}
                    />
                  )}
                </Box>
                {isSidebarOpen && index !== categories.length - 1 && (
                  <Divider
                    sx={{ borderColor: "rgba(255,255,255,0.1)", my: 0.5 }}
                  />
                )}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              mt: "auto",
              pt: 2,
              display: "flex",
              justifyContent: isSidebarOpen ? "flex-start" : "center",
              p: 1,
              cursor: "pointer",
              color: "white",
            }}
            onClick={onBack}
          >
            <LogoutIcon sx={{ mr: isSidebarOpen ? 2 : 0 }} />
            {isSidebarOpen && (
              <Typography sx={{ fontSize: "13px" }}>Quitter l'étude</Typography>
            )}
          </Box>
        </Box>
      </Box>

      {/* ZONE DROITE */}
      <Box
        sx={{
          flexGrow: 1,
          ml: 2,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100%",
        }}
      >
        {/* TOPBAR & PROFIL */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
            width: "100%",
            height: "72px",
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              bgcolor: "#F0F1FC",
              borderRadius: "35px",
              px: "25px",
              flexGrow: 1,
              height: "100%",
              display: "flex",
              alignItems: "center",
              border: "1px solid #E0E4EC",
              gap: 4,
              overflowX: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#7D4DE8 transparent",
              "&::-webkit-scrollbar": { height: "3px" },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
                margin: "0 100px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#7D4DE8",
                borderRadius: "10px",
              },
            }}
          >
            <Box
              component="img"
              src="/logo-interbio.png"
              sx={{
                height: "40px",
                width: "40px",
                borderRadius: "8px",
                flexShrink: 0,
              }}
            />
            <Box sx={{ flexShrink: 0 }}>
              <Typography
                sx={{
                  fontFamily: "Neue Haas Grotesk Text Pro",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#3A3784",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                Étude InternBio
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#3A3784",
                  opacity: 0.7,
                  whiteSpace: "nowrap",
                }}
              >
                Version V-1 • 02/03/25
              </Typography>
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "#947AD8",
                height: "30px",
                alignSelf: "center",
                flexShrink: 0,
              }}
            />
            <CustomDropdown
              label="clés d’entrées"
              value="Voir les mots clés"
              options={["Bio local", "Prix bio"]}
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "#947AD8",
                height: "30px",
                alignSelf: "center",
                flexShrink: 0,
              }}
            />
            <CustomDropdown
              label="Zone"
              value="France"
              options={["France", "Espagne"]}
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "#947AD8",
                height: "30px",
                alignSelf: "center",
                flexShrink: 0,
              }}
            />

            <Box sx={{ flexShrink: 0 }}>
              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#3A3784",
                  whiteSpace: "nowrap",
                }}
              >
                Volume mensuel
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#220996",
                  whiteSpace: "nowrap",
                }}
              >
                1 542 256
              </Typography>
            </Box>

            <Button
              sx={{
                background: "linear-gradient(135deg, #691BFC, #171FE5)",
                height: "42px",
                borderRadius: "12px",
                color: "white",
                px: 2,
                ml: "auto",
                flexShrink: 0,
              }}
            >
              <FileDownloadIcon fontSize="small" />
            </Button>
          </Box>

          {/* PROFIL */}
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "35px",
              px: "20px",
              display: "flex",
              alignItems: "center",
              gap: 2,
              border: "1px solid #E0E4EC",
              height: "100%",
              flexShrink: 0,
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#44b700",
                  border: "2px solid white",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                },
              }}
            >
              <Avatar src="/momo.png" sx={{ width: 42, height: 42 }} />
            </Badge>
            <Box sx={{ flexShrink: 0 }}>
              <Typography
                sx={{
                  fontFamily: "Neue Haas Grotesk Text Pro",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#1F203B",
                  lineHeight: 1.1,
                  whiteSpace: "nowrap",
                }}
              >
                Mohamed
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#1F203B",
                  opacity: 0.8,
                  whiteSpace: "nowrap",
                }}
              >
                Admin
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                flexShrink: 0,
              }}
            >
              <IconButton size="small">
                <Badge
                  variant="dot"
                  sx={{ "& .MuiBadge-badge": { bgcolor: "#FF8A00" } }}
                >
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <IconButton size="small">
                <SettingsIcon />
              </IconButton>
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* ZONE BLANCHE CENTRALE */}
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "white",
            borderRadius: "35px",
            p: 4,
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
            border: "1px solid #E0E4EC",
            overflowY: "auto",
            minHeight: 0,
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#3A3784", fontWeight: 700, mb: 1 }}
          >
            {activeTab}
          </Typography>
          <Divider sx={{ mb: 3 }} />
        </Box>
      </Box>
    </Box>
  );
};

// ==========================================
// 3. APP PRINCIPALE
// ==========================================
export default function App() {
  const [view, setView] = useState("landing");
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f0f2f9",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
      </style>
      <Dashboard
        onBack={() => setView("landing")}
        isBlurred={view === "landing"}
      />
      {view === "landing" && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 100,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "auto",
          }}
        >
          <LandingPage onOpen={() => setView("dashboard")} />
        </Box>
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
          fontSize: "14px",
          fontWeight: 800,
          mb: 1.5,
          minHeight: "35px",
        }}
      >
        {header}
      </Typography>
      <Typography sx={{ color: "#7070AA", fontSize: "13px" }}>
        {info}
      </Typography>
      <Divider
        sx={{ width: "100px", my: 1, borderColor: "rgba(58, 55, 132, 0.1)" }}
      />
      {value && (
        <Typography
          sx={{ color: "#7070AA", fontSize: "14px", fontWeight: 800 }}
        >
          {value}
        </Typography>
      )}
      {subInfo && (
        <Typography sx={{ color: "#7070AA", fontSize: "10px" }}>
          {subInfo}
        </Typography>
      )}
      {info2 && (
        <Typography sx={{ color: "#7070AA", fontSize: "13px" }}>
          {info2}
        </Typography>
      )}
      {info3 && (
        <>
          <Divider
            sx={{
              width: "100px",
              my: 1,
              borderColor: "rgba(58, 55, 132, 0.1)",
            }}
          />
          <Typography sx={{ color: "#7070AA", fontSize: "13px" }}>
            {info3}
          </Typography>
        </>
      )}
    </Box>
  );
}
