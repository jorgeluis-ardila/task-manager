import PropTypes from 'prop-types';
import AnonimousUser from 'assets/images/userAnonimus.png';
import { IconButton } from 'core';
import { FieldWrapper, StyledInput } from './style';
// import { forwardRef } from 'react';

const File = ({ name, id, value, onChange, className, disabled, fileRef }) => {
  const image = fileRef?.current?.files.length ? URL.createObjectURL(fileRef?.current?.files[0]) : AnonimousUser;

  const handleClick = e => fileRef?.current?.click();
  const handleChange = e => onChange(e.target.value);

  return (
    <FieldWrapper className={className}>
      <figure>
        <img src={image} alt="User" />
      </figure>
      <StyledInput
        ref={fileRef}
        type="file"
        name={name}
        id={id}
        value={value}
        disabled={disabled}
        onChange={handleChange}
      />
      {!disabled && <IconButton type="button" iconType="edit" onClick={handleClick} />}
    </FieldWrapper>
  );
};

File.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fileRef: PropTypes.object,
};

export { File };
