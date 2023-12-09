import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from '../index';
import ButtonStyled from './style';

const IconButton = ({ type, onClick, iconType, className, variant, disabled }) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      variant={variant}
      className={cn('icon-button', className)}
      disabled={disabled}
    >
      <Icon type={iconType} />
    </ButtonStyled>
  );
};

IconButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  iconType: PropTypes.string.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

export { IconButton };
