import React from 'react';
import logo from '../logo1.jpeg'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const NutricionDeportiva = () => {
  return (
    <>
      
      <Container className="nutricion-container py-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Nutrición Deportiva</h2>
            <p className="section-subtitle">Optimiza tu rendimiento con una alimentación adecuada</p>
          </Col>
        </Row>
        <Row className="mb-5 justify-content-center">
          <Col md={12} className="text-center">
            <img src={logo} className="img-fluid mb-3" alt="logo" style={{ maxWidth: '100%', width: '550px' }} />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12} lg={6}>
            <Card className="nutricion-card">
              <Card.Body>
                <Card.Title className="card-title">Beneficios</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Mejora la energía y resistencia.</li>
                    <li>Optimiza la recuperación muscular.</li>
                    <li>Ayuda a mantener un peso saludable.</li>
                    <li>Incrementa el rendimiento en entrenamientos.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card className="nutricion-card">
              <Card.Body>
                <Card.Title className="card-title">Recomendaciones</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Incluye proteínas magras en cada comida.</li>
                    <li>Consume carbohidratos complejos antes de entrenar.</li>
                    <li>Hidrátate adecuadamente antes, durante y después del ejercicio.</li>
                    <li>Opta por grasas saludables como aguacate y nueces.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Card className="nutricion-card">
              <Card.Body>
                <Card.Title className="card-title">Plan de Comidas</Card.Title>
                <Card.Text>
                  <ul>
                    <li><strong>Desayuno:</strong> Smoothie de proteínas con frutas y avena.</li>
                    <li><strong>Almuerzo:</strong> Ensalada de quinua con pollo y vegetales.</li>
                    <li><strong>Cena:</strong> Salmón a la parrilla con espárragos y batata.</li>
                    <li><strong>Meriendas:</strong> Yogur griego con frutas o nueces.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <a href="https://www.ergodinamica.com/blog/nutricion-deportiva-mejora-rendimiento-recuperacion/#:~:text=%C2%BFQu%C3%A9%20es%20la%20nutrici%C3%B3n%20deportiva,u%20otros%20seg%C3%BAn%20la%20ocasi%C3%B3n." target="_blank" rel="noopener noreferrer">
              <Button className='acerca-de-button cta-button' size="lg" >Descubre Más</Button>
            </a>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NutricionDeportiva;

