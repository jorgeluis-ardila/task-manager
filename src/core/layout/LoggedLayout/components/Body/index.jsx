import PropTypes from 'prop-types';
import { BodyWrapper } from './style';

const Body = ({ children }) => {
  return (
    <BodyWrapper>
      <div className="inner-body">{children}</div>
    </BodyWrapper>
  );
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Body };
