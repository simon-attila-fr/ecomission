import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/1.png";
import "../assets/2.png";
import "../assets/3.png";
import "../assets/4.png";
import "../assets/5.png";
import "../assets/6.png";
import "../assets/7.png";
import "../assets/8.png";
import "../assets/9.png";
import "../assets/10.png";
import "../assets/11.png";
import "../assets/12.png";
import "../assets/13.png";
import "../assets/14.png";
import "../assets/15.png";
import "../assets/16.png";
import "../assets/21.png";
import "../assets/autobus.png";
import "../assets/velo-electrique.png";

export default function BilanCarboneParKm() {
  const [nbKilometres, setNbKilometres] = useState(10);
  const [donneesCarbone, setDonneesCarbone] = useState([]);

  const getData = () => {
    axios
      .get(
        `https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?km=${nbKilometres}`
      )
      .then((res) => setDonneesCarbone(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const updateBilanCarbonne = (e) => {
    setNbKilometres(e.target.value);
    getData();
  };

  return (
    <>
      <div className="div-km">
        <p>KM</p>
        <input
          type="range"
          min="0"
          max="1000"
          value={nbKilometres}
          step="10"
          onChange={(e) => updateBilanCarbonne(e)}
        />
        <p className="parag-kilometre">{nbKilometres} kms</p>
      </div>

      <div className="div-bilan-carbone">
        {donneesCarbone.map((donnee) => {
          return (
            <div>
              <img
                src={`./src/assets/${donnee.id}.png`}
                alt="mode de transport"
              />
              <p className="text" key={donnee.id}>
                {donnee.emissions.gco2e.toFixed(2)} g de C02
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
