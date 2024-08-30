import React from 'react';
import logo from '../logo1.jpeg'; 
import {ProgressBar, Container, Row, Col, Card, Button } from 'react-bootstrap';

const Pilates = () => {
    return (
        <>
            <Row className="mb-5 justify-content-center">
                <Col md={12} className="text-center">
                <img src={logo} className="App-logo img-fluid mb-3" alt="logo" style={{ width: '550px' }} />
                </Col>
            </Row>
            <Container className="zumba-page my-5">
                <h1 className="text-center mb-5 zumba-title">Clases de Pilates</h1>

                <Row className="mb-4">
                    <Col md={5}>
                        <Card className="mb-4 zumba-card">
                            <Card.Img variant="top" src="/img/Pilates-Class.jpeg" alt="Instructor" />
                            <Card.Body>
                                <Card.Title>Instructora: Karla Díaz</Card.Title>
                                <Card.Text>
                                    Karla Díaz es una instructora certificada para dar seciones de pilates tiene 10 años de experiencia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={7}>
                            <div className="container mt-4">
                                <div className="card schedule-card fade-in">
                                    <div className="card-body">
                                        <h5 className="schedule-card-header">Horario de clases</h5>
                                        <div className="schedule-entry">Lunes: 7:00 PM - 8:00 PM</div>
                                        <div className="schedule-entry">Miércoles: 5:00 PM - 8:00 PM</div>
                                        <div className="schedule-entry">Viernes: 6:00 PM - 7:00 PM</div>
                                    </div>
                                </div>
                                <div className="card schedule-card fade-in mt-4">
                                    <div className="card-body">
                                        <h5 className="schedule-card-header">Horario de clases especiales</h5>
                                        <div className="schedule-entry">Martes: 7:00 AM - 8:00 PM</div>
                                        <div className="schedule-entry">Jueves: 7:00 PM - 8:00 PM</div>
                                        <div className="schedule-entry">Viernes: 6:00 AM - 9:00 AM</div>
                                    </div>
                                </div>
                            </div>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={12}>
                        <Card className="mb-4 zumba-card">
                            <Card.Body>
                                <Card.Title>Pilates al Amanecer</Card.Title>
                                <Card.Text>
                                    Te esperamos en el parque local, con una duración de 1 hora. 
                                    Inicia con una breve bienvenida, seguida de 45 minutos de 
                                    Pilates, y concluye con 10 minutos de estiramientos. 
                                    Promociona el evento en redes sociales, ofreciendo descuentos 
                                    por traer un amigo, y entrega un pequeño kit de bienvenida 
                                    con agua y una toalla.
                                </Card.Text>
                                <Button className='acerca-de-button'>Próximos eventos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={6}>
                        <Card className="mb-4 zumba-card">
                            <Card.Body>
                                <Card.Title>Rutina para el Core</Card.Title>
                                <Card.Text>
                                    Esta rutina fortalece los músculos del abdomen y 
                                    la espalda baja. Comienza con un calentamiento suave, 
                                    seguido del ejercicio "Hundred" para activar el core. 
                                    Luego, realiza un "Roll-up" para estirar la columna y 
                                    trabaja la plancha para fortalecer los músculos profundos 
                                    del abdomen. Termina con estiramientos suaves.
                                </Card.Text>
                                <Button className='acerca-de-button'>Ver todas las rutinas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-4 zumba-card">
                            <Card.Body>
                                <Card.Title>Routines</Card.Title>
                                <Card.Text>
                                    Esta rutina se enfoca en tonificar las piernas y glúteos. 
                                    Empieza con un calentamiento ligero, seguido de ejercicios como 
                                    "Side-Lying Leg Lift" para trabajar los músculos laterales, 
                                    "Bridges" para fortalecer los glúteos, y "Side Kicks" para mejorar 
                                    la estabilidad de la cadera. Finaliza con estiramientos para relajar 
                                    los músculos trabajados.
                                </Card.Text>
                                <Button className='acerca-de-button'>Ver Rutinas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <section className="service-section acerca-de-content">
                    <h3 className="text-center my-5 color-text">Avances de Nuestros Miembros</h3>
                    <Row>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Juana Cruz</h4>
                            <ProgressBar now={75} label="75% Progreso" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>María López</h4>
                            <ProgressBar now={90} label="90% Progreso" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Alberto Zepeda </h4>
                            <ProgressBar now={50} label="50% Progreso" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Jose Lopéz</h4>
                            <ProgressBar now={70} label="70% Progreso" />
                            </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Josué Sánchez</h4>
                            <ProgressBar now={75} label="75% Progreso" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Susana Díaz</h4>
                            <ProgressBar now={90} label="90% Progreso" />
                            </div>
                        </Col>
                    </Row>
                   
                 </section>

                
            </Container>
        </>
        
    );
};

export default Pilates;
