import React from 'react';
import logo from '../logo1.jpeg'; 
import {ProgressBar, Container, Row, Col, Card, Button } from 'react-bootstrap';

const Crossfit = () => {
    return (
        <>
            <Row className="mb-5 justify-content-center">
                <Col md={12} className="text-center">
                <img src={logo} className="App-logo img-fluid mb-3" alt="logo" style={{ width: '550px' }} />
                </Col>
            </Row>
            <Container className="zumba-page my-5">
                <h1 className="text-center mb-5 zumba-title">Clases Crossfit</h1>

                <Row className="mb-4">
                    <Col md={5}>
                        <Card className="mb-4 zumba-card">
                            <Card.Img variant="top" src="/img/Instructora_Crossfit.jpg" alt="Instructor" />
                            <Card.Body>
                                <Card.Title>Instructor: Carlos Zepeda</Card.Title>
                                <Card.Text>
                                   Carlos Zepeda es un instructor, que lleva trabajanod con nosotros ya 15 años, y esta sertificado para trabajar en el area Crossfit.
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
                                    ¡Participa en el evento CrossFit extremo! Confronta "Cindy" con 20 minutos AMRAP de pull-ups, push-ups y air squats, seguido por "Fran" con thrusters y pull-ups en el menor tiempo. Luego, prueba tu resistencia con "Murph", "Helen" y "Angie". Finaliza con "Fight Gone Bad", "DT" y "Grace" para una prueba completa de fuerza y potencia. ¡Reta tus límites y demuestra tu habilidad!
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
                                <Card.Title>Rutina Cindy</Card.Title>
                                <Card.Text>
                                    Es un desafío de 20 minutos AMRAP que consiste en completar tantas rondas 
                                    como sea posible en ese tiempo. Cada ronda incluye 5 pull-ups, 10 push-ups 
                                    y 15 air squats, lo que trabaja simultáneamente la resistencia muscular y 
                                    cardiovascular. 
                                </Card.Text>
                                <Button className='acerca-de-button'>Ver rutinas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-4 zumba-card">
                            <Card.Body>
                                <Card.Title>Rutina Grace</Card.Title>
                                <Card.Text>
                                    Es un desafío de tiempo que se centra en completar 30 clean and jerks, 
                                    con un peso de 135 libras para hombres y 95 libras para mujeres, en el 
                                    menor tiempo posible. Este entrenamiento pone a prueba tanto la potencia 
                                    como la técnica en el levantamiento olímpico
                                </Card.Text>
                                <Button className='acerca-de-button'>Ver rutinas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <section className="service-section acerca-de-content">
                    <h3 className="text-center my-5 color-text">Avances de Nuestros Miembros </h3>
                    <Row>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Susana Cruz </h4>
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
                            <h4>Josué Aguilar</h4>
                            <ProgressBar now={75} label="75% Progreso" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="progress-section">
                            <h4>Gabriel Díaz</h4>
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

export default Crossfit;
