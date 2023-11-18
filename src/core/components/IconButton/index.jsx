import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from '../index';
import ButtonStyled from './style';

const IconButton = ({ onClick, type, className }) => {
  return (
    <ButtonStyled onClick={onClick} className={cn('icon-button', className)}>
      <Icon type={type} />
    </ButtonStyled>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export { IconButton };
