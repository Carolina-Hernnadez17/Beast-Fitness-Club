import React, { useState } from 'react';
import GymTariffs from './GymTariffs';
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function Inscripcion() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [paymentEmail, setPaymentEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const isFormValid = () => {
    return nombre && email && password && telefono;
  };

  const sendEmail = () => {
    const templateParams = {
      user_name: nombre,
      user_email: paymentEmail, // Utilizamos el correo del campo de pago
      message: 'Gracias por suscribirte a Beast Fitness Club. Bienvenido/a.',
    };

    // Asegúrate de configurar tus IDs de EmailJS correctamente
    emailjs.send('service_c9iie5k', 'template_w5ddnt4', templateParams, 'aMNjI0st6uG0-OaSv')
      .then((response) => {
        console.log('Correo enviado exitosamente:', response.status, response.text);
        alert(`Correo de confirmación enviado a ${paymentEmail}`);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        setErrorMessage('Hubo un error al enviar el correo de confirmación.');
      });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const [year, month] = cardDate.split('-');

    // Validaciones del formulario
    if (cardNumber.length !== 16) {
      setErrorMessage('El número de tarjeta debe ser de 16 dígitos.');
    } else if (new Date(year, month - 1) <= currentDate) {  // Ajuste del mes
      setErrorMessage('La fecha de vencimiento de la tarjeta es inválida.');
    } else if (cvc.length !== 3) {
      setErrorMessage('El CVC debe tener 3 dígitos.');
    } else if (!paymentEmail) {
      setErrorMessage('Debes ingresar un correo para la confirmación de pago.');
    } else {
      setErrorMessage('');
      sendEmail();  // Enviamos el correo de confirmación al correo ingresado
      alert('¡Gracias por suscribirte a Beast Fitness Club!');
      handleClose();  // Cerrar modal después del pago
    }
  };

  return (
    <div className="inscripcion-page">
      <Container className="inscripcion-container">
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <Card className="inscripcion-card">
              <Card.Body>
                <h1 className="inscripcion-title">Únete a Beast Fitness Club</h1>
                <p className="inscripcion-description">
                  Nuestra empresa es reconocida por su compromiso para que nuestros clientes se sientan cómodos y
                  disfruten de su día a día con sus rutinas y alimentación. ¡Te damos la oportunidad de disfrutar cada
                  momento con nosotros!
                </p>
                <Form className="inscripcion-form mt-4">
                  <Form.Group controlId="formNombre">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu nombre completo"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingresa tu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="forContraseña" className="mt-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formTelefono" className="mt-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ingresa tu número de teléfono"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    type="button"
                    className="inscripcion-button mt-4"
                    onClick={handleShow}
                    disabled={!isFormValid()}
                  >
                    Inscribirme
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <section>
          <GymTariffs />
        </section>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pago de la suscripción</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handlePayment}>
              <Form.Group controlId="formCardNumber">
                <Form.Label>Número de Tarjeta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu número de tarjeta"
                  maxLength="16"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCardDate" className="mt-3">
                <Form.Label>Fecha de Vencimiento</Form.Label>
                <Form.Control
                  type="month"
                  value={cardDate}
                  onChange={(e) => setCardDate(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCVC" className="mt-3">
                <Form.Label>CVC</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa el CVC"
                  maxLength="3"
                  value={cvc}
                  onChange={(e) => setCVC(e.target.value.replace(/\D/g, ''))}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPaymentEmail" className="mt-3">
                <Form.Label>Email para confirmación de pago</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email para el recibo"
                  value={paymentEmail}
                  onChange={(e) => setPaymentEmail(e.target.value)}
                  required
                />
              </Form.Group>
              {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
              <Button type="submit" className="mt-4">
                Realizar Pago
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Inscripcion;
