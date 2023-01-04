import React from "react";
import button from './buttons.module.css'

function ButtonCreate(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
  };

  return (
    <button
      className={button.create}
      onClick={onClickButton}
    >
      Agregar nueva tarea
    </button>
  );
}

export { ButtonCreate }