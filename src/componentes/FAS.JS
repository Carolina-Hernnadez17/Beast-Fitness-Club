import React, { useState } from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';

const FAQ = () => {
  const [activeKey, setActiveKey] = useState('0');

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Container className="faq-container mt-5">
      <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
      <Accordion activeKey={activeKey}>
        <Card>
          <Card.Header>
            <Accordion.Toggle 
              as={Button} 
              variant="link" 
              eventKey="0" 
              onClick={() => toggleActiveKey('0')}
              className="faq-toggle-button"
            >
              ¿Qué servicios ofrece Beast Fitness Club?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Ofrecemos una amplia variedad de servicios que incluyen rutinas de ejercicio personalizadas, planes de alimentación, clases de Zumba, Pilates, Crossfit, y mucho más.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle 
              as={Button} 
              variant="link" 
              eventKey="1" 
              onClick={() => toggleActiveKey('1')}
              className="faq-toggle-button"
            >
              ¿Cómo puedo inscribirme en las clases?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Puedes inscribirte en nuestras clases a través de nuestra página web o directamente en el gimnasio. También puedes contactarnos para obtener más detalles.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle 
              as={Button} 
              variant="link" 
              eventKey="2" 
              onClick={() => toggleActiveKey('2')}
              className="faq-toggle-button"
            >
              ¿Qué tipos de membresía ofrecen?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Ofrecemos varios tipos de membresía, desde pases diarios hasta membresías anuales, para adaptarnos a las necesidades y objetivos de cada cliente.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle 
              as={Button} 
              variant="link" 
              eventKey="3" 
              onClick={() => toggleActiveKey('3')}
              className="faq-toggle-button"
            >
              ¿Cuál es el horario de atención?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Estamos abiertos de lunes a viernes de 6:00 AM a 10:00 PM, y los sábados de 8:00 AM a 6:00 PM. Cerrado los domingos.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default FAQ;
