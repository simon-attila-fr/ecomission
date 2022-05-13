import React from "react";
import "../components/styles/Infos.css";
import NavBar from "../components/NavBar";

export default function Infos() {
  return (
    <>
      <div className="infos">
        <NavBar home="Acceuil" infos="Infos" />
        <h1 className="infos-title1">Infos</h1>
      </div>
      <div className="infosDescriptionProject">
        <h2 className="infos-title2">Informations sur le projet</h2>
        <article className="infos-p">
          <p className="infos-p1">
            Vous retrouvez ci dessous tous les liens qui nous ont permis
            d’aboutir à ce projet qui vise à faire prendre conscience de
            l’impact de notre choix de locomotion sur l’environnement tout en
            étant dans un esprit fun et sans prise de tête.
          </p>
          <p className="infos-p2">
            Ce projet n’aurait pas pu naitre sans la participation de Rodrigue
            Techer, Attila Simon, Jean Lamarre Alfred et Kevin Fampou.
          </p>
        </article>
      </div>
      <div className="infosSources">
        <ul className="infos-source">
          <li className="infos-links">
            <a
              className="infos-link"
              href="https://public.opendatasoft.com/explore/dataset/vehicules-commercialises/api/?flg=fr&timezone=&sort=puissance_maximale&rows=1000"
            >
              Open data soft
            </a>
          </li>
          <li className="infos-links">
            <a
              className="infos-link"
              href="https://datagir.ademe.fr/apps/mon-impact-transport/"
            >
              Mon Impact Transport
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
