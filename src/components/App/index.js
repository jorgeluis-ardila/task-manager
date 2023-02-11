import React from 'react';
import { ToDoProvider } from '../../context/index.js';
import { AppUI } from './component.js';

function App() {
  return (
    <React.StrictMode>
      <ToDoProvider>
        <AppUI />
      </ToDoProvider>
    </React.StrictMode>
  );
}

export default App;
