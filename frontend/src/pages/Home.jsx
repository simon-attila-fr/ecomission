import axios from "axios";
import { useEffect, useState } from "react";
import "../components/styles/Home.css";

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
      <select name="" id="">
        {marques.map((marque) => (
          <option>{marque}</option>
        ))}
      </select>
    </div>
  );
}
