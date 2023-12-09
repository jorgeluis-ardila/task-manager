import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = ({ type, onClick, className, children, variant, disabled }) => {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

export { Button };
