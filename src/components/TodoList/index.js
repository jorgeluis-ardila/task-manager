import React from "react";
import { Context } from "../../context";
import { ToDoItem } from './ToDoItem';
import list from './list.module.css'



export function ToDoList() {
  const {
    filterTasks,
    searchedTasks,
    completeTask,
    deleteTask,
    deleteCompleted
  } = React.useContext(Context);

  return (
    <>
      <ul className={list.list}>
        {searchedTasks.map((task, index) => (
          <ToDoItem
            key={task.key}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text, task.key)}
            onDelete={() => deleteTask(task.text, task.key)}
          />
        ))}
      </ul>
      {filterTasks === 'complete' &&
        <button
          onClick={deleteCompleted}
          className={list['delete-completed']}
        >
          Borrar Tareas Completadas
        </button>
      }
    </>
  );
}