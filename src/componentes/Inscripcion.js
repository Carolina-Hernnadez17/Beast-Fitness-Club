import React from 'react';
import GymTariffs from './GymTariffs';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Inscripcion() {
  return (
    <div className="inscripcion-page">
      <Container className="inscripcion-container">
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <Card className="inscripcion-card">
              <Card.Body>
                <h1 className="inscripcion-title">Únete a Beast Fitness Club</h1>
                <p className="inscripcion-description">
                  Nuestra empresa es reconocida por su compromiso para que nuestros clientes se sientan cómodos y disfruten de su día a día con sus rutinas y alimentación. ¡Te damos la oportunidad de disfrutar cada momento con nosotros!
                </p>
                <Form className="inscripcion-form mt-4">
                  <Form.Group controlId="formNombre">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" />
                  </Form.Group>
                  <Form.Group controlId="forContraseña" className="mt-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                  </Form.Group>
                  <Form.Group controlId="formTelefono" className="mt-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="number" placeholder="Ingresa tu número de teléfono" />
                  </Form.Group>
                  <Button  type="submit" className="inscripcion-button mt-4 login-button">
                    Inscribirme
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <section>
          <GymTariffs/>
        </section>

      </Container>
    </div>
  );
}

export default Inscripcion;
