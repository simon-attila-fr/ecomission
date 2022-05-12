import React from "react";
import "../components/styles/Home.css";
import NavBar from "@components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar home="Acceuil" infos="Infos" />
      <div className="home">
        <h1 className="slogan">
          Limter les émissions est une mission possible
        </h1>
        <p>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using Content here,
          content here, making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text
        </p>
        <button type="submit" className="recherchemodel">
          rechrcher
        </button>
      </div>
    </div>
  );
}
