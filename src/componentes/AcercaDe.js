import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import logo from '../logo1_nobg.png'; 


const clases = [
  
  { nombre: 'Aerobicos', imagen: "/img/Aerobicos.jpg" },
  { nombre: 'Pilates', imagen: "/img/Pilates_2.jpg" },
  { nombre: 'Crossfit', imagen: "/img/Crossfit_2.jpg" },
  { nombre: 'Spinning', imagen: "/img/Spining_1.jpg" },
];

const AcercaDe = () => {
  return (
    <Container className="acerca-de-container py-5">
      <div className="acerca-de-content">
        <Row className="mb-1 align-items-center">
          <Col md={6} className="d-flex justify-content-center">
            <img src={logo} alt="Beast Fitness Club" className="acerca-de-logo img-fluid" />
          </Col>
          <Col md={6} className="acerca-de-intro">
            <h2 className="acerca-de-title">La Historia de Beast Fitness Club</h2>
            <p className="acerca-de-text">
              Beast Fitness Club nació con una misión clara: transformar la manera en que las personas se acercan al fitness. Fundado en 2020 por un equipo de entusiastas del ejercicio y expertos en bienestar, nuestro objetivo es proporcionar una plataforma integral que apoye a nuestros miembros en cada etapa de su viaje de salud.
            </p>
            <p className="acerca-de-text">
              En un mundo donde las opciones de fitness pueden ser abrumadoras y a menudo impersonales, Beast Fitness Club se destacó por su enfoque personalizado. Cada miembro recibe atención individualizada, rutinas adaptadas a sus metas y un apoyo constante para mantener la motivación y el progreso.
            </p>
            <Button className="acerca-de-button" href="/Contactanos">Contáctanos</Button>
          </Col>
        </Row>
        <Row className="acerca-de-section py-5">
          <Col md={12} className="text-center">
            <h3 className="acerca-de-subtitle">Nuestra Misión y Valores</h3>
          </Col>
          <Col md={12} className="acerca-de-values-content d-flex justify-content-around flex-wrap mt-4">
            <div className="acerca-de-values-item p-3 m-2">
              <h4 className="acerca-de-values-title">Personalización</h4>
              <p className="acerca-de-values-text">
                Cada plan de entrenamiento es único y adaptado a las necesidades individuales.
              </p>
            </div>
            <div className="acerca-de-values-item p-3 m-2">
              <h4 className="acerca-de-values-title">Comunicación</h4>
              <p className="acerca-de-values-text">
                Fomentamos un diálogo abierto para asegurar que nuestros miembros se sientan escuchados y apoyados.
              </p>
            </div>
            <div className="acerca-de-values-item p-3 m-2">
              <h4 className="acerca-de-values-title">Innovación</h4>
              <p className="acerca-de-values-text">
                Estamos en constante evolución, incorporando las últimas tendencias y técnicas de fitness para ofrecer lo mejor a nuestros miembros.
              </p>
            </div>
            <div className="acerca-de-values-item p-3 m-2">
              <h4 className="acerca-de-values-title">Comunidad</h4>
              <p className="acerca-de-values-text">
                Creemos en el poder de una comunidad fuerte y solidaria que celebra juntos cada logro.
              </p>
            </div>
          </Col>
        </Row>
        <section>
            <h2 className="text-center clases-title">Lo que ofrecemos</h2>
            <Row className="justify-content-center mt-4">
              {clases.map((clase, index) => (
                <Col key={index} md={3} lg={3} className="mb-4 d-flex align-items-stretch">
                  <Card className="clase-card">
                    <div className="clase-imagen-wrapper">
                      <Card.Img variant="top" src={clase.imagen} className="clase-imagen" />
                      <div className="clase-overlay">
                        <Card.Title className="clase-nombre">{clase.nombre}</Card.Title>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <Col md={12} className="text-center mt-4">
              <p className="acerca-de-text">
                Nuestro equipo está comprometido en hacer de Beast Fitness Club el lugar perfecto para alcanzar tus metas de fitness. Únete a nosotros y sé parte de una comunidad dedicada al bienestar y la salud.
              </p>
            </Col>
          </section>
          
        
      </div>
    </Container>
  );
};

export default AcercaDe;