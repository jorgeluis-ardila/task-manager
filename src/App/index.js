import React from 'react';
import { ToDoProvider } from '../components/TodoContext/index.js';
import { AppUI } from './AppUI.js';

/* const defaultTodos = [
  {text: 'Lavar Loza', completed: false },
  {text: 'Bañarme', completed: true },
  {text: 'Limpiar Jaula Carlota', completed: false },
  {text: 'Lorem imsum ', completed: false },
  {text: 'Sacar a Kaz', completed: false },
  {text: 'Tender Cama', completed: false },
] */

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
