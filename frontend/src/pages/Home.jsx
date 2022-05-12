import axios from "axios";
import { useEffect, useState } from "react";
import "../components/styles/Home.css";
import NavBar from "@components/NavBar";

export default function Home() {
  const url =
    "https://public.opendatasoft.com/api/records/1.0/search/?dataset=vehicules-commercialises&q=&rows=5000&sort=puissance_maximale&facet=marque&facet=modele_utac&facet=carburant&facet=annee&facet=carrosserie";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url).then((resp) => setData(resp.data.records));
  }, []);

  const arr = data.map((e) => e.fields.marque);
  const marques = [...new Set(arr)];

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
          <select name="" id="">
        {marques.map((marque) => (
          <option>{marque}</option>
        ))}
      </select>
        <button type="submit" className="recherchemodel">
          rechrcher
        </button>
      </div>
    </div>
  );
}
