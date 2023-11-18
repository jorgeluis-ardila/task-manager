import React, { useRef } from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { onKeyUp } from "../../utils";
import modal from './modal.module.css'

const container = document.getElementById('modal');

export function Modal({
  children,
  openModal,
  closeModal
}) {

  const nodeRef = useRef(null);

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
        onKeyDownCapture={(e) => onKeyUp(e, 'esc', closeModal)}
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
