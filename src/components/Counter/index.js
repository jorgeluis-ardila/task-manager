import React from "react";
import { Context } from "../../context";
import counter from './counter.module.css';

function Counter(props) {

  const { completedTodos, totalTodos } = React.useContext(Context);

  return (
    <h2 className={counter.title}>{props.message ? props.message : `Has Completado ${completedTodos} de ${totalTodos} To Do's`}</h2>
  );
}

export { Counter };