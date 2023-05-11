import React from "react";
import list from './list.module.css'

export function TaskList({
  children,
  searchedTasks,
  filterTasks,
  deleteCompleted,
  onRender
}) {

  const renderFn = children || onRender;

  return (
    <>
      <ul className={list.list}>
        {searchedTasks.map(renderFn)}
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
