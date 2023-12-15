import PropTypes from 'prop-types';
import { FieldWrapper, StyledTextArea } from './style';
import { useEffect, useRef } from 'react';

const TextArea = ({ name, id, value, placeholder, onBlur, onFocus, onChange, className, disabled, variant }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = e => onChange(e.target.value);

  return (
    <FieldWrapper className={className} variant={variant}>
      <StyledTextArea
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        ref={textareaRef}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        rows={1}
        disabled={disabled}
      />
    </FieldWrapper>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
};

export { TextArea };
