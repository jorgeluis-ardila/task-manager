import PropTypes from 'prop-types';
import { FieldWrapper, StyledInput } from './style';
import { Icon, IconButton } from 'core/components';
import { useCallback, useState } from 'react';

const Password = ({ name, id, onBlur, onFocus, onChange, placeholder, className, disabled, variant, hasIcon }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = e => onChange(e.target.value);

  const handleShowPass = useCallback(() => setShowPassword(prevState => !prevState), []);

  return (
    <FieldWrapper className={className} variant={variant}>
      {hasIcon && <Icon type="password" />}
      <StyledInput
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        type={showPassword ? 'text' : 'password'}
        name={name}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
      />
      <IconButton
        type="button"
        className="showPass"
        iconType={showPassword ? 'hide' : 'show'}
        onClick={handleShowPass}
      />
    </FieldWrapper>
  );
};

Password.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  hasIcon: PropTypes.bool,
};

export { Password };
