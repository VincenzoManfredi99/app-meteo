import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MeteoNavbar from "./assets/components/MeteoNavbar";

import MiniCardList from "./assets/components/MiniCardList";
import MeteoHome from "./assets/components/MeteoHome";
import RegioniNord from "./assets/components/NordMeteo";
import RegioniSud from "./assets/components/NordSud";
import RegioniCentro from "./assets/components/CentroMeteo";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <MeteoNavbar />
        <div className="m-5">
          <Routes>
            <Route path="/" element={<MiniCardList />} />
            <Route path="/nord" element={<RegioniNord />} />
            <Route path="/sud" element={<RegioniSud />} />
            <Route path="/centro" element={<RegioniCentro />} />
          </Routes>
        </div>
      </BrowserRouter>
      <MeteoHome />
    </>
  );
}

export default App;
