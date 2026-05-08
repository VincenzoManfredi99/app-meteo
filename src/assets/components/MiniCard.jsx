import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const MiniCard = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const apiKey = "4581ed4a75ffef0475104ebe50dad4bb";

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error("Error API:", err));
  }, []);

  if (!weather) return null;

  return (
    <Card className="p-3 text-center shadow-sm" style={{ width: "200px" }}>
      <Card.Title className="mb-0">{weather.name}</Card.Title>
      <Card.Body className="p-1">
        <h3 className="fw-bold mb-0">{Math.round(weather.main.temp)}°C</h3>
        <small className="text-muted text-capitalize">
          {weather.weather[0].description}
        </small>
      </Card.Body>
    </Card>
  );
};

export default MiniCard;
