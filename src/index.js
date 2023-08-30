import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'; // Utilisez HashRouter au lieu de createHashRouter
import './index.scss';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
