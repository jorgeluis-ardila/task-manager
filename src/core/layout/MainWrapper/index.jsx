import PropTypes from 'prop-types';
import cn from 'classnames';
import MainWrapperStyled from './style';

const MainWrapper = ({ isLogin, children }) => (
  <MainWrapperStyled className={cn({ login: isLogin })}>{children}</MainWrapperStyled>
);

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isLogin: PropTypes.bool,
};

export { MainWrapper };
