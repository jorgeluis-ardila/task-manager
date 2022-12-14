import React from "react";
import item from '../list.module.css'

function TodoItem(props) {
  return (  
    <li 
      className={item.item}
    >
      <span 
        className={`${item.icon} ${item['icon-check']} ${props.completed && item['icon-check--active']}`}
        onClick={props.onComplete}
      >
        &#10003;
      </span>
      <p className={`${item.paragraf} ${props.completed && item['paragraf--completed']}`}>{`${props.text} ${props.index}`}</p>
      <span 
        className={`${item.icon} ${item['icon-delete']}`}
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem }