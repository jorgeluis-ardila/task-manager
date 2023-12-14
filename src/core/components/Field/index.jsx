import { useRef, useState } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { StyledMessageWrapper, StyledWrapper } from './style';
import { Icon, InputMessage } from 'core/components';
import { fieldsList, fieldProps } from './constans';

const Field = ({ variant, as = 'default', label, icon, helperText, max, type, id, name, options }) => {
  const [field, meta, helpers] = useField({ name });
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef(null);
  const showFeedback = (!!isFocused && field.value.trim().length > 2) || meta.touched;

  const handleFocus = e => {
    setIsFocused(true);
  };
  const handleBlur = e => {
    field.onBlur(e);
    setIsFocused(false);
  };

  const handleChange = value => {
    helpers.setValue(value);
  };

  const FieldComponent = fieldsList[as];
  const fieldComponentProps = fieldProps({ type, options, wrapperRef });

  return (
    <StyledWrapper
      ref={wrapperRef}
      variant={variant}
      className={cn('form-field', { error: showFeedback && meta.error, focused: isFocused })}
    >
      <label htmlFor={id || name}>{label}</label>
      {icon && <Icon type={icon} />}
      <FieldComponent
        name={name}
        id={id}
        value={meta.value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...fieldComponentProps[as]}
      />
      <StyledMessageWrapper>
        {showFeedback && meta.error && (
          <InputMessage className="input-message" variant="error">
            {meta.error}
          </InputMessage>
        )}
        {(!!helperText || !!max) && (
          <InputMessage className="input-message">{!!max ? `${meta.value.length}/${max}` : helperText}</InputMessage>
        )}
      </StyledMessageWrapper>
    </StyledWrapper>
  );
};

Field.propTypes = {
  variant: PropTypes.string,
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  max: PropTypes.number,
  options: PropTypes.array,
};

export { Field };
