import { useState } from "react";

const MeteoSearch = ({ setCity }) => {
  const [inputVal, setInputVal] = useState("");

  const handleSearch = () => {
    if (inputVal.trim() !== "") {
      setCity(inputVal);
    }
  };

  return (
    <div className="d-flex justify-content-center my-3">
      <button
        className="rounded-start-3 px-4 btn btn-dark"
        onClick={handleSearch}
      >
        <i className="bi bi-search"></i>
      </button>
      <input
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        type="text"
        placeholder="Inserisci una città..."
        className="py-2 px-4 fs-3 border shadow-sm"
        style={{ outline: "none" }}
      />
    </div>
  );
};

export default MeteoSearch;
