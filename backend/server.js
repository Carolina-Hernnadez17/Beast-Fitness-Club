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
            .input('PasswordU', sql.VarChar, password) // Añadido para verificar directamente
            .query('SELECT * FROM Users WHERE Email = @Email AND PasswordU = @PasswordU');

        if (result.recordset.length > 0) {
            const user = result.recordset[0]; // Obtener el primer usuario encontrado
            res.status(200).json({ userId: user.Id }); // Responder con el Id del usuario
        } else {
            res.status(401).send('Credenciales inválidas');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el login');
    }
});

  

// Endpoint para agregar progreso
app.post('/add-progress', async (req, res) => {
  const { userId, date, weight } = req.body;

  try {
      const pool = await sql.connect(config);
      await pool.request()
          .input('UserId', sql.Int, userId)
          .input('Date', sql.Date, date)
          .input('Weight', sql.Float, weight)
          .query('INSERT INTO Progress (UserId, Date, Weight) VALUES (@UserId, @Date, @Weight)');
      res.status(201).send('Progreso agregado');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error al agregar progreso');
  }
});

// Endpoint para obtener el historial de progreso
app.post('/get-progress', async (req, res) => {
    const { userId } = req.body;
  
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('UserId', sql.Int, userId)
        .query('SELECT Date, Weight FROM Progress WHERE UserId = @UserId ORDER BY Date ASC');
      res.status(200).json(result.recordset);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener el progreso');
    }
});

app.post('/get-workouts', async (req, res) => {
    const { userId } = req.body;
  
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('UserId', sql.Int, userId)
        .query('SELECT Exercise, Reps, Time, Category FROM Workouts WHERE UserId = @UserId ORDER BY WorkoutId ASC');
      res.status(200).json(result.recordset);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener los ejercicios');
    }
});
  
  app.post('/add-workout', async (req, res) => {
    const { userId, exercise, reps, time, category } = req.body;
  
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input('UserId', sql.Int, userId)
        .input('Exercise', sql.VarChar(255), exercise)
        .input('Reps', sql.Int, reps)
        .input('Time', sql.Int, time)
        .input('Category', sql.VarChar(50), category)
        .query('INSERT INTO Workouts (UserId, Exercise, Reps, Time, Category) VALUES (@UserId, @Exercise, @Reps, @Time, @Category)');
      res.status(200).send('Ejercicio agregado exitosamente');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al agregar el ejercicio');
    }
});

// Obtener todas las publicaciones y sus comentarios
app.get('/community', async (req, res) => {
  try {
      const pool = await sql.connect(config);
      const result = await pool.request().query(`
          SELECT p.PostId, p.Content AS PostContent, p.Likes, u.Nombre AS UserName,
                 c.CommentId, c.Content AS CommentContent, cu.Nombre AS CommentUserName
          FROM Posts p
          LEFT JOIN Users u ON p.UserId = u.Id
          LEFT JOIN Comments c ON c.PostId = p.PostId
          LEFT JOIN Users cu ON c.UserId = cu.Id
          ORDER BY p.PostId ASC, c.CommentId ASC
      `);
      
      const posts = {};
      result.recordset.forEach(row => {
          if (!posts[row.PostId]) {
              posts[row.PostId] = {
                  postId: row.PostId,
                  content: row.PostContent,
                  userName: row.UserName,
                  likes: row.Likes,
                  comments: []
              };
          }
          if (row.CommentId) {
              posts[row.PostId].comments.push({
                  commentId: row.CommentId,
                  content: row.CommentContent,
                  userName: row.CommentUserName
              });
          }
      });

      res.status(200).json(Object.values(posts));
  } catch (err) {
      console.error('Error al obtener publicaciones:', err);
      res.status(500).send('Error al obtener publicaciones');
  }
});

// Agregar una publicación
app.post('/add-post', async (req, res) => {
  const { userId, content } = req.body;

  try {
      const pool = await sql.connect(config);
      await pool.request()
          .input('UserId', sql.Int, userId)
          .input('Content', sql.VarChar(500), content)
          .query('INSERT INTO Posts (UserId, Content) VALUES (@UserId, @Content)');
      
      res.status(201).send('Publicación agregada');
  } catch (err) {
      console.error('Error al agregar publicación:', err);
      res.status(500).send('Error al agregar publicación');
  }
});

// Agregar un "like" a una publicación
app.post('/like-post', async (req, res) => {
  const { postId } = req.body;

  try {
      const pool = await sql.connect(config);
      await pool.request()
          .input('PostId', sql.Int, postId)
          .query('UPDATE Posts SET Likes = Likes + 1 WHERE PostId = @PostId');
      
      res.status(200).send('Like agregado');
  } catch (err) {
      console.error('Error al dar like a la publicación:', err);
      res.status(500).send('Error al dar like');
  }
});

// Agregar un comentario
app.post('/add-comment', async (req, res) => {
  const { userId, postId, content } = req.body;

  try {
      const pool = await sql.connect(config);
      await pool.request()
          .input('UserId', sql.Int, userId)
          .input('PostId', sql.Int, postId)
          .input('Content', sql.VarChar(500), content)
          .query('INSERT INTO Comments (UserId, PostId, Content) VALUES (@UserId, @PostId, @Content)');
      
      res.status(201).send('Comentario agregado');
  } catch (err) {
      console.error('Error al agregar comentario:', err);
      res.status(500).send('Error al agregar comentario');
  }
});



app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
