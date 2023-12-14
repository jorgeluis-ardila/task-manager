import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { SearchBarContainer, InputStyled } from './style';
import { Icon, IconButton } from 'core';

const PLACEHOLDER = 'Que quieres buscar?';

const SearchBar = ({ searchValue, onChangeSearchValue }) => {
  const ref = useRef(null);

  const handleChange = event => {
    onChangeSearchValue(event.target.value);
  };

  const handleFocus = event => {
    event.target.placeholder = event.type === 'focus' ? '' : PLACEHOLDER;
  };

  const handleClear = () => {
    onChangeSearchValue('');
  };

  return (
    <SearchBarContainer>
      <Icon type="search" className="search-icon" />
      <InputStyled
        type="text"
        name="searchBar"
        ref={ref}
        placeholder={PLACEHOLDER}
        value={searchValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleFocus}
        autoComplete="off"
      />
      {searchValue && <IconButton iconType="cancel" onClick={handleClear} className="clear-button" />}
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  onChangeSearchValue: PropTypes.func,
};

export { SearchBar };
