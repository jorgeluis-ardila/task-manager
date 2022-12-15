import React from "react";
import { ToDoContext } from "../TodoContext";
import { TodoItem } from './TodoItem';
import listContainer from './list.module.css'

function MessageLoading(props) {
  return <p className={listContainer['loading-state']}>{props.message}</p>
}

function TodoList() {
  const {
    loading,
    error,
    searchTodos,
    findIndex,
    completeTodo,
    deleteTodo,
  } = React.useContext(ToDoContext);

  return (
    <section>
      {
        loading || error
          ? <MessageLoading
            message={loading ? 'Estamos cargando ...' : 'Hubo un error!'}
          />
          : !searchTodos.length
            ? <MessageLoading
              message={'Crea tu primer To Do'}
            />
            : <ul className={listContainer.list}>
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
      }
    </section>
  );
}

export { TodoList };