import React from "react";
import { Context } from "../../utils/context";
import { Filters } from "../Filter";
import { TaskItem } from './TaskItem';
import { StatusMessage } from '../MessageLoading';
import list from './list.module.css'

function TaskList({children}) {
  const {
    filterTasks,
    deleteCompleted
  } = React.useContext(Context);

  return (
    <>
      <ul className={list.list}>
        {children}
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

export function StructureTaskList() {
  const {
    totalTasks,
    searchedTasks,
    completeTask,
    deleteTask,
  } = React.useContext(Context);

  return (
    totalTasks
      ? <>
          <Filters />
          <TaskList>
            {searchedTasks.map((task) => (
              <TaskItem
                key={task.key}
                text={task.text}
                completed={task.completed}
                onComplete={() => completeTask(task.text, task.key)}
                onDelete={() => deleteTask(task.text, task.key)}
              />
            ))}
          </TaskList>
        </>
      : <StatusMessage
          loading={false}
          type={'empty'}
          message={'¿Aun no tienes tareas creadas?'}
          highlihgt={'Que esperas para crearlas'}
        />
  );
}