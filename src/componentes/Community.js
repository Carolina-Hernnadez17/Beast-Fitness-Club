import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup, Badge, Modal } from 'react-bootstrap';
import axios from 'axios';

const Community = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(null);

  // Función para obtener publicaciones desde el backend
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts'); // Cambia la URL según tu configuración
      setPosts(response.data);
    } catch (error) {
      console.error('Error al obtener las publicaciones:', error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Obtener las publicaciones al montar el componente
  }, []);

  const addPost = async () => {
    if (post) {
      try {
        const response = await axios.post('http://localhost:5000/posts', {
          text: post,
          user: 'Usuario Anónimo',
        });
        setPosts([...posts, response.data]); // Agregar la nueva publicación
        setPost('');
      } catch (error) {
        console.error('Error al agregar la publicación:', error);
      }
    } else {
      alert('Debes escribir algo para publicar.');
    }
  };

  const addLike = async (index) => {
    const postId = posts[index].PostID;
    try {
      const response = await axios.put('http://localhost:5000/posts/${postId}/like');
      const newPosts = [...posts];
      newPosts[index] = response.data; // Actualizar la publicación con los nuevos datos
      setPosts(newPosts);
    } catch (error) {
      console.error('Error al dar like:', error);
    }
  };

  const handleCommentClick = (index) => {
    setCurrentPostIndex(index);
    setShowCommentModal(true);
  };

  const addComment = async () => {
    if (newComment) {
      const postId = posts[currentPostIndex].PostID;
      try {
        const response = await axios.post('http://localhost:5000/posts/${postId}/comments', {
          text: newComment,
          user: 'Usuario Anónimo',
        });
        const newPosts = [...posts];
        newPosts[currentPostIndex].comments.push(response.data); // Agregar el nuevo comentario
        setPosts(newPosts);
        setNewComment('');
        setShowCommentModal(false);
      } catch (error) {
        console.error('Error al agregar el comentario:', error);
      }
    } else {
      alert('Debes escribir un comentario.');
    }
  };

  const handleCloseModal = () => {
    setShowCommentModal(false);
    setNewComment('');
  };

  return (
    <Container className="text-center">
      <h1>Comunidad</h1>

      <div className="mb-4">
        <h4>Comparte tus logros o motivación</h4>
        <Form>
          <Form.Group>
            <Form.Label>Publicación</Form.Label>
            <Form.Control
              type="text"
              placeholder="Comparte tus logros o motivación"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </Form.Group>
          <Button 
            variant="success" 
            style={{ backgroundColor: '#52BF04', borderColor: '#52BF04' }} 
            onClick={addPost} 
            className="mt-3"
          >
            Publicar
          </Button>
        </Form>
      </div>

      <h3 className="mt-5">Publicaciones</h3>
      <ListGroup>
        {posts.length > 0 ? (
          posts.map((p, index) => (
            <ListGroup.Item key={p.PostID}>
              <strong>{p.User}</strong>: {p.Text}
              <div className="mt-2">
                <Button 
                  variant="success" 
                  style={{ backgroundColor: '#52BF04', borderColor: '#52BF04', color: '#fff' }} 
                  onClick={() => addLike(index)}
                >
                  Me gusta <Badge bg="light" text="dark" className="ms-2">{p.Likes}</Badge>
                </Button>{' '}
                <Button 
                  variant="success" 
                  style={{ backgroundColor: '#52BF04', borderColor: '#52BF04', color: '#fff' }} 
                  onClick={() => handleCommentClick(index)}
                >
                  Comentar
                </Button>
                {p.Comments && p.Comments.length > 0 && (
                  <ListGroup className="mt-2">
                    {p.Comments.map((comment, i) => (
                      <ListGroup.Item key={comment.CommentID} className="text-muted">
                        <strong>{comment.User}</strong>: {comment.Text}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <p>No hay publicaciones aún. ¡Sé el primero en compartir algo!</p>
        )}
      </ListGroup>

      {/* Modal para agregar comentarios */}
      <Modal show={showCommentModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Comentario</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escribe tu comentario..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </Form.Group>
            <Button 
              variant="success" 
              style={{ backgroundColor: '#52BF04', borderColor: '#52BF04' }} 
              onClick={addComment}
            >
              Comentar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Community;