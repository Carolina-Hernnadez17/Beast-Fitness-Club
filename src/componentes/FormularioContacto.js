import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function ContactForm() {
  return (
    <div className="contact-form-container">
      <h1 className='video-gallery-club home-page-title text-center'>¿Tienes más preguntas?</h1>
      <div className="form-container">
        <h2 className="text-center form-title">Contáctanos</h2>
        <p className="text-center form-description">Contacto para cualquier consulta</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Tu email" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>
          <Button type="submit" className="submit-button acerca-de-button">Enviar</Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;