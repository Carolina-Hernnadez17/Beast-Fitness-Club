import React, { useState } from 'react';
import { Container, Form, Button, Card, ListGroup, Row, Col, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap importado

const PersonalizedSuggestions = () => {
  const [goal, setGoal] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [mealPlan, setMealPlan] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const generateSuggestion = () => {
    if (goal === 'perder peso') {
      setSuggestion('Recomendamos ejercicios cardiovasculares y una dieta baja en calorías.');
      setMealPlan([
        'Desayuno: Avena con frutas.',
        'Almuerzo: Ensalada de pollo.',
        'Cena: Pescado al vapor con verduras.'
      ]);
    } else if (goal === 'ganar músculo') {
      setSuggestion('Recomendamos ejercicios de fuerza y una dieta rica en proteínas.');
      setMealPlan([
        'Desayuno: Huevos con tostadas.',
        'Almuerzo: Pollo a la parrilla con arroz.',
        'Cena: Batido de proteínas con frutos secos.'
      ]);
    } else if (goal === 'mejorar resistencia') {
      setSuggestion('Enfócate en ejercicios de resistencia y una dieta equilibrada.');
      setMealPlan([
        'Desayuno: Yogur con granola.',
        'Almuerzo: Pavo con quinoa.',
        'Cena: Ensalada con aguacate.'
      ]);
    } else if (goal === 'aumentar flexibilidad') {
      setSuggestion('Realiza estiramientos y ejercicios de movilidad, junto con una dieta rica en nutrientes.');
      setMealPlan([
        'Desayuno: Smoothie verde.',
        'Almuerzo: Tofu con vegetales.',
        'Cena: Sopa de lentejas.'
      ]);
    } else {
      setSuggestion('Establece metas claras para recibir recomendaciones.');
      setMealPlan([]);
    }
  };

  return (
    <Container className="text-center mt-5">
      <h1>Sugerencias Personalizadas</h1>
      <Form>
        <Form.Group>
          <Form.Label>Objetivo</Form.Label>
          <Form.Control 
            as="select" 
            value={goal} 
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="">Selecciona tu objetivo</option>
            <option value="perder peso">Perder peso</option>
            <option value="ganar músculo">Ganar músculo</option>
            <option value="mejorar resistencia">Mejorar resistencia</option>
            <option value="aumentar flexibilidad">Aumentar flexibilidad</option>
          </Form.Control>
        </Form.Group>
        <Button variant="success" style={{ backgroundColor: '#52BF04', borderColor: '#52BF04', color: 'white' }} onClick={generateSuggestion} className="mt-3">Generar Sugerencias</Button>
      </Form>

      {suggestion && (
        <>
          <Card className="mt-5 shadow-lg border-0">
            <Card.Body>
              <Card.Title>Sugerencia</Card.Title>
              <Card.Text>{suggestion}</Card.Text>
            </Card.Body>
          </Card>

          <h3 className="mt-5">Plan de Comidas</h3>
          <Row>
            {mealPlan.map((meal, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card className="border-success">
                  <Card.Body>
                    <Card.Title>Comida {index + 1}</Card.Title>
                    <Card.Text>{meal}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Button variant="success" style={{ backgroundColor: '#52BF04', borderColor: '#52BF04', color: 'white' }} onClick={() => setShowModal(true)} className="mt-5">Ver Más Consejos</Button>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Consejos Adicionales</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Ejercicios Recomendados:</h5>
              <ul>
                <li>Caminar 30 minutos al día.</li>
                <li>Realizar ejercicios de estiramiento.</li>
                <li>Incorporar pesas en tu rutina.</li>
              </ul>
              <h5>Consejos de Alimentación:</h5>
              <ul>
                <li>Beber suficiente agua.</li>
                <li>Evitar alimentos procesados.</li>
                <li>Incluir verduras y frutas frescas.</li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default PersonalizedSuggestions;

