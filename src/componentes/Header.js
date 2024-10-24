import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Asegúrate de que esto esté instalado

const Header = ({ isLoggedIn, setIsLoggedIn, userEmail }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowModal(false);
    localStorage.removeItem('userId'); // Si guardaste el userId en localStorage
    sessionStorage.removeItem('userId'); // O sessionStorage si es el caso
    window.location.href = '/login'; // Redirige al login
  };

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
            <NavLink to="/Contactanos" className="header-link nav-link">Contáctanos</NavLink>

            {isLoggedIn ? (
              <>
                <Button variant="link" onClick={() => setShowModal(true)} className="nav-link">
                  <FaUser className="user-icon" style={{ fontSize: '24px' }} /> {/* Ícono de usuario más grande */}
                </Button>
              </>
            ) : (
              <Button className="login-button" href="/Login">Login</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Modal para el usuario */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{userEmail}</Modal.Title> {/* Muestra el correo del usuario en el título */}
        </Modal.Header>
        <Modal.Body>
          {/* Aquí puedes agregar cualquier otro detalle si lo deseas */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogout}>Cerrar Sesión</Button>
          <Button variant="primary" as={NavLink} to="/">Ir a Inicio</Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default Header;

