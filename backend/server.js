
const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
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


sql.connect(config)
  .then(pool => {
    console.log('Conectado a SQL Server');

    // Rutas
    app.get('/posts', async (req, res) => {
      try {
        const result = await pool.request().query('SELECT * FROM Posts');
        res.json(result.recordset);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta');
      }
    });

    app.post('/posts', async (req, res) => {
      const { text, user } = req.body;
      try {
        const result = await pool.request()
          .input('Text', sql.NVarChar, text)
          .input('User', sql.NVarChar, user)
          .query('INSERT INTO Posts (Text, User) OUTPUT INSERTED.* VALUES (@Text, @User)');
        res.json(result.recordset[0]);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error en la inserción');
      }
    });

    app.put('/posts/:id/like', async (req, res) => {
      const postId = req.params.id;
      try {
        const result = await pool.request()
          .input('PostID', sql.Int, postId)
          .query('UPDATE Posts SET Likes = Likes + 1 WHERE PostID = @PostID; SELECT * FROM Posts WHERE PostID = @PostID');
        res.json(result.recordset[0]);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al dar like');
      }
    });

    app.post('/posts/:id/comments', async (req, res) => {
      const postId = req.params.id;
      const { text, user } = req.body;
      try {
        const result = await pool.request()
          .input('PostID', sql.Int, postId)
          .input('Text', sql.NVarChar, text)
          .input('User', sql.NVarChar, user)
          .query('INSERT INTO Comments (PostID, Text, User) OUTPUT INSERTED.* VALUES (@PostID, @Text, @User)');
        res.json(result.recordset[0]);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error en la inserción de comentario');
      }
    });

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error de conexión:', err);
  });

