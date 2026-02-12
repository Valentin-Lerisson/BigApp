import React from "react";
import { Box, Typography, Button, Divider, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  activeTab,
  setActiveTab,
  onBack,
}) => {
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
        width: isSidebarOpen ? "300px" : "80px",
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 32px)",
        transition: "width 0.4s ease",
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
              sx={{ height: "30px" }}
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
                        fontSize: "14px",
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
            <Typography sx={{ fontSize: "13px" }}>Quitter</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
