import PropTypes from 'prop-types';
import MainWrapperStyled from './style';

const MainWrapper = ({ className, children }) => (
  <MainWrapperStyled className={className}>{children}</MainWrapperStyled>
);

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { MainWrapper };
