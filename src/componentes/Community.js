import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup, Badge, Modal } from 'react-bootstrap';

const Community = ({ userId }) => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(null);

  useEffect(() => {
    // Cargar los posts desde la base de datos
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/community', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error al obtener las publicaciones', err);
      }
    };
    fetchPosts();
  }, []);

  const addPost = async () => {
    if (post) {
      try {
        await fetch('http://localhost:5000/add-post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, content: post }),
        });
        setPost('');
        // Volver a cargar las publicaciones después de agregar una nueva
        const response = await fetch('http://localhost:5000/community', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error al agregar publicación', err);
      }
    } else {
      alert('Debes escribir algo para publicar.');
    }
  };

  const addLike = async (postId, index) => {
    try {
      await fetch('http://localhost:5000/like-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId }),
      });
      const newPosts = [...posts];
      newPosts[index].likes += 1; // Incrementa el contador de likes en el estado local
      setPosts(newPosts);
    } catch (err) {
      console.error('Error al dar like', err);
    }
  };

  const handleCommentClick = (index) => {
    setCurrentPostIndex(index);
    setShowCommentModal(true);
  };

  const addComment = async () => {
    if (newComment) {
      try {
        const postId = posts[currentPostIndex].postId; // Cambiar 'PostId' por 'postId'
        await fetch('http://localhost:5000/add-comment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postId, userId, content: newComment }), // Cambiar 'text' por 'content'
        });
        const updatedPosts = [...posts];
        updatedPosts[currentPostIndex].comments.push({ user: 'AAAAA', content: newComment }); // Cambiar 'text' por 'content'
        setPosts(updatedPosts);
        setNewComment('');
        setShowCommentModal(false);
      } catch (err) {
        console.error('Error al agregar comentario', err);
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
            <ListGroup.Item key={p.postId}> {/* Cambiar key a p.postId */}
              <strong>{p.userName}</strong>: {p.content} {/* Cambiar a p.content */}
              <div className="mt-2">
                <Button 
                  variant="success" 
                  style={{ backgroundColor: '#52BF04', borderColor: '#52BF04', color: '#fff' }} 
                  onClick={() => addLike(p.postId, index)} // Cambiar a p.postId
                >
                  Me gusta <Badge bg="light" text="dark" className="ms-2">{p.likes}</Badge>
                </Button>{' '}
                <Button 
                  variant="success" 
                  style={{ backgroundColor: '#52BF04', borderColor: '#52BF04', color: '#fff' }} 
                  onClick={() => handleCommentClick(index)}
                >
                  Comentar
                </Button>
                {p.comments.length > 0 && (
                  <ListGroup className="mt-2">
                    {p.comments.map((comment, i) => (
                      <ListGroup.Item key={i} className="text-muted">
                        <strong>{comment.userName}</strong>: {comment.content} {/* Cambiar a comment.content */}
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


