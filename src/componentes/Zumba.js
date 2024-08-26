import React from 'react';
import logo from '../logo1.jpeg'; 
import {ProgressBar, Container, Row, Col, Card, Button } from 'react-bootstrap';

const Zumba = () => {
    return (
        <>
            <Row className="mb-5 justify-content-center">
                <Col md={12} className="text-center">
                <img src={logo} className="App-logo img-fluid mb-3" alt="logo" style={{ width: '550px' }} />
                </Col>
            </Row>
            <Container className="zumba-page my-5">
                <h1 className="text-center mb-5 zumba-title">Zumba Class</h1>

                <Row className="mb-4">
                    <Col md={5}>
                        <Card className="mb-4 zumba-card">
                            <Card.Img variant="top" src="/img/Instructora_Zumba.jpg" alt="Instructor" />
                            <Card.Body>
                                <Card.Title>Instructora: Jane Doe</Card.Title>
                                <Card.Text>
                                    Jane Doe es una instructora certificada de Zumba con más de 5 años de experiencia.
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
                                Únase a nosotros en eventos especiales de Zumba, que incluyen sesiones al aire libre, noches de baile temáticas y eventos de recaudación de fondos para organizaciones benéficas.
                                </Card.Text>
                                <Button variant="success">Próximos eventos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={6}>
                        <Card className="mb-4 zumba-card">
                            <Card.Body>
                                <Card.Title>Rutinas</Card.Title>
                                <Card.Text>
                                    Nuestras rutinas de Zumba incluyen una combinación de movimientos de baile llenos de energía al ritmo de música alegre. ¡Cada sesión está diseñada para maximizar la quema de calorías y garantizar que te diviertas!
                                </Card.Text>
                                <Button variant="success">Ver todas las rutinas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-4 zumba-card">
                            <Card.Body>
                                <Card.Title>Routines</Card.Title>
                                <Card.Text>
                                    Our Zumba routines include a mix of high-energy dance moves set to upbeat music. Every session is designed to maximize your calorie burn while ensuring you have fun!
                                </Card.Text>
                                <Button variant="success">View All Routines</Button>
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

export default Zumba;
