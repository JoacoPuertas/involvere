import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Sección principal */}
      <header className="header">
        <h1 className="title">DEFENDÉ LO QUE ES NUESTRO</h1>
        <p className="subtitle">
        Donde el motor no se apaga, el futuro se aprende
        </p>
      </header>

      {/* Call to Action */}
      <div className="cta">
        <a
          href="https://endearing-sunshine-06df35.netlify.app/" // Cambia esto por tu enlace
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Jugar Ahora!
        </a>
      </div>

      {/* Pie de página */}
      <footer className="footer">
        <p>© 2024 Hologramas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
