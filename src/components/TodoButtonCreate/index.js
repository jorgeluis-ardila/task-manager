import React from "react";
import button from './buttons.module.css'

function TodoButtonCreate(props) {
  const addNewTask = (msg) => {
    alert(msg)
  };

  return (
    <button 
      className={button['button-create']}
      onClick={() => addNewTask('ABRIR MODAL DE CREACION')}
    >
      +
    </button>
  );
}

export { TodoButtonCreate }