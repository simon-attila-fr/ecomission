import React from "react";
import "../components/styles/Result.css";
import Resultat from "../components/Resultat";
import NavBar from "../components/NavBar";

export default function PageResult() {
  return (
    <div>
      <NavBar home="Acceuil" infos="infos" />
      <h1>Results</h1>
      return <Resultat />;
    </div>
  );
}
