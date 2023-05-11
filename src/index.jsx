import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseConfig } from './utils/config/configFirebase';
import { initializeApp } from 'firebase/app';
import App from './App';
import './index.css';

initializeApp(firebaseConfig);

const container = document.getElementById('root'),
      root = ReactDOM.createRoot(container);

root.render(
  <App />
);

