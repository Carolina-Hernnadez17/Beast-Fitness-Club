import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c9iie5k', 'template_a3ug74u', form.current, 'aMNjI0st6uG0-OaSv')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('¡Mensaje enviado exitosamente!'); 
          // Limpiar los campos del formulario
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error al enviar el mensaje, intenta nuevamente.');
        },
      );
  };

  return (
    <div className="contact-form-container">
      <h1 className='video-gallery-club home-page-title text-center'>¿Tienes más preguntas?</h1>
      <div className="form-container">
        <h2 className="text-center form-title">Contáctanos</h2>
        <p className="text-center form-description">Contacto para cualquier consulta</p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="user_name" 
              placeholder="Tu nombre" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="user_email" 
              placeholder="Tu email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea 
              className="form-control" 
              id="message" 
              name="message" 
              rows="4" 
              placeholder="Escribe tu mensaje aquí..." 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            ></textarea>
          </div>
          <Button type="submit" className="submit-button acerca-de-button">Enviar</Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
