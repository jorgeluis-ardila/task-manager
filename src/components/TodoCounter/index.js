import React from "react";
import { ToDoContext } from "../TodoContext";
import counter from './counter.module.css';

function TodoCounter() {

  const { completedTodos, totalTodos } = React.useContext(ToDoContext);

  return (
    <h2 className={counter.title}>Has Completado {completedTodos} de {totalTodos} To Do's</h2>
  );
}

export { TodoCounter };