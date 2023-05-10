import React from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { Context } from '../../utils/context';
import modal from './modal.module.css'

const container = document.getElementById('modal');

export function Modal({ children }) {
  const {
    openModal,
    closeModal
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
        onClose={closeModal}
        className={`${modal.background}`}
        onClick={closeModal}
      >
        <div
          className={modal.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={modal['inner-modal']}
          >
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>,
    container
  );
}
