import React from "react";
import counter from './counter.module.css';

let todosCompletados = 2,
    totalTodos = 3

function TodoCounter({ total, completed }) {
  return (
    <h2 className={counter.title}>Has Completado {completed} de {total} To Do's</h2>
  );
}

export { TodoCounter };