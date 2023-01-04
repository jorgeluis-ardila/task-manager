import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

const container = document.getElementById('root'),
      root = ReactDOM.createRoot(container);
container.style.height = `${document.documentElement.clientHeight}px`;
root.render(
  <App />
);

