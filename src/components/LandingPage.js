import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Zoom,
  Grid,
  Paper,
} from "@mui/material";

const LandingPage = ({ onOpen }) => {
  // Style de typo unique pour toutes les catégories (info, value, etc.)
  const categoryTextStyle = {
    fontFamily: "'Neue Haas Grotesk Text Pro', sans-serif",
    fontSize: { xs: "13px", sm: "14px" },
    fontWeight: 400, // Strictement sans gras
    color: "#7070AA",
    textAlign: "center",
    lineHeight: 1.4,
  };

  return (
    <Zoom in={true} timeout={600}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: {
            xs: "85%", // Mobile : 90% de la largeur de l'écran
            sm: "80%", // Tablette : 80%
            md: "800px", // Desktop : On fixe une largeur max pour que ce soit élégant
          },
          maxWidth: "850px",
          mx: "auto",
          px: 2,
          py: { xs: 2, md: 4 },
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        {/* HEADER : Titre et PNG Toujours visibles */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              color: "#5D30C4",
              letterSpacing: "-1px",
              zIndex: 2,
              position: "relative",
              transform: {
                xs: "translateY(50px)",
                sm: "translateY(-30px)",
                md: "translateY(-50px)",
              },
            }}
          >
            Audience Insight
          </Typography>

          <Box
            component="img"
            src="/groupe.png"
            sx={{
              position: { xs: "relative", sm: "absolute" },
              mt: { xs: -1, sm: 0 },
              left: { sm: "50%" },
              top: { sm: "30px" },
              transform: { sm: "translateX(-50%)", xs: "translateY(70px)" },
              width: { xs: "80px", sm: "100px", md: "150px" },
              opacity: 0.9,
              zIndex: 1,
            }}
          />
        </Box>

        {/* CARTE CENTRALE */}
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(20px)",
            borderRadius: { xs: "30px", md: "45px" },
            border: "1px solid rgba(255, 255, 255, 0.4)",
            padding: { xs: "25px 15px", sm: "40px", md: "50px" },
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(58, 55, 132, 0.08)",
          }}
        >
          <Typography sx={{ ...categoryTextStyle, mb: 1 }}>
            Sélectionnez une version du projet
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#3A3784",
              fontFamily: "'Neue Haas Grotesk Text Pro', sans-serif",
              fontSize: { xs: "22px", sm: "28px" },
              fontWeight: 800,
              mb: { xs: 4, sm: 6 },
            }}
          >
            Étude InterBio
          </Typography>

          {/* Section Stats Grid */}
          <Grid
            container
            spacing={{ xs: 4, sm: 2 }}
            sx={{ mb: { xs: 4, sm: 6 } }}
          >
            <Grid item xs={12} sm={4}>
              <StatItem
                header="Échantillon"
                info="16 mots clés"
                info2={
                  <>
                    1 542 256 <br />
                    Recherches sur Google
                  </>
                }
                textStyle={categoryTextStyle}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatItem
                header="Période"
                info="De Novembre 2023"
                info2="à Novembre 2024"
                textStyle={categoryTextStyle}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatItem
                header="Zone géographique"
                info="France"
                info2="Espagne"
                info3="Italie"
                textStyle={categoryTextStyle}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            onClick={onOpen}
            sx={{
              background: "linear-gradient(135deg, #641BFB, #171FE5)",
              borderRadius: "50px",
              padding: { xs: "12px 60px", sm: "15px 90px" },
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "0 10px 25px rgba(100, 27, 251, 0.3)",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Ouvrir
          </Button>
        </Paper>
      </Box>
    </Zoom>
  );
};

const StatItem = ({ header, info, value, sub, info2, info3, textStyle }) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Typography
      sx={{
        color: "#3A3784",
        fontFamily: "'Neue Haas Grotesk Text Pro', sans-serif",
        fontSize: "14px",
        fontWeight: 800,
        textTransform: "uppercase",
        mb: 2,
      }}
    >
      {header}
    </Typography>

    <Typography sx={textStyle}>{info}</Typography>

    <Divider
      sx={{ width: "80px", my: 1.5, borderColor: "rgba(58, 55, 132, 0.15)" }}
    />

    {value && <Typography sx={textStyle}>{value}</Typography>}
    {sub && (
      <Typography sx={{ ...textStyle, fontSize: "11px" }}>{sub}</Typography>
    )}
    {info2 && <Typography sx={textStyle}>{info2}</Typography>}

    {info3 && (
      <>
        <Divider
          sx={{
            width: "80px",
            my: 1.5,
            borderColor: "rgba(58, 55, 132, 0.15)",
          }}
        />
        <Typography sx={textStyle}>{info3}</Typography>
      </>
    )}
  </Box>
);

export default LandingPage;
