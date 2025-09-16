import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/assets/scss/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// basename="/react/55 Systems"
// "homepage": "https://themes.potenzaglobalsolutions.com/react/55 Systems/"
reportWebVitals();
