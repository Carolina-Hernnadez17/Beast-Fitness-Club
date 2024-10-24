import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import PersonalizedSuggestions from './componentes/PersonalizedSuggestions';
import Community from './componentes/Community';
import PlanDePerdidaDePeso from './componentes/PlanPerdidaDePeso';
import NutricionDeportiva from './componentes/NutricionDeportiva';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

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
            <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />} />
            <Route path="/Zumba" element={<Zumba />} />
            <Route path="/Pilates" element={<Pilates />} />
            <Route path="/Crossfit" element={<Crossfit />} />
            <Route path="/Spinning" element={<Spinning />} />
            <Route path="/Contacatanos" element={<Contactanos />} />
            <Route path="/workout-planner" element={<WorkoutPlanner />} />
            <Route path="/progress-tracking" element={<ProgressTracking />} />
            <Route path="/personalized-suggestions" element={<PersonalizedSuggestions />} />
            <Route path="/community" element={<Community />} />
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
