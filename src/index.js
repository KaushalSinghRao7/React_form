import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you are using ReactDOM from 'react-dom/client'
import './index.css'; // Ensure this file exists and is correctly referenced
import App from './App'; // Ensure App component is correctly referenced
import reportWebVitals from './reportWebVitals'; // Ensure this file exists and is correctly referenced

// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance if desired
reportWebVitals(); // Optionally pass a function to log results or send to an analytics endpoint
