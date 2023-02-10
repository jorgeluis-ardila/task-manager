import React from "react";
import { CompleteIcon, DeleteIcon } from "../IconsApp/Icons"
import item from './list.module.css'

export function ToDoItem(props) {
  return (
    <li
      className={`${item.item} ${props.completed ? item['item--complete'] : ''}`}
    >
      <div className={item['inner-container']}>
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p
          className={`${item.paragraf}`}
        >
          {`${props.text}`}
        </p>
        <DeleteIcon
          onDelete={props.onDelete}
        />
      </div>
    </li>
  );
}