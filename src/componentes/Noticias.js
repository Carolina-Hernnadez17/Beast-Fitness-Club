import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Noticias = () => {
  const newsItems = [
    {
      title: 'New Zumba Classes!',
      date: 'August 26, 2024',
      description: 'We are excited to announce new Zumba classes starting this September. Join us for fun and fitness!',
      image: '/img/zumba_news.jpg'
    },
    {
      title: 'Gym Renovation Complete',
      date: 'August 20, 2024',
      description: 'Our gym renovation is now complete. Enjoy the new facilities and equipment!',
      image: '/img/gym_renovation.jpg'
    },
    {
      title: 'New Personal Trainers',
      date: 'August 18, 2024',
      description: 'We have added new personal trainers to our team. Book your sessions now!',
      image: '/img/personal_trainers.jpg'
    }
  ];

  return (
    <Container className="news-container my-5">
      <h2 className="text-center mb-4">Latest News</h2>
      <Row>
        {newsItems.map((news, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="news-card">
              <Card.Img variant="top" src={news.image} alt={news.title} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{news.date}</Card.Subtitle>
                <Card.Text>{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Noticias;
