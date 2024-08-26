import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BeastFitnessClub = () => {
  return (
    <div className="container beast-fitness-club">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="display-4 mb-4">Bienvenido a Beast Fitness Club</h1>
          <p className="lead">
            ¡Tu compañero perfecto para alcanzar tus objetivos de salud y bienestar!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <h2 className="h4">Rutinas Personalizadas</h2>
          <p>
            Descubre rutinas de entrenamiento que se adaptan a tus necesidades, diseñadas por profesionales.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h2 className="h4">Recetas Saludables</h2>
          <p>
            Encuentra recetas deliciosas y saludables que complementan tu estilo de vida fitness.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h2 className="h4">Consejos y Tips</h2>
          <p>
            Accede a tips y consejos que te ayudarán a mantenerte motivado y en el camino hacia tus metas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeastFitnessClub;
