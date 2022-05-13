import React, { useContext } from "react";
import userChoiceContext from "../contexts/userChoiceContext";

function Resultat() {
  const toto = useContext(userChoiceContext);
  return (
    <div className="result">
      <div>
        <img src="./src/assets/voiture.png" alt="voiture" />
        <h1>{toto}</h1>
      </div>
    </div>
  );
}

export default Resultat;
