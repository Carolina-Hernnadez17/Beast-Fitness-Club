import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';

const Noticias = () => (
  <Container className="news-container my-5">
    <h2 className="text-center acerca-de-title mb-4">Nuevas Noticias</h2>
    <Carousel>
      <Carousel.Item>
        <Card className="news-card">
          <Card.Img variant="top" src="/img/Gym.jpg" alt="New Zumba Classes!" />
          <Card.Body>
            <Card.Title>Nuevo GYM!</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Agosto 26, 2024</Card.Subtitle>
            <Card.Text>Nos complace anunciar nuevas clases de Zumba que comienzan en septiembre. ¡Únase a nosotros para divertirse y ponerse en forma!</Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="news-card">
          <Card.Img variant="top" src="/img/Rutinas-N.jpg" alt="Gym Renovation Complete" />
          <Card.Body>
            <Card.Title>Nuevas Rutinas</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Agosto 20, 2024</Card.Subtitle>
            <Card.Text>La renovación de nuestro gimnasio ya está completa. ¡Disfruta de las nuevas instalaciones y equipamiento!</Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="news-card">
          <Card.Img variant="top" src="/img/personal_trainers.jpg" alt="New Personal Trainers" />
          <Card.Body>
            <Card.Title>Nuevo personal</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Agosto 18, 2024</Card.Subtitle>
            <Card.Text>Hemos incorporado nuevos entrenadores personales a nuestro equipo. ¡Reserva ya tus sesiones!</Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default Noticias;
