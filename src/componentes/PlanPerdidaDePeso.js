import React from 'react';
import logo from '../logo1.jpeg'; 
import { Container, Row, Col, Card } from 'react-bootstrap';

const PlanDePerdidaDePeso = () => {
  return (
    <>
      
      <Container className="plan-container py-5">
        <h2 className="text-center section-title mb-4">Plan de Pérdida de Peso</h2>
        <Row className="mb-5 justify-content-center">
        <Col md={12} className="text-center">
          <img src={logo} className="img-fluid mb-3" alt="logo" style={{ maxWidth: '100%', width: '550px' }} />
        </Col>
      </Row>
        
        <Row className="mb-4">
          <Col md={12} lg={6}>
            <Card className="plan-card">
              <Card.Body>
                <Card.Title className="plan-card-title">Objetivo de Pérdida de Peso</Card.Title>
                <Card.Text>
                  Nuestro objetivo es ayudarte a perder peso de manera saludable y sostenible. Este plan está diseñado para ayudarte a alcanzar tus metas de pérdida de peso con una combinación de una dieta equilibrada y una rutina de ejercicios efectiva.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card className="plan-card">
              <Card.Body>
                <Card.Title className="plan-card-title">Plan de Comidas</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Desayuno: Avena con frutas y nueces.</li>
                    <li>Almuerzo: Ensalada de pollo con vegetales.</li>
                    <li>Cena: Pescado a la parrilla con espárragos.</li>
                    <li>Meriendas: Yogur griego y frutas.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mb-4">
          <Col md={12}>
            <Card className="plan-card">
              <Card.Body>
                <Card.Title className="plan-card-title">Rutina de Ejercicios</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Lunes, Miércoles y Viernes: Cardio (30 minutos de trote o ciclismo).</li>
                    <li>Martes y Jueves: Entrenamiento de fuerza (pesas y ejercicios de resistencia).</li>
                    <li>Fin de Semana: Actividades ligeras como caminar o yoga.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row>
          <Col md={12}>
            <Card className="plan-card">
              <Card.Body>
                <Card.Title className="plan-card-title">Consejos</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Bebe al menos 8 vasos de agua al día.</li>
                    <li>Duerme entre 7 y 9 horas cada noche.</li>
                    <li>Evita los alimentos procesados y ricos en azúcares.</li>
                    <li>Consulta con un especialista antes de comenzar cualquier plan de pérdida de peso.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlanDePerdidaDePeso;
