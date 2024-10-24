const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const app = express();
const port = 5000;

// Configura CORS
app.use(cors());
app.use(bodyParser.json());

const config = {
    server: 'CarolinaZepeda', 
    database: 'Beast',
    user: 'Admin',       
    password: '123',    
    options: {
      encrypt: false,    
      trustServerCertificate: true, 
    }
};
  
app.post('/inscripcion', async (req, res) => {
    const { nombre, email, telefono, password } = req.body;

    try {
        const pool = await sql.connect(config);
        await pool.request()
            .input('Nombre', sql.VarChar, nombre)
            .input('Email', sql.VarChar, email)
            .input('Telefono', sql.VarChar, telefono)
            .input('PasswordU', sql.VarChar, password) // No olvides encriptar la contraseña en producción
            .query('INSERT INTO Users (Nombre, Email, Telefono, PasswordU) VALUES (@Nombre, @Email, @Telefono, @PasswordU)');
        res.status(201).send('Usuario registrado');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en la inscripción');
    }
});

// Endpoint para el login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('Email', sql.VarChar, email)
        .input('PasswordU', sql.VarChar, password)
        .query('SELECT * FROM Users WHERE Email = @Email AND PasswordU = @PasswordU');
  
      if (result.recordset.length > 0) {
        res.status(200).send({ message: 'Login exitoso' });
      } else {
        res.status(401).send('Credenciales inválidas');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error en el login');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
