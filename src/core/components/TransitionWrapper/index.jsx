import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const TransitionWrapper = ({ children, open, nodeRef, classNames, key, unmountOnExit }) => {
  const handleOnEntered = () => () => nodeRef.current.focus();

  return (
    <CSSTransition
      key={key}
      in={open}
      nodeRef={nodeRef}
      timeout={300}
      classNames={classNames}
      unmountOnExit={unmountOnExit}
      onEntered={handleOnEntered}
    >
      {children}
    </CSSTransition>
  );
};

TransitionWrapper.propTypes = {
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  open: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string.isRequired,
  nodeRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.object })]),
};

export { TransitionWrapper };
