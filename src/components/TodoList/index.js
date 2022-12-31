import React from "react";
import { Context } from "../../context";
import { ToDoItem } from './ToDoItem';
import listContainer from './list.module.css'



function ToDoList() {
  const {
    searchTodos,
    findIndex,
    completeTodo,
    deleteTodo,
  } = React.useContext(Context);

  return (
    <ul className={listContainer.list}>
      {searchTodos.map(todo => (
        <ToDoItem
          index={findIndex(todo.text)}
          key={findIndex(todo.text)}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </ul>
  );
}

export { ToDoList };