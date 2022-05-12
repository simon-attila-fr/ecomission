import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";
import Infos from "../pages/Infos";

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Infos" element={<Infos />} />
      </Routes>
    </div>
  );
}

export default Content;
