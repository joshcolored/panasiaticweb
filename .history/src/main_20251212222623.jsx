import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async'
import './styles/index.css';
console.log("React is mounting...");
ReactDOM?.createRoot(document.getElementById('root'))?.render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
  </HelmetProvider>
  </React.StrictMode>
);
