import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BeastFitnessClub from './BeastFitnessClub'; 
import VideoGallery from './VideoGallery'; 
import FormularioContacto from './FormularioContacto'; 
import logo from '../logo1.jpeg'; 

const Home = () => {
  return (
    <>
      <Row className="mb-5 justify-content-center">
        <Col md={12} className="text-center">
          <img src={logo} className="App-logo img-fluid mb-3" alt="logo" style={{ width: '550px' }} />
          <BeastFitnessClub />
          <VideoGallery />
        </Col>
      </Row>
      <Container className="home-page-container py-5">
        <Row className="mb-5">
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2 className="home-page-title">Planificación de Rutinas</h2>
              <p className="home-page-text">Desarrolla una rutina de ejercicios personalizada para alcanzar tus objetivos de fitness. ¡Mantente motivado y en forma!</p>
              <Button className="home-page-button" href="/workout-planner">Comenzar</Button>
            </div>
          </Col>
          <Col md={6}>
            <img src="/img/rutinas.jpg" alt="Planificación de Rutinas" className="home-page-img img-fluid" />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={6} className="order-md-2 d-flex align-items-center">
            <div>
              <h2 className="home-page-title">Seguimiento de Progreso</h2>
              <p className="home-page-text">Registra tu progreso y celebra tus logros a medida que avanzas en tu camino hacia una vida más saludable.</p>
              <Button className="home-page-button" href="/progress-tracking">Ver Progreso</Button>
            </div>
          </Col>
          <Col md={6} className="order-md-1">
            <img src="/img/seguimineto.png" alt="Seguimiento de Progreso" className="home-page-img img-fluid" />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2 className="home-page-title">Sugerencias Personalizadas</h2>
              <p className="home-page-text">Recibe recomendaciones personalizadas para mejorar tu rutina de ejercicios y dieta basada en tus metas y preferencias.</p>
              <Button className="home-page-button" href="/personalized-suggestions">Descubrir Más</Button>
            </div>
          </Col>
          <Col md={6}>
            <img src="/img/sugerencias.jpg" alt="Sugerencias Personalizadas" className="home-page-img img-fluid" />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={6} className="order-md-2 d-flex align-items-center">
            <div>
              <h2 className="home-page-title">Comunidad</h2>
              <p className="home-page-text">Únete a nuestra comunidad para compartir tus logros, recibir apoyo y conectarte con otros entusiastas del fitness.</p>
              <Button className="home-page-button" href="/community">Unirse</Button>
            </div>
          </Col>
          <Col md={6} className="order-md-1">
            <img src="/img/comunidad.jpg" alt="Comunidad" className="home-page-img img-fluid" />
          </Col>
        </Row>
      </Container>
      <div className="formulario">
        <FormularioContacto />
      </div>
    </>
  );
};

export default Home;