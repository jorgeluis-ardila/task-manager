import React from "react";
import { Context } from "../../utils/context";
import button from './buttons.module.css'

export function ButtonCreate() {

  const {
    openModal,
    setOpenModal,
    setModalType,
  } = React.useContext(Context);
  
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