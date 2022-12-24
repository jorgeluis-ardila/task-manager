import React from "react";
import { CompleteIcon } from "../../IconsApp/CompleteIcon"
import { DeleteIcon } from "../../IconsApp/DeleteIcon";
import item from '../list.module.css'

function ToDoItem(props) {
  return (
    <li 
      className={item.item}
    >
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`${item.paragraf} ${props.completed && item['paragraf--completed']}`}>{`${props.text}`}</p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { ToDoItem }