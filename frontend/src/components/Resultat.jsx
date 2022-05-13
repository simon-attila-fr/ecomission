import React from "react";

function Resultat() {
  return (
    <div className="result">
      <div>
        <img src="./src/assets/voiture.png" alt="voiture" />
      </div>
      <div>
        <h2>Marque : la marque</h2>
        <h2>Modèle : modele</h2>
        <h2>Année : annee</h2>
        <h2>Carburant : carburant</h2>
      </div>
    </div>
  );
}

export default Resultat;
