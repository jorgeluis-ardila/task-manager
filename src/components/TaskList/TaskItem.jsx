import React from "react";
import { CompleteIcon, DeleteIcon } from "../IconsApp/Icons"
import item from './list.module.css'

export function TaskItem({
  text,
  completed,
  onComplete,
  onDelete,
  storageChange
}) {
  return (
    <li
      className={`${item.item} ${(completed) ? item['item--complete'] : ''} ${(storageChange) ? item['item--disabled'] : ''}`}
    >
      <div className={item['inner-container']}>
        <CompleteIcon
          completed={completed}
          onComplete={onComplete}
        />
        <p
          className={`${item.paragraf}`}
        >
          {`${text}`}
        </p>
        <DeleteIcon
          onDelete={onDelete}
        />
      </div>
    </li>
  );
}