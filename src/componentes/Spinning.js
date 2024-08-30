import React from 'react';
import logo from '../logo1.jpeg'; 
import {ProgressBar, Container, Row, Col, Card, Button } from 'react-bootstrap';

const Spinning = () => {
    return (
        <>
            <Row className="mb-5 justify-content-center">
                <Col md={12} className="text-center">
                <img src={logo} className="App-logo img-fluid mb-3" alt="logo" style={{ width: '550px' }} />
                </Col>
            </Row>
            <Container className="zumba-page my-5">
                <h1 className="text-center mb-5 zumba-title">Clases Spinning</h1>

                <Row className="mb-4">
                    <Col md={5}>
                        <Card className="mb-4 zumba-card">
                            <Card.Img variant="top" src="/img/Instructora_Spining.jpg" alt="Instructor" />
                            <Card.Body>
                                <Card.Title>Instructora: Fernanda Caceres</Card.Title>
                                <Card.Text>
                                    Fernanda Caceres es una instructora certificada en Spinning con más de 10 años de experiencia.
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
                                <Card.Title>Evento Especial</Card.Title>
                                <Card.Text>
                                    ¡Únete al "Desafío Spinning Power 2024"! Enfrenta 5 etapas intensas: comienza con Intervalos Cortos, 
                                    sigue con Colinas, luego Resistencia, continúa con Sprint y Resistencia, y finaliza con Cadencia Alta. 
                                    Cada etapa está diseñada para maximizar tu resistencia y potencia en una experiencia épica de spinning. 
                                    ¡No te lo pierdas!
                                </Card.Text>
                                <a href="https://youtu.be/ofN2RNPWn54?si=clasZMf4A3jXiIG-" target="_blank" rel="noopener noreferrer">
                                    <Button className='acerca-de-button'>Proximos eventos</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={6}>
                        <Card className="mb-4 zumba-card">
                            <Card.Body>
                                <Card.Title>Rutina</Card.Title>
                                <Card.Text>
                                    Empieza con 10 minutos de calentamiento a ritmo moderado. Luego, 
                                    realiza 30 minutos de intervalos, alternando 1 minuto de sprint a 
                                    alta resistencia con 2 minutos de recuperación, repitiendo 10 veces. 
                                    Termina con 10 minutos de enfriamiento a ritmo lento. 
                                </Card.Text>
                                <a href="https://youtu.be/lGxf0krJO5o?si=NqdYQg9H70t0Fwjw" target="_blank" rel="noopener noreferrer">
                                    <Button className='acerca-de-button'>Ver rutinas</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-4 zumba-card">
                            <Card.Body>
                                <Card.Title>Routines</Card.Title>
                                <Card.Text>
                                    Comienza con 5 minutos de calentamiento a ritmo moderado. Luego, realiza 
                                    20 minutos alternando 1 minuto de alta intensidad con 1 minuto de recuperación , 
                                    repitiendo el ciclo 10 veces. Finaliza con 5 minutos de enfriamiento a ritmo lento. 
                                </Card.Text>
                                <a href="https://youtu.be/MRP7UlO1s10?si=_Zy-IkkwxmANYpbe" target="_blank" rel="noopener noreferrer">
                                    <Button className='acerca-de-button'>Ver rutinas</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <section className="service-section acerca-de-content">
                    <h3 className="text-center my-5 color-text">Avances de Nuestros Miembros Más Activos</h3>
                    <Row>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Juan Pérez</h4>
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
                            <h4>Susana Cruz </h4>
                            <ProgressBar now={50} label="50% Progreso" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Fernanda Lopéz</h4>
                            <ProgressBar now={70} label="70% Progreso" />
                            </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Josué Aguilar</h4>
                            <ProgressBar now={75} label="75% Progreso" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Santiago Díaz</h4>
                            <ProgressBar now={90} label="90% Progreso" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Eunice Orellana </h4>
                            <ProgressBar now={80} label="80% Progreso" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Manuel Peréz</h4>
                            <ProgressBar now={70} label="70% Progreso" />
                            </div>
                        </Col>
                    </Row>
                 </section>

                
            </Container>
        </>
        
    );
};

export default Spinning;
