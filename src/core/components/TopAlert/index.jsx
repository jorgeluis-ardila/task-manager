import { useRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { IconButton, TransitionWrapper } from '..';
import { AlertWrapper } from './style';

const TopAlert = ({ show, text, onClose }) => {
  const nodeRef = useRef(null);
  return createPortal(
    <TransitionWrapper open={show} nodeRef={nodeRef} classNames="alet-message" unmountOnExit>
      <AlertWrapper tabIndex="-1" ref={nodeRef} onClose={onClose} className="alet-message">
        {text}
        <IconButton iconType="cancel" onClick={onClose} />
      </AlertWrapper>
    </TransitionWrapper>,
    document.body
  );
};

TopAlert.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string,
  onClose: PropTypes.func,
};

export { TopAlert };
