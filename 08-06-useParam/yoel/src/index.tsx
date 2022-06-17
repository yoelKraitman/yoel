import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from './Router'; // we add that for the Routes 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* we need to change the App => Router (because we want to first thing you gonna "look" it's gonna be thr Routes) */}
    <Router />
  </React.StrictMode>
);
reportWebVitals();
