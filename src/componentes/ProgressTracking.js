import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table, ProgressBar } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ProgressTracking = ({ userId }) => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goal, setGoal] = useState('');
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      if (userId) {
        const response = await fetch('http://localhost:5000/get-progress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        if (response.ok) {
          const data = await response.json();
          // Asegúrate de que las fechas y pesos estén en el formato correcto
          const formattedData = data.map(item => ({
            date: item.Date, // Asegúrate de que el campo coincida con tu base de datos
            weight: parseFloat(item.Weight), // Convierte a número
          }));
          setProgress(formattedData); // Actualiza el estado con los datos formateados
        } else {
          alert('Error al cargar el progreso');
        }
      }
    };

    fetchProgress();
  }, [userId]);

  const addProgress = async () => {
    const response = await fetch('http://localhost:5000/add-progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, date, weight }),
    });

    if (response.ok) {
      const newProgress = { date, weight: parseFloat(weight) };
      setProgress(prev => [...prev, newProgress]); // Actualiza el estado
      setDate('');
      setWeight('');
    } else {
      alert('Error al agregar progreso');
    }
  };

  const calculateBMI = () => {
    if (weight && height) {
      return (weight / ((height / 100) ** 2)).toFixed(2);
    }
    return '';
  };

  const data = {
    labels: progress.map(p => p.date),
    datasets: [
      {
        label: 'Peso',
        data: progress.map(p => p.weight),
        borderColor: '#52BF04',
        fill: false,
      },
    ],
  };

  const currentWeight = progress.length ? progress[progress.length - 1].weight : 0;
  const progressPercentage = goal ? ((currentWeight - goal) / goal) * 100 : 0;

  return (
    <Container>
      <h1 className="text-center">Seguimiento de Progreso</h1>
      <p className="text-center">Registra, observa tu progreso y como va tu meta de peso.</p>

      <Form>
        <Form.Group>
          <Form.Label>Fecha</Form.Label>
          <Form.Control 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Peso (kg)</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Ingresa tu peso" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Altura (cm)</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Ingresa tu altura" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
          />
        </Form.Group>
        <Button 
          variant="success" 
          style={{ backgroundColor: '#52BF04', borderColor: '#52BF04', color: 'white' }} 
          onClick={addProgress} 
          className="mt-3"
        >
          Agregar Progreso
        </Button>
      </Form>

      <h3 className="mt-5">Tu IMC: {calculateBMI()}</h3>

      <h3 className="mt-5">Progreso de Peso</h3>
      <Line data={data} />

      <h3 className="mt-5">Historial de Progreso</h3>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Peso (kg)</th>
          </tr>
        </thead>
        <tbody>
          {progress.map((p, index) => (
            <tr key={index}>
              <td>{p.date}</td>
              <td>{p.weight}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Form className="mt-5">
        <Form.Group>
          <Form.Label>Meta de Peso (kg)</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Ingresa tu meta de peso" 
            value={goal} 
            onChange={(e) => setGoal(e.target.value)} 
          />
        </Form.Group>
        <ProgressBar 
            now={progressPercentage} 
            label={`${progressPercentage.toFixed(2)}%`} 
            className="custom-progress-bar"
        />
      </Form>
    </Container>
  );
};

export default ProgressTracking;
