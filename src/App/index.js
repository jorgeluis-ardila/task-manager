import React from 'react';
import { ToDoProvider } from '../utils/context';
import { AppUI } from './AppUi.js';

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
