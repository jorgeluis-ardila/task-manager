import React from 'react';
import { ToDoIcon } from './index.jsx';

function CompleteIcon({ completed, onComplete }) {
  return (
    <ToDoIcon
      type={completed ? "check" : "uncheck"}
      onClick={onComplete}
    />
  );
}

function DeleteIcon({ onDelete }) {
  return (
    <ToDoIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

function FilterIcon({ onClick, className, classNameSvg }) {
  return (
    <ToDoIcon
      type="filter"
      onClick={onClick}
      className={className}
      classNameSvg={classNameSvg}
    />
  );
}

function SearchIcon({ onSearch, className, classNameSvg }) {
  return (
    <ToDoIcon
      type="search"
      onClick={onSearch}
      className={className}
      classNameSvg={classNameSvg}
    />
  );
}

export { CompleteIcon, DeleteIcon, FilterIcon, SearchIcon };
