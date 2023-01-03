import React from "react";
import { Context } from "../../context";
import { ToDoItem } from './ToDoItem';
import list from './list.module.css'



function ToDoList() {
  const {
    searchedTasks,
    completeTask,
    deleteTask,
  } = React.useContext(Context);

  return (
    <div className={list['list-container']}>
      <ul className={list.list}>
        {searchedTasks.map((task, index) => (
          <ToDoItem
            key={index}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </ul>
    </div>
  );
}

export { ToDoList };