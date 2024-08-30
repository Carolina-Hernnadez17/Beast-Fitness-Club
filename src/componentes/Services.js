import React from 'react';
import logo from '../logo1_nobg.png'; 
import { Link } from 'react-router-dom';
import {  Card, Container, Row, Col, Button } from 'react-bootstrap';
import Statistic from './Statistic';
import Noticias from './Noticias';


function Services() {
  return (
    <Container className="services-container">
      <img src={logo} alt="Beast Fitness Club" className="acerca-de-logo img-fluid" />
      <h2 className="text-center my-1 color-text">Nuestros Servicios</h2>

      
      <section className="service-section">
        <h3 className="text-center my-4 color-text">Rutinas de Ejercicio</h3>
        <Row>
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src="/img/cardio_1.jpg" />
              <Card.Body>
                <Card.Title>Cardio Intensivo</Card.Title>
                <Card.Text>
                  Mejora tu resistencia cardiovascular con nuestras rutinas personalizadas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src="/img/Fuerza_1.jpg" />
              <Card.Body>
                <Card.Title>Entrenamiento de Fuerza</Card.Title>
                <Card.Text>
                  Aumenta tu fuerza muscular con programas diseñados por expertos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src="/img/Yoga_1.jpg" />
              <Card.Body>
                <Card.Title>Yoga y Flexibilidad</Card.Title>
                <Card.Text>
                  Encuentra el equilibrio perfecto entre cuerpo y mente con nuestras clases de yoga.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      
      <section className="service-section acerca-de-content">
        <h3 className="text-center my-4 color-text">Estadísticas de Resultados</h3>
        <Row>
          <Col md={6} className="text-center">
            <Statistic end={85} text="de nuestros miembros han alcanzado sus objetivos de fitness." />
          </Col>
          <Col md={6} className="text-center">
            <Statistic end={95} text="recomendarían nuestros servicios a un amigo." />
          </Col>
        </Row>
      </section>

      
      <section className="service-section classes-section">
        <h3 className="text-center m-5 color-text">Clases Disponibles</h3>
        <Row>
          <Col md={3}>
            <Link to="/Zumba">
              <div className="class-card">
                <div className="class-title">Zumba</div>
                <img src="/img/Zumba_1.jpg" alt="Clase Zumba" className="class-img" />
              </div>
            </Link>
          </Col>
          <Col md={3}>
            <Link to="/Pilates">
              <div className="class-card">
                <img src="/img/Pilates_1.jpg" alt="Clase 2" className="class-img" />
                <div className="class-title">Pilates</div>
              </div>
            </Link>
          </Col>
          <Col md={3}>
            <Link to="/Crossfit">
              <div className="class-card">
                <img src="/img/Crossfit_1.jpg" alt="Clase 3" className="class-img" />
                <div className="class-title">Crossfit</div>
              </div>
            </Link>
          </Col>
          <Col md={3}>
            <Link to= "/Spinning">
              <div className="class-card">
                <img src="/img/Spining_1.jpg" alt="Clase 4" className="class-img" />
                <div className="class-title">Spinning</div>
              </div>
            </Link>
          </Col>
        </Row>
      </section>

      
      <section className="service-section">
        <h3 className="text-center my-5 color-text">Planes de Alimentación</h3>
        <Row>
          <Col md={6}>
            <Card className="service-card">
              <Card.Img variant="top" src="/img/Resetas_1.jpg" />
              <Card.Body>
                <Card.Title className='color-text'>Plan de Pérdida de Peso</Card.Title>
                <Card.Text >
                  Alcance sus objetivos de pérdida de peso con una dieta equilibrada.
                </Card.Text>
                <Button className="acerca-de-button" href="/PlanDePerdidaDePeso">Vamos</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="service-card">
              <Card.Img variant="top" src="/img/Resetas_2.jpg" />
              <Card.Body>
                <Card.Title className='color-text'>Nutrición Deportiva</Card.Title>
                <Card.Text>
                  Maximiza tu rendimiento con una alimentación adecuada para deportistas.
                </Card.Text>
                <Button className="acerca-de-button" href="/PlanDePerdidaDePeso">Vamos</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section>
        <Noticias/>
      </section>

    </Container>
  );
}

export default Services;
