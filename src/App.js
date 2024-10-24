import logo from './logo1.jpeg';
import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './componentes/Home';
import AcercaDe from './componentes/AcercaDe';
import Footer from './componentes/Footer';
import Services from './componentes/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inscripcion from './componentes/Inscripcion';
import Zumba from './componentes/Zumba';
import Login from './componentes/Login';
import Pilates from './componentes/Pilates';
import Crossfit from './componentes/Crossfit';
import Spinning from './componentes/Spinning';
import Contactanos from './componentes/Contactanos';
import WorkoutPlanner from './componentes/WorkoutPlanner';
import ProgressTracking from './componentes/ProgressTracking';
import Community from './componentes/Community';
import PlanDePerdidaDePeso from './componentes/PlanPerdidaDePeso';
import NutricionDeportiva from './componentes/NutricionDeportiva';

// Componente de protección de rutas (Ruta privada)
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('userId'); // Verifica si hay un usuario autenticado

  if (!isLoggedIn) {
    return <Navigate to="/Login" />; // Redirige al login si no está autenticado
  }

  return children; // Si está autenticado, muestra el componente solicitado
};

function App() {
  const [userId, setUserId] = useState(localStorage.getItem('userId')); // Inicializa el estado con userId de localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(!!userId);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      setIsLoggedIn(true); // Asegúrate de que isLoggedIn se actualice si hay un userId
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userEmail={userEmail} />
        </header>
        
        <main className="container my-4">
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/AcercaDe" element={<AcercaDe />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Inscripcion" element={<Inscripcion />} />
            <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} setUserId={setUserId} />} />
            <Route path="/Zumba" element={<Zumba />} />
            <Route path="/Pilates" element={<Pilates />} />
            <Route path="/Crossfit" element={<Crossfit />} />
            <Route path="/Spinning" element={<Spinning />} />
            <Route path="/Contactanos" element={<Contactanos />} />

            {/* Rutas protegidas que requieren inicio de sesión */}
            <Route 
              path="/workout-planner" 
              element={
                <PrivateRoute>
                  <WorkoutPlanner userId={userId} /> {/* Asegúrate de pasar userId aquí */}
                </PrivateRoute>
              }
            />
            <Route 
              path="/progress-tracking" 
              element={
                <PrivateRoute>
                  <ProgressTracking userId={userId} /> {/* Asegúrate de pasar userId aquí */}
                </PrivateRoute>
              }
            />
            <Route 
              path="/community" 
              element={
                <PrivateRoute>
                  <Community userId={userId} /> {/* Asegúrate de pasar userId aquí */}
                </PrivateRoute>
              }
            />
            <Route path="/NutricionDeportiva" element={<NutricionDeportiva />} />
            <Route path="/PlanDePerdidaDePeso" element={<PlanDePerdidaDePeso />} />
          </Routes>
        </main>
        
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
