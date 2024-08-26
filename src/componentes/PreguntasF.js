
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';


const PreguntasF = () => {
    return (
        <div className="faq-container">
            <h2 className="text-center">Preguntas Frecuentes</h2>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        ¿Qué servicios ofrece Beast Fitness Club?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Ofrecemos una variedad de servicios incluyendo entrenamientos personalizados, clases grupales, y planes de nutrición. Nuestros entrenadores están disponibles para ayudarte a alcanzar tus objetivos de fitness.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        ¿Cómo me inscribo en las clases?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            Puedes inscribirte en nuestras clases a través de nuestra página web o directamente en el club. Ofrecemos una fácil interfaz de inscripción en línea y asistencia en el club.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default PreguntasF;
