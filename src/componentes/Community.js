import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, Badge, Modal } from 'react-bootstrap';

const Community = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(null);

  const addPost = () => {
    if (post) {
      setPosts([...posts, { text: post, user: 'Usuario Anónimo', likes: 0, comments: [] }]);
      setPost('');
    } else {
      alert('Debes escribir algo para publicar.');
    }
  };

  const addLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };

  const handleCommentClick = (index) => {
    setCurrentPostIndex(index);
    setShowCommentModal(true);
  };

  const addComment = () => {
    if (newComment) {
      const newPosts = [...posts];
      newPosts[currentPostIndex].comments.push({ text: newComment, user: 'Usuario Anónimo' });
      setPosts(newPosts);
      setNewComment('');
      setShowCommentModal(false);
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
            <ListGroup.Item key={index}>
              <strong>{p.user}</strong>: {p.text}
              <div className="mt-2">
                <Button 
                  variant="success" 
                  style={{ backgroundColor: '#52BF04', borderColor: '#52BF04', color: '#fff' }} 
                  onClick={() => addLike(index)}
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
                        <strong>{comment.user}</strong>: {comment.text}
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
