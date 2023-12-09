import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { onKeyUp } from '../../../utils';
import { CSSTransition } from 'react-transition-group';
import ModalStyled from './style';
import { useStore } from '../../../providers/context';

const Modal = () => {
  const { isModalOpen, modalData, onCloseModal } = useStore();
  const nodeRef = useRef(null);

  const handleKeyDown = e => {
    onKeyUp(e, 27, onCloseModal);
  };

  return createPortal(
    <CSSTransition
      in={isModalOpen}
      nodeRef={nodeRef}
      timeout={300}
      classNames={{
        enter: 'background--enter',
        enterActive: 'background--enter-active',
        enterDone: 'background--enter-done',
        exit: 'background--exit',
        exitActive: 'background--exit-active',
      }}
      unmountOnExit
    >
      <ModalStyled
        tabIndex="0"
        ref={nodeRef}
        onClose={onCloseModal}
        className="background"
        onClick={onCloseModal}
        onKeyDownCapture={handleKeyDown}
        type={modalData.type}
      >
        <div className="modal-container" onClick={e => e.stopPropagation()}>
          <div className="inner-modal-container">{modalData.content}</div>
        </div>
      </ModalStyled>
    </CSSTransition>,
    document.body
  );
};

export { Modal };
