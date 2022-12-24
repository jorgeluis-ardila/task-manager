import React from 'react';
import { ReactComponent as CheckSVG } from './icons/check.svg';
import { ReactComponent as DeleteSVG } from './icons/delete.svg';
import icon from './icon.module.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className={`${icon.svg} ${icon['svg--check']}`} fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className={`${icon.svg} ${icon['svg--delete']}`} fill={color} />
  ),
};

function ToDoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`${icon.container} ${icon[`container--${type}`]}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { ToDoIcon };
