// import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseConfig } from './config/firebase';
import { initializeApp } from 'firebase/app';
import App from './App';

if (window.location.pathname === '/') {
  window.location.replace('/app');
}

initializeApp(firebaseConfig);
//<React.StrictMode>

//</React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
