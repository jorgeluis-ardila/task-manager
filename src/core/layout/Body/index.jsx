import PropTypes from 'prop-types';
import { BodyWrapper } from './style';

const Body = ({ children, className }) => {
  return (
    <BodyWrapper className={className}>
      <div className="inner-body">{children}</div>
    </BodyWrapper>
  );
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Body };
