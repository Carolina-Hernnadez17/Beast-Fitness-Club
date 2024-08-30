import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-name">
          Beast Fitness <span className="club-text">Club</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" className="header-link nav-link">Inicio</NavLink>
            <NavLink to="/AcercaDe" className="header-link nav-link">Acerca de</NavLink>
            <NavLink to="/Services" className="header-link nav-link">Servicios</NavLink>
            <NavLink to="/Inscripcion" className="header-link nav-link">Inscripción</NavLink>
            <NavLink to="/Contacatanos" className="header-link nav-link">Contáctanos</NavLink>
            <Button className="login-button" href="/Login">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
