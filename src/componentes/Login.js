import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo1.jpeg'; 


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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