import React from "react";
import button from './buttons.module.css'

function ButtonCreate(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button 
      className={`${button.create} ${props.openModal ? button.close : ''}`}
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { ButtonCreate }