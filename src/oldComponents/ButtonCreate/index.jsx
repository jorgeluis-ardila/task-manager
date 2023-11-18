import React from "react";
import button from './buttons.module.css'

export function ButtonCreate({
  openModal,
  setOpenModal,
  setModalType,
  storageChange,
}) {

  const onClickButton = () => {
    setOpenModal(!openModal);
    setModalType('create');
  };

  return (
    <button
      className={`${button.create} ${storageChange ? button.disabled : ''}`}
      onClick={onClickButton}
      disabled={storageChange}
    >
      Agregar nueva tarea
    </button>
  );
}