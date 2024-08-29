import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';

const Noticias = () => (
  <Container className="news-container my-5">
    <h2 className="text-center mb-4">Latest News</h2>
    <Carousel>
      <Carousel.Item>
        <Card className="news-card">
          <Card.Img variant="top" src="/img/zumba_news.jpg" alt="New Zumba Classes!" />
          <Card.Body>
            <Card.Title>New Zumba Classes!</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">August 26, 2024</Card.Subtitle>
            <Card.Text>We are excited to announce new Zumba classes starting this September. Join us for fun and fitness!</Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="news-card">
          <Card.Img variant="top" src="/img/gym_renovation.jpg" alt="Gym Renovation Complete" />
          <Card.Body>
            <Card.Title>Gym Renovation Complete</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">August 20, 2024</Card.Subtitle>
            <Card.Text>Our gym renovation is now complete. Enjoy the new facilities and equipment!</Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="news-card">
          <Card.Img variant="top" src="/img/personal_trainers.jpg" alt="New Personal Trainers" />
          <Card.Body>
            <Card.Title>New Personal Trainers</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">August 18, 2024</Card.Subtitle>
            <Card.Text>We have added new personal trainers to our team. Book your sessions now!</Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default Noticias;
