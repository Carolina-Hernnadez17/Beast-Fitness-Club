import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const GymTariffs = () => {
  return (
    <Container className="tariffs-container">
      <Row className="text-center">
        <Col>
          <h1 className="tariffs-title">Nuevas Tarifas </h1>
        </Col>
      </Row>
      <Row>
        <Col md={5} className="tariffs-col">
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Planes Adultos</Card.Header>
            <Card.Body>
              <ul>
                <li>Matrícula: <span>$10.00</span></li>
                <li>Mensual: <span>$25.00</span></li>
                <li>Trimestral: <span>$100.00</span></li>
                <li>Semestral: <span>$150.00</span></li>
                <li>Anual: <span>$300.00</span></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} className="tariffs-col">
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Planes Estudiantes</Card.Header>
            <Card.Body>
              <ul>
                <li>Matrícula: <span>$10.00</span></li>
                <li>Mensual: <span>$20.00</span></li>
                <li>Trimestral: <span>$40.00</span></li>
                <li>Semestral: <span>$60.00</span></li>
                <li>Anual: <span>$120.00</span></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p className="ticket-price">Ticket Diario: <span>$2.00</span></p>
        </Col>
      </Row>
      <Row className="gym-hours">
        <Col md={6}>
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Horario de Gimnasio (Lunes a Viernes)</Card.Header>
            <Card.Body>
              <p>05:00 a 24:00 HRS.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Horario de Gimnasio (Sábado)</Card.Header>
            <Card.Body>
              <p>05:00 a 20:00 HRS.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Personalizados Alumnos Winfit</Card.Header>
            <Card.Body>
              <ul>
                <li>8 Sesiones: <span>$64.00</span></li>
                <li>12 Sesiones: <span>$96.00</span></li>
                <li>20 Sesiones: <span>$160.00</span></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Personalizados Alumnos Externos</Card.Header>
            <Card.Body>
              <ul>
                <li>8 Sesiones: <span>$160.00</span></li>
                <li>12 Sesiones: <span>$180.00</span></li>
                <li>20 Sesiones: <span>$200.00</span></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="observations">Observaciones: Planes estudiantes 16 a 25 años con certificado de alumno regular.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default GymTariffs;
