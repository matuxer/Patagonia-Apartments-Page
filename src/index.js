import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* Se crea la raiz del proyecto dentro del div 'root' */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Se renderiza el proyecto dentro del componente 'root' */
root.render(
  <React.StrictMode>
    {/* Es llamado el elemento App */}
    <App />
  </React.StrictMode>
);

