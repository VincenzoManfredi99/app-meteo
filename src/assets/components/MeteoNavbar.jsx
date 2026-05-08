import { Container, Navbar, NavDropdown } from "react-bootstrap";

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
            <NavDropdown.Item href="#action/3.1">Nord</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Centro</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sud</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default MeteoNavbar;
