import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageResult from "../pages/PageResult";
import Infos from "../pages/Infos";

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Infos" element={<Infos />} />
        <Route path="/Resultat" element={<PageResult />} />
      </Routes>
    </div>
  );
}

export default Content;
