import React, { useState } from 'react';
import { Container, Button, Form, Row, Col, ListGroup } from 'react-bootstrap';
import { jsPDF } from 'jspdf';

const WorkoutPlanner = () => {
  const [exercise, setExercise] = useState('');
  const [reps, setReps] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = () => {
    setWorkouts([...workouts, { exercise, reps, time, category }]);
    setExercise('');
    setReps('');
    setTime('');
    setCategory('');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Mi Plan de Entrenamiento', 10, 10);
    workouts.forEach((workout, index) => {
      doc.text(`${index + 1}. ${workout.exercise} - ${workout.reps} repeticiones - ${workout.time} minutos (${workout.category})`, 10, 20 + (index * 10));
    });
    doc.save('rutina.pdf');
  };

  return (
    <Container>
      <h1 className="text-center">Planificación de Rutinas</h1>
      <p className="text-center">Desarrolla una rutina de ejercicios personalizada para alcanzar tus objetivos de fitness.</p>
      
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Ejercicio</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Nombre del ejercicio" 
                value={exercise} 
                onChange={(e) => setExercise(e.target.value)} 
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Repeticiones</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Número de repeticiones" 
                value={reps} 
                onChange={(e) => setReps(e.target.value)} 
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Tiempo (min)</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Duración en minutos" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Group>
              <Form.Label>Categoría</Form.Label>
              <Form.Control 
                as="select" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Selecciona una categoría</option>
                <option value="Fuerza">Fuerza</option>
                <option value="Cardio">Cardio</option>
                <option value="Flexibilidad">Flexibilidad</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button 
          style={{ backgroundColor: '#52BF04', borderColor: '#52BF04', color: 'white' }} 
          onClick={addWorkout} 
          className="mt-3 mr-7"
        >
          Agregar Ejercicio
        </Button>
        <Button 
          style={{ backgroundColor: '#3B7302', borderColor: '#3B7302', color: 'white' }} 
          onClick={exportToPDF} 
          className="mt-3 ml-3"
        >
          Exportar a PDF
        </Button>
      </Form>

      <h3 className="mt-5">Rutina Actual</h3>
      <ListGroup>
        {workouts.map((workout, index) => (
          <ListGroup.Item key={index}>
            {workout.exercise} - {workout.reps} repeticiones - {workout.time} minutos ({workout.category})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default WorkoutPlanner;
