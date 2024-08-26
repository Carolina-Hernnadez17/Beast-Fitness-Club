import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const GymTariffs = () => {
  return (
    <Container className="tariffs-container">
      <Row className="text-center">
        <Col>
          <h1 className="tariffs-title">Nuevas Tarifas Gimnasio 2023</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="tariffs-col">
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Planes Adultos</Card.Header>
            <Card.Body>
              <ul>
                <li>Matrícula: <span>$25.000</span></li>
                <li>Mensual: <span>$58.000</span></li>
                <li>Mensual Séniors: <span>$35.000</span></li>
                <li>Trimestral: <span>$130.000</span></li>
                <li>Semestral: <span>$230.000</span></li>
                <li>Anual: <span>$430.000</span></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="tariffs-col">
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Planes Estudiantes</Card.Header>
            <Card.Body>
              <ul>
                <li>Matrícula: <span>$15.000</span></li>
                <li>Mensual: <span>$42.000</span></li>
                <li>Mensual Valle: <span>$32.000</span></li>
                <li>Trimestral: <span>$110.000</span></li>
                <li>Semestral: <span>$200.000</span></li>
                <li>Anual: <span>$350.000</span></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p className="ticket-price">Ticket Diario: <span>$7.000</span></p>
        </Col>
      </Row>
      <Row className="gym-hours">
        <Col md={6}>
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Horario de Gimnasio (Lunes a Viernes)</Card.Header>
            <Card.Body>
              <p>07:00 a 13:00 HRS.</p>
              <p>16:00 a 22:00 HRS.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Horario de Gimnasio (Sábado)</Card.Header>
            <Card.Body>
              <p>09:00 a 14:00 HRS.</p>
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
                <li>8 Sesiones: <span>$90.000</span></li>
                <li>12 Sesiones: <span>$120.000</span></li>
                <li>20 Sesiones: <span>$180.000</span></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="tariff-card">
            <Card.Header className="tariff-header">Personalizados Alumnos Externos</Card.Header>
            <Card.Body>
              <ul>
                <li>8 Sesiones: <span>$170.000</span></li>
                <li>12 Sesiones: <span>$200.000</span></li>
                <li>20 Sesiones: <span>$250.000</span></li>
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
