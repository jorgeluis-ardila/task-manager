import React from "react";
import button from './buttons.module.css'

export function ButtonCreate({
  openModal,
  setOpenModal,
  setModalType
}) {

  const onClickButton = () => {
    setOpenModal(!openModal);
    setModalType('create');
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