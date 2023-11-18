import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = ({ onClick, className, children, variant }) => {
  return (
    <StyledButton variant={variant} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  onClick: PropTypes.func,
};

export { Button };
