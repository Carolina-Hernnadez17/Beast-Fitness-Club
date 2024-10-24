import React from 'react';
import { Container, Row, Col, Button, Form, Accordion } from 'react-bootstrap';
import FormularioContacto from './FormularioContacto'; 
import logo from '../logo1_nobg.png'; 

const Contactanos = () => {
  return (
    <Container className="contactanos-container py-5">
      <Row className="mb-4 align-items-center">
        <Col md={6} className="d-flex justify-content-center">
          <img src={logo} alt="Beast Fitness Club" className="contactanos-logo img-fluid" />
        </Col>
        <Col md={6} className="contactanos-intro text-center">
          <h2 className="contactanos-title">¡Contáctanos!</h2>
          <p className="contactanos-text">
            ¿Tienes alguna pregunta o deseas obtener más información? Estamos aquí para ayudarte en cada paso de tu viaje de fitness.
          </p>
        </Col>
      </Row>
      <Row className="contactanos-info-section py-5">
        <Col md={12} className="text-center">
          <h3 className="contactanos-subtitle">Información de Contacto</h3>
          <div className="contactanos-info-text">
            <p>Dirección: Beast Fitness Club Santa Ana, El Salvador</p>
            <p>Teléfono: +503 2302-3456</p>
            <p>Email: contacto@beastfitnessclub.com</p>
          </div>
        </Col>
      </Row>
      <h3 className="contactanos-subtitle text-center">Ubicación</h3>
      <Row className="contactanos-map-section py-5">
          <Col md={12} className="d-flex justify-content-center">
            <div className="contactanos-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.150234504668!2d-121.90133868447382!3d37.33568897984265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc65a1a1a1a1%3A0x4aabdc5c2b88bbf!2sBeast%20Fitness%20Club!5e0!3m2!1ses!2sus!4v1617263387697!5m2!1ses!2sus"
                width="100%"
                height="450"  
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Mapa de ubicación de Beast Fitness Club"
              ></iframe>
            </div>
          </Col>
      </Row>

      <div className="formulario">
        <FormularioContacto />
      </div>

      <Row className="contactanos-faq-section py-5">
        <Col md={12}>
          <h3 className="contactanos-subtitle text-center">Preguntas Frecuentes</h3>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Cómo me inscribo en las clases?</Accordion.Header>
              <Accordion.Body>
                Puedes inscribirte a nuestras clases a través de nuestro sitio web o visitando nuestra sede. También ofrecemos inscripciones en línea para tu comodidad.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Ofrecen clases para principiantes?</Accordion.Header>
              <Accordion.Body>
                Sí, ofrecemos clases adaptadas a todos los niveles, desde principiantes hasta avanzados. Nuestro equipo estará encantado de ayudarte a encontrar la clase adecuada para ti.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Cuáles son los horarios de las clases?</Accordion.Header>
              <Accordion.Body>
                Nuestros horarios de clases varían según el tipo de actividad y el día de la semana. Puedes consultar el horario completo en nuestra página web o llamarnos para obtener más información.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row className="contactanos-testimonials-section py-5">
        <Col md={12}>
          <h3 className="contactanos-subtitle text-center">Testimonios</h3>
          <div className="contactanos-testimonials">
            <div className="contactanos-testimonial">
              <p>"¡El mejor gimnasio que he visitado! Los entrenadores son muy profesionales y las instalaciones están siempre limpias y bien equipadas."</p>
              <p className="contactanos-testimonial-author">- Juan Pérez</p>
            </div>
            <div className="contactanos-testimonial">
              <p>"Me encanta la variedad de clases y la atención personalizada que recibo. Me siento muy motivado para alcanzar mis metas."</p>
              <p className="contactanos-testimonial-author">- María López</p>
            </div>
            <div className="contactanos-testimonial">
              <p>"Una experiencia increíble. La comunidad es muy amigable y el ambiente es perfecto para entrenar."</p>
              <p className="contactanos-testimonial-author">- Carlos Gómez</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactanos;
