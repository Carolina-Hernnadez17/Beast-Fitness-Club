import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4">
      <Container>
        <Row>
          <Col md={3} className="footer-col">
            <h5>Beast Fitness <span className="club-text">Club</span></h5>
            <p>
              Nuestra empresa es reconocida, por su compromiso para que nuestros clientes se 
              sientan cómodos y disfruten de su día a día con sus ritinas y alimentación,
               te damos la oportunidad de disfrutar cada momento con nosotros.
            </p>
            
          </Col>
          <Col md={3} className="footer-col">
            <h5>Otros Servicios</h5>
            <ul className="list-unstyled">
              <li><a href="/AcercaDe">Acerca de</a></li>
              <li><a href="/">Rutinas</a></li>
              <li><a href="/Services">Recetas</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-col">
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li><a href="/AcercaDe">Acerca de</a></li>
              <li><a href="/Services">Servicios</a></li>
              <li><a href="/Inscripcion">Inscripciones</a></li>
              <li><a href="/Contacatanos">Contactanos</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-col">
            <h5>Contáctanos</h5>
            <p>
            Beast Fitness Club Santa Ana, El Salvador <br />
              +503 2302-3456 <br />
              <a href="https://BeastFitness_Club.com">BeastFitness_Club.com</a>
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <p className="copyright">Copyright © Domain. All Rights Reserved.</p>
            <p className="designer">Designed by HTML Codex</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};



export default Footer;
