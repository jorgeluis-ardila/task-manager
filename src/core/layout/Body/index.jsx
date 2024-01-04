import PropTypes from 'prop-types';
import cn from 'classnames';
import { BodyWrapper } from './style';

const Body = ({ children, isLogin }) => {
  return (
    <BodyWrapper className={cn({ login: isLogin })}>
      <div className="inner-body">{children}</div>
    </BodyWrapper>
  );
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
  isLogin: PropTypes.bool,
};

export { Body };
