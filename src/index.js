import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/assets/scss/global.scss';
import SimpleApp from './SimpleApp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SimpleApp />
  </BrowserRouter>
);

// basename="/react/55 Systems"
// "homepage": "https://themes.potenzaglobalsolutions.com/react/55 Systems/"
reportWebVitals();
