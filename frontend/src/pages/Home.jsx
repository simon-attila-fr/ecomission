import React from "react";
import "../components/styles/Home.css";
import NavBar from "@components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar home="Acceuil" infos="Infos" />
      <h1>Home</h1>
    </div>
  );
}
