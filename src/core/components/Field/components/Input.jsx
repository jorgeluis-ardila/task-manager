import PropTypes from 'prop-types';
import { FieldWrapper, StyledInput } from './style';
import { Icon } from 'core/components';

const Input = ({
  type,
  name,
  id,
  value,
  onBlur,
  onFocus,
  onChange,
  placeholder,
  className,
  disabled,
  variant,
  hasIcon,
}) => {
  const handleChange = e => onChange(e.target.value);

  return (
    <FieldWrapper className={className} variant={variant}>
      {hasIcon && <Icon type={name} />}
      <StyledInput
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FieldWrapper>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  hasIcon: PropTypes.bool,
};

export { Input };
