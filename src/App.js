import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
        </style>
        {/* Titre au-dessus de la div - Très gras */}
        <h1 className="main-title">
          <strong>Audience Insight</strong>
        </h1>

        {/* Appel direct du PNG depuis le dossier public */}
        <img src="/groupe.png" className="png-overlay" alt="" />

        {/* La Div (Carte) */}
        <div className="glass-card">
          <p className="select-version">Sélectionnez une version du projet</p>
          <h2 className="study-title">Étude InterBio</h2>

          <div className="stats-grid">
            {/* Échantillon */}
            <div className="stat-column">
              <h4 className="stat-header">Échantillon</h4>
              <p className="stat-info">16 mots clés</p>
              <div className="separator"></div>
              <p className="stat-info">
                <strong>1 542 256</strong>
                <br />
                Recherches sur Google
              </p>
            </div>

            {/* Période */}
            <div className="stat-column">
              <h4 className="stat-header">Période</h4>
              <p className="stat-info">De Novembre 2023</p>
              <div className="separator"></div>
              <p className="stat-info">À Novembre 2024</p>
            </div>

            {/* Zone Géo */}
            <div className="stat-column">
              <h4 className="stat-header">Zone géographique</h4>
              <p className="stat-info">France</p>
              <div className="separator"></div>
              <p className="stat-info">Espagne</p>
              <div className="separator"></div>
              <p className="stat-info">Italie</p>
            </div>
          </div>

          <button className="btn-open">Ouvrir</button>
        </div>
      </div>
    </div>
  );
}

export default App;
