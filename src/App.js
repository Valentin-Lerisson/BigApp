import React from "react";
import { Box, Typography, Button, Container, Divider } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f0f2f9",
        padding: 2,
      }}
    >
      {/* Importation de la police */}
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
      </style>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* TITRE - Responsive via l'objet sx */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: { xs: "28px", sm: "35px", md: "42px" },
            color: "#5D30C4",
            letterSpacing: "-1.5px",
            mb: { xs: 8, md: 12 }, // Margin-bottom responsive
            zIndex: 5,
            textAlign: "center",
          }}
        >
          Audience Insight
        </Typography>

        {/* IMAGE PNG */}
        <Box
          component="img"
          src="/groupe.png"
          alt=""
          sx={{
            position: "absolute",
            top: { xs: 40, md: 50 },
            width: { xs: "100px", sm: "140px", md: "185px" },
            zIndex: 6,
            pointerEvents: "none",
          }}
        />

        {/* LA CARTE BLANCHE (Glassmorphism) */}
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

          {/* GRILLE DES STATS */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Empilé sur mobile
              justifyContent: "space-around",
              gap: { xs: 5, md: 2 },
              mb: 6,
            }}
          >
            {/* Échantillon */}
            <StatColumn
              header="échantillon"
              info="16 mots clés"
              value="1 542 256"
              subInfo="recherches sur google"
            />

            {/* Période */}
            <StatColumn
              header="période"
              info="de novembre 2023"
              info2="à novembre 2024"
            />

            {/* Zone Géo */}
            <StatColumn
              header="zone géographique"
              info="france"
              info2="espagne"
              info3="italie"
            />
          </Box>

          {/* BOUTON MUI */}
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #641BFB, #171FE5)",
              color: "white",
              borderRadius: "50px",
              padding: "18px 110px",
              fontSize: "17px",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "0 10px 25px rgba(100, 27, 251, 0.2)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 15px 32px rgba(100, 27, 251, 0.35)",
              },
            }}
          >
            Ouvrir
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

// Petit composant interne pour éviter de répéter le code des colonnes
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
