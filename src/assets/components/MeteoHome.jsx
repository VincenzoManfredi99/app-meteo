import { useState } from "react";
import MeteoSearch from "./MeteoSearchBar";
import BigCard from "./BigCard";

const MeteoHome = () => {
  const [cittaCercata, setCittaCercata] = useState("");

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">Previsioni Meteo</h1>

      {/* La search bar aggiorna lo stato comune */}
      <MeteoSearch setCity={setCittaCercata} />

      <div className="d-flex justify-content-center mt-5">
        {/* La BigCard reagisce al cambiamento di cittaCercata */}
        {cittaCercata && <BigCard city={cittaCercata} />}
      </div>
    </div>
  );
};

export default MeteoHome;
