import { Container, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router";

const MeteoNavbar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            Meteo
          </Navbar.Brand>
          <NavDropdown
            title="Regioni"
            id="basic-nav-dropdown"
            className="text-white fs-3 fw-bold"
          >
            <NavDropdown.Item as={Link} to="nord">
              Nord
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="centro">
              Centro
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="sud">
              Sud
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default MeteoNavbar;
