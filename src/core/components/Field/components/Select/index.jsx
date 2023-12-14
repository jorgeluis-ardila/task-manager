import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useOutsideClick } from 'hooks';
import { Icon } from 'core/components';
import { FieldWrapper, StyledInput, StyledSelectValue } from '../style';
import { MenuSelect } from './MenuSelect';
import { positionStyles } from './constants';

const Select = ({ name, id, value, onChange, onFocus, onBlur, options, parentRef }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Selecciona una Categoría');
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
    setShowMenu(prevState => !prevState);
    inputRef.current.focus();
  };

  const handleChange = option => {
    onChange(option ? String(option.value) : '');
    setSelectedValue(option ? option.label : 'Selecciona una Categoría');
  };

  return (
    <FieldWrapper ref={wrapperRef} title={selectedValue} className="field-wrapper" onClick={handleClick}>
      <StyledSelectValue>
        <span className="current-value">{selectedValue}</span>
        <Icon type="arrow" />
        <StyledInput
          ref={inputRef}
          type="text"
          name={name}
          id={id}
          onFocus={onFocus}
          onBlur={onBlur}
          defaultValue={value}
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
};

export { Select };
