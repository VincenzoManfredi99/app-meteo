import { useEffect, useState } from "react";
import { Card, Spinner, Row, Col } from "react-bootstrap";

const BigCard = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey = "4581ed4a75ffef0475104ebe50dad4bb";

  useEffect(() => {
    if (city) {
      setLoading(true);
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`;

      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          if (data.cod === 200) {
            setWeather(data);
          } else {
            alert("Località non trovata!");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Errore:", err);
          setLoading(false);
        });
    }
  }, [city]);

  if (loading) return <Spinner animation="grow" variant="primary" />;
  if (!weather) return null;

  // Icona ufficiale OpenWeather
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <Card
      className="shadow-lg border-0 p-4"
      style={{ width: "100%", maxWidth: "500px", borderRadius: "20px" }}
    >
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={7}>
            <h1 className="display-4 fw-bold mb-0">
              {Math.round(weather.main.temp)}°C
            </h1>
            <h2 className="text-uppercase fs-3 mt-2">{weather.name}</h2>
            <p className="text-capitalize text-muted fs-5">
              {weather.weather[0].description}
            </p>
          </Col>
          <Col xs={5} className="text-center">
            <img src={iconUrl} alt="meteo icon" style={{ width: "120px" }} />
          </Col>
        </Row>
        <hr />
        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0 fw-bold">Umidità</p>
            <span>{weather.main.humidity}%</span>
          </Col>
          <Col>
            <p className="mb-0 fw-bold">Vento</p>
            <span>{weather.wind.speed} km/h</span>
          </Col>
          <Col>
            <p className="mb-0 fw-bold">Percepita</p>
            <span>{Math.round(weather.main.feels_like)}°C</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BigCard;
