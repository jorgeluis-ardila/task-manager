import React from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { Context } from '../../context';
import modal from './modal.module.css'

const container = document.getElementById('modal');

function Modal({ children }) {
  const {
    openModal,
    setOpenModal,
  } = React.useContext(Context);

  const nodeRef = React.useRef(null);

  return ReactDOM.createPortal(
    <CSSTransition
      in={openModal}
      nodeRef={nodeRef}
      timeout={300}
      classNames={{
        enter: modal['background-enter'],
        enterActive: modal['background-enter-active'],
        enterDone: modal['background-enter-done'],
        exit: modal['background-exit'],
        exitActive: modal['background-exit-active'],
      }}
      unmountOnExit
    >
      <div
        ref={nodeRef}
        onClose={() => setOpenModal(false)}
        className={`${modal.background}`}
      >
        {children}
      </div>
    </CSSTransition>,
    container
  );
}

export { Modal }
