import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo1.jpeg';

function Login({ setIsLoggedIn, setUserEmail, setUserId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Login exitoso');
      console.log('Datos del usuario:', data);
      setIsLoggedIn(true); // Establece el estado de autenticación como true
      setUserEmail(email); // Guardar el correo del usuario
      localStorage.setItem('userEmail', email); // Guarda el email en localStorage
      console.log('Email:', email);
      setUserId(data.userId); // Guarda el ID del usuario
      localStorage.setItem('userId', data.userId); // Guarda el ID en localStorage
      navigate('/'); // Redirige a la página de inicio
    } else {
      alert('Error en el login');
    }
  };

  return (
    <div className="login-container">
      <div className="card shadow-lg p-4 login-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <img src={logo} className="login-logo img-fluid mb-3" alt="logo" />
          <h3 className="text-center mb-4">Iniciar Sesión</h3>

          <div className="form-group mb-3">
            <label className="form-label text-muted">Email</label>
            <input
              type="email"
              className="form-control login-input"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label text-muted">Contraseña</label>
            <input
              type="password"
              className="form-control login-input"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn login-button btn-block">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;


