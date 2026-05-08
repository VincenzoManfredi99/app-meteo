import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MeteoNavbar from "./assets/components/MeteoNavbar";

import MiniCardList from "./assets/components/MiniCardList";
import MeteoHome from "./assets/components/MeteoHome";

function App() {
  return (
    <>
      <MeteoNavbar />
      <MiniCardList />
      <MeteoHome />
    </>
  );
}

export default App;
