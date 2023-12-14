import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseConfig } from './config/firebase';
import { initializeApp } from 'firebase/app';
import App from './App';
// import App from './App/old-index';
// import './index.css';

initializeApp(firebaseConfig);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
