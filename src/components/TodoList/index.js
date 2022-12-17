import React from "react";
import { ToDoContext } from "../TodoContext";
import { TodoItem } from './TodoItem';
import listContainer from './list.module.css'

function TodoList() {
  const {
    searchTodos,
    findIndex,
    completeTodo,
    deleteTodo,
  } = React.useContext(ToDoContext);

  return (
    <section>
      <ul className={listContainer.list}>
          {searchTodos.map(todo => (
            <TodoItem
              index={findIndex(todo.text)}
              key={findIndex(todo.text)}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </ul>
    </section>
  );
}

export { TodoList };