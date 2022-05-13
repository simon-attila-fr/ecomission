import "../components/styles/Result.css";
import "../components/styles/BilanCarbonne.css";
import Resultat from "../components/Resultat";
import NavBar from "../components/NavBar";
import BilanCarboneParKm from "../components/BilanCarboneParKm";

function PageResult() {
  return (
    <div>
      <NavBar home="Acceuil" infos="infos" />
      <div className="resultsBody">
        <h1>Results</h1>
        <Resultat />
        <BilanCarboneParKm />
      </div>
    </div>
  );
}

export default PageResult;
