import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      {/* Importation de la police propre */}
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
      </style>

      <div className="content-wrapper">
        <h1 className="main-title">Audience Insight</h1>

        {/* L'image flottante */}
        <img src="/groupe.png" className="png-overlay" alt="" />

        <div className="glass-card">
          <p className="select-version">Sélectionnez une version du projet</p>
          <h2 className="study-title">Étude InterBio</h2>

          <div className="stats-grid">
            {/* Colonne 1 */}
            <div className="stat-column">
              <h4 className="stat-header">Échantillon</h4>
              <p className="stat-info">16 mots clés</p>
              <div className="separator"></div>
              <p className="stat-value">1 542 256</p>
              <p className="stat-sub-info">Recherches sur Google</p>
            </div>

            {/* Colonne 2 */}
            <div className="stat-column">
              <h4 className="stat-header">Période</h4>
              <p className="stat-info">De Novembre 2023</p>
              <div className="separator"></div>
              <p className="stat-info">À Novembre 2024</p>
            </div>

            {/* Colonne 3 */}
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
