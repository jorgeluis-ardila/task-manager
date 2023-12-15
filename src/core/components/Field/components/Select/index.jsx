import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { findIndex } from 'utils';
import { useOutsideClick } from 'hooks';
import { IconButton } from 'core/components';
import { positionStyles } from './constants';
import { MenuSelect } from './MenuSelect';
import { FieldWrapper, StyledInput, StyledSelectValue } from '../style';

const Select = ({ name, id, value, onChange, onFocus, onBlur, options, className, disabled, variant }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    options[findIndex(options, value, 'value')]?.label ?? 'Selecciona una Categoría'
  );
  const [styles, setStyles] = useState();
  const inputRef = useRef(null);
  const menuRef = useRef(null);

  const handleClickOutside = () => {
    setShowMenu(false);
    inputRef.current.blur();
  };

  const wrapperRef = useOutsideClick(handleClickOutside);

  useEffect(() => {
    if (menuRef.current) {
      const inputRect = wrapperRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - inputRect.bottom;

      const menuHeight = menuRef.current.offsetHeight;
      if (spaceBelow < menuHeight) {
        setStyles(positionStyles.above);
      } else {
        setStyles(positionStyles.bellow);
      }
    }
  }, [showMenu, options, wrapperRef]);

  const handleClick = () => {
    if (showMenu) {
      inputRef.current.blur();
    } else {
      inputRef.current.focus();
    }
    setShowMenu(prevState => !prevState);
  };

  const handleChange = option => {
    onChange(option ? String(option.value) : '');
    setSelectedValue(option ? option.label : 'Selecciona una Categoría');
  };

  return (
    <FieldWrapper
      ref={wrapperRef}
      title={selectedValue}
      className={className}
      onClick={() => !disabled && handleClick()}
      variant={variant}
    >
      <StyledSelectValue className="value">
        <span className="current-value">{selectedValue}</span>
        <IconButton type="button" iconType="arrow" />
        <StyledInput
          ref={inputRef}
          type="text"
          name={name}
          id={id}
          onFocus={onFocus}
          onBlur={onBlur}
          defaultValue={value}
          disabled={disabled}
        />
      </StyledSelectValue>
      {showMenu && (
        <MenuSelect
          ref={menuRef}
          options={options}
          styles={styles}
          onClick={handleChange}
          selectedValue={selectedValue}
        />
      )}
    </FieldWrapper>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.array.isRequired,
  parentRef: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
};

export { Select };
