import React, { useRef } from 'react';
import cn from 'classnames';
import { createPortal } from 'react-dom';
import { onKeyUp } from 'utils';
import { useModal } from 'providers/context';
import { TransitionWrapper } from 'core/components';
import ModalStyled from './style';

const Modal = () => {
  const { isModalOpen, modalContent, modalActions } = useModal();
  const nodeRef = useRef(null);

  const handleKeyDown = e => {
    onKeyUp(e, 27, modalActions.close);
  };

  return createPortal(
    <TransitionWrapper open={isModalOpen} nodeRef={nodeRef} classNames="background" unmountOnExit>
      <ModalStyled
        tabIndex="-1"
        ref={nodeRef}
        onClose={modalActions.close}
        className="background"
        onClick={modalActions.close}
        onKeyDown={handleKeyDown}
        type={modalContent.type}
      >
        <div
          className={cn('modal-container', { 'modal-container--changed': modalContent.hasChanged })}
          onClick={e => e.stopPropagation()}
        >
          <div className="inner-modal-container">{modalContent.content}</div>
        </div>
      </ModalStyled>
    </TransitionWrapper>,
    document.body
  );
};

export { Modal };
