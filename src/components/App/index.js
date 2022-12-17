import React from 'react';
import { ToDoProvider } from '../../context/index.js';
import { AppUI } from './component.js';

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
