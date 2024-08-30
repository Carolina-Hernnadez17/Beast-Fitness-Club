import logo from './logo1.jpeg';
import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        
        <main className="container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AcercaDe" element={<AcercaDe />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Inscripcion" element={<Inscripcion />} />
            <Route path="/Login" element={<Login />} />
            <Route path='/Zumba' element={<Zumba />} />
            <Route path='/Pilates' element={<Pilates />} />
            <Route path='/Crossfit' element={<Crossfit />} />
            <Route path='/Spinning' element={<Spinning />} />
            <Route path= '/Contacatanos' element={<Contactanos/>} />
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