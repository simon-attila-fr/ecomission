/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable prettier/prettier */
import axios from "axios";
import { useEffect, useState } from "react";
import "../components/styles/Home.css";
import { Link } from "react-router-dom";
import userChoiceContext from "../contexts/userChoiceContext";
import NavBar from "../components/NavBar";

export default function Home() {
  const [data, setData] = useState([]);
  const [marqueValue, setMarqueValue] = useState("");
  const [ObjectMarques, setObjectMarques] = useState([]);
  const [userChoice, setUserChoice] = useState("");
  const url =
    "https://public.opendatasoft.com/api/records/1.0/search/?dataset=vehicules-commercialises&q=&rows=5000&sort=puissance_maximale&facet=marque&facet=modele_utac&facet=carburant&facet=annee&facet=carrosserie";
  const url2 = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=vehicules-commercialises&q=&rows=5000&sort=puissance_maximale&facet=marque&facet=modele_utac&facet=carburant&facet=annee&facet=carrosserie&refine.marque=${marqueValue}`;

  useEffect(() => {
    axios.get(url).then((resp) => setData(resp.data.records));
  }, []);

  useEffect(() => {
    axios.get(url2).then((resp) => setObjectMarques(resp.data.records));
  }, [marqueValue]);

  function getCarType(e) {
    setUserChoice(e.target.value);
  }

  const arr = data.map((e) => e.fields.marque);
  const marques = [...new Set(arr)];
  return (
    <userChoiceContext.Provider value={{ userChoice }}>
      <div>
        <NavBar home="Acceuil" infos="Infos" />
        <div className="home">
          <h1 className="slogan">
            Limter les émissions est une mission possible
          </h1>
          <div className="paragraph">
            <p>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout.
            </p>
          </div>
          <div className="select">
            <select
              onChange={(e) => setMarqueValue(e.target.value)}
              name=""
              id=""
            >
              <option value="">MARQUES</option>
              {marques.map((marque) => (
                <option>{marque}</option>
              ))}
            </select>
            <select onChange={getCarType} name="" id="">
              <option value="">MODELES</option>
              {ObjectMarques.map((modele) => (
                <option>
                  {modele.fields.hybride === undefined ||
                  modele.fields.carrosserie === undefined
                    ? `${modele.fields.modele_utac} ${modele.fields.annee} ${modele.fields.carburant}`
                    : `${modele.fields.modele_utac} ${modele.fields.carrosserie} ${modele.fields.annee} ${modele.fields.carburant} ${modele.fields.hybride} ${modele.fields.type_variante_version_tvv}  `}
                </option>
              ))}
            </select>
          </div>
          <Link to="/Resultat">
            <button type="button" className="recherchemodel">
              rechercher
            </button>
          </Link>
        </div>
      </div>
    </userChoiceContext.Provider>
  );
}
