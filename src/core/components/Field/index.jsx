import { useRef, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { InputMessage } from 'core/components';
import { fieldsList, fieldProps } from './constants';
import { MessageWrapper, Wrapper } from './style';

const Field = ({
  variant = 'default',
  as = 'default',
  label,
  type,
  id,
  name,
  placeholder,
  disabled = false,
  options,
  hasIcon = false,
  helperText,
  max,
  className,
  fileRef,
}) => {
  const { validateOnMount } = useFormikContext();
  const [field, meta, helpers] = useField({ name });
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef(null);
  const showFeedback = (validateOnMount && meta.error) || (isFocused && field.value.trim().length > 0) || meta.touched;
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
  const fieldComponentProps = fieldProps({ type, options, wrapperRef, hasIcon, fileRef });

  return (
    <Wrapper
      ref={wrapperRef}
      variant={variant}
      className={cn('form-field', className, {
        error: showFeedback && meta.error,
        focused: isFocused,
        filled: meta.value,
        file: as === 'file',
      })}
      hasIcon={hasIcon}
    >
      {label && <label htmlFor={id || name}>{label}</label>}
      <FieldComponent
        variant={variant}
        name={name}
        id={id}
        value={meta.value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        className={cn('field-wrapper', className, {
          disabled: disabled,
          select: as === 'select',
          textarea: as === 'textarea',
          password: as === 'password',
          file: as === 'file',
        })}
        {...fieldComponentProps[as]}
      />
      {!disabled && ((showFeedback && meta.error) || !!helperText || !!max) && (
        <MessageWrapper>
          {showFeedback && meta.error && (
            <InputMessage className="input-message" variant="error">
              {meta.error}
            </InputMessage>
          )}
          {(!!helperText || !!max) && (
            <InputMessage className="input-message">{!!max ? `${meta.value?.length}/${max}` : helperText}</InputMessage>
          )}
        </MessageWrapper>
      )}
    </Wrapper>
  );
};

Field.propTypes = {
  variant: PropTypes.string,
  as: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  hasIcon: PropTypes.bool,
  helperText: PropTypes.string,
  max: PropTypes.number,
  className: PropTypes.string,
  fileRef: PropTypes.object,
};

export { Field };
