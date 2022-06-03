import { React, useContext } from "react";
import userChoiceContext from "../contexts/userChoiceContext";
import "../assets/voiture.png";

function Resultat() {
  const { userChoice } = useContext(userChoiceContext);
  return (
    <div className="result">
      <div>
        <img src="./src/assets/voiture.png" alt="voiture" />
        <h1>{userChoice}</h1>
      </div>
    </div>
  );
}

export default Resultat;
