import React from "react";
import ReactDOM from 'react-dom';
import modal from './modal.module.css'

const container = document.getElementById('modal')

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className={modal.background}>
      {children}
    </div>,
    container
  );
}

export { Modal }
