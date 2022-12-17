import React from "react";
import { ToDoContext } from "../TodoContext";
import counter from './counter.module.css';

function TodoCounter(props) {

  const { completedTodos, totalTodos } = React.useContext(ToDoContext);

  return (
    <h2 className={counter.title}>{props.message ? props.message : `Has Completado ${completedTodos} de ${totalTodos} To Do's`}</h2>
  );
}

export { TodoCounter };