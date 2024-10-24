import React, { useState } from 'react';
import GymTariffs from './GymTariffs';
import Login from './Login';
import { Container, Row, Col, Form, Button, Card, Modal, InputGroup } from 'react-bootstrap';
import emailjs from 'emailjs-com'; 

function Inscripcion() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Selector de código de país
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    resetForm(); // Limpiar el formulario
  };

  // Validaciones
  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneValid = (phone) => /^\d{8}$/.test(phone);
  const isPasswordValid = (password) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  const isFormValid = () => {
    return nombre && isEmailValid(email) && isPhoneValid(telefono) && isPasswordValid(password);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const [year, month] = cardDate.split('-');

    if (cardNumber.length !== 16) {
      setErrorMessage('El número de tarjeta debe ser de 16 dígitos.');
    } else if (new Date(year, month - 1) <= currentDate) {
      setErrorMessage('La fecha de vencimiento de la tarjeta es inválida.');
    } else if (cvc.length !== 3) {
      setErrorMessage('El CVC debe tener 3 dígitos.');
    } else {
      setErrorMessage('');
      
      // Enviar datos al servidor
      await enviarDatosInscripcion();

      alert('¡Gracias por suscribirte a Beast Fitness Club!');
      enviarFactura();  
      handleClose(); 
    }
  };

  // Función para enviar datos de inscripción al servidor
  const enviarDatosInscripcion = async () => {
    const usuario = {
      nombre,
      email,
      telefono,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/inscripcion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        throw new Error('Error en la inscripción');
      }

      console.log('Inscripción exitosa:', await response.text());
    } catch (error) {
      console.error('Error al enviar datos:', error);
      setErrorMessage('No se pudo registrar al usuario. Intenta nuevamente.');
    }
  };

  // Enviar factura al correo del usuario usando EmailJS
  const enviarFactura = () => {
    const templateParams = {
      to_name: nombre,  
      to_email: email, 
      message: 'Gracias por tu pago. El monto total es $25.00. ¡Disfruta de tu suscripción a Beast Fitness Club!',
    };

    emailjs.send('service_c9iie5k', 'template_sip1xiu', templateParams, 'aMNjI0st6uG0-OaSv')
      .then((response) => {
        console.log('Factura enviada correctamente:', response.status, response.text);
      })
      .catch((error) => {
        console.log('Error al enviar la factura:', error);
      });
  };

  const resetForm = () => {
    setNombre('');
    setEmail('');
    setPassword('');
    setTelefono('');
    setCardNumber('');
    setCardDate('');
    setCVC('');
    setErrorMessage('');
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
                  Nuestra empresa es reconocida por su compromiso para que nuestros clientes se sientan cómodos y disfruten de su día a día con sus rutinas y alimentación. ¡Te damos la oportunidad de disfrutar cada momento con nosotros!
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
                      onChange={(e) => setEmail(e.target.value.replace(/\s/g, ''))}
                      isInvalid={email && !isEmailValid(email)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingresa un correo válido que contenga "@" y un dominio válido.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formTelefono" className="mt-3">
                    <Form.Label>Teléfono</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <Form.Select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                          {/* Opciones de código de país */}
                          <option value="+1">+1 (Estados Unidos/Canadá)</option>
                          <option value="+52">+52 (México)</option>
                          <option value="+44">+44 (Reino Unido)</option>
                          <option value="+34">+34 (España)</option>
                          <option value="+502">+502 (Guatemala)</option>
                          <option value="+503">+503 (El Salvador)</option>
                          <option value="+54">+54 (Argentina)</option>
                          <option value="+55">+55 (Brasil)</option>
                          <option value="+57">+57 (Colombia)</option>
                          <option value="+56">+56 (Chile)</option>
                          <option value="+51">+51 (Perú)</option>
                          <option value="+58">+58 (Venezuela)</option>
                          <option value="+91">+91 (India)</option>
                          <option value="+81">+81 (Japón)</option>
                          <option value="+61">+61 (Australia)</option>
                          <option value="+64">+64 (Nueva Zelanda)</option>
                          <option value="+33">+33 (Francia)</option>
                          <option value="+49">+49 (Alemania)</option>
                          <option value="+39">+39 (Italia)</option>
                          <option value="+86">+86 (China)</option>
                          <option value="+82">+82 (Corea del Sur)</option>
                          <option value="+7">+7 (Rusia)</option>
                        </Form.Select>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa tu número de teléfono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value.replace(/\s/g, ''))}
                        isInvalid={telefono && !isPhoneValid(telefono)}
                      />
                      <Form.Control.Feedback type="invalid">
                        El número de teléfono debe tener exactamente 8 dígitos.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group controlId="formContraseña" className="mt-3">
                    <Form.Label>Contraseña</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value.replace(/\s/g, ''))}
                        isInvalid={password && !isPasswordValid(password)}
                      />
                      <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Ocultar' : 'Mostrar'}
                      </Button>
                      <Form.Control.Feedback type="invalid">
                        La contraseña debe tener al menos 8 caracteres, incluir una letra, un número y un carácter especial.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Button
                    type="button"
                    className="home-page-button inscripcion-button mt-4"
                    onClick={handleShow}
                    disabled={!isFormValid()}
                  >
                    Inscribirme
                  </Button>
                </Form>

                {/* Etiquetas adicionales */}
                <p className="mt-3">¿Ya estás inscrito?</p>
                <p><a href="/Login">Inicia sesión</a></p>
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
            <p className="text-center fs-5">$25.00</p> 
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
              {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
              <Button type="submit" className=" home-page-button mt-4 w-100">
                Confirmar Pago
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Inscripcion;
