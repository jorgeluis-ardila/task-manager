import PropTypes from 'prop-types';
import { FieldWrapper, StyledInput } from './style';

const Input = ({ type, name, id, value, onBlur, onFocus, onChange, placeholder }) => {
  const handleChange = e => onChange(e.target.value);

  return (
    <FieldWrapper className="field-wrapper">
      <StyledInput
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
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
};

export { Input };
