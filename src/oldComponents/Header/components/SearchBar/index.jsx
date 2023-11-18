import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SearchBarContainer from './style';
import { Icon } from '../../../../oldComponents/common';

const SearchBar = ({ searchValue, onChangeSearchValue }) => {
  const ref = useRef(null);

  const handleChange = event => {
    onChangeSearchValue(event.target.value);
  };

  return (
    <SearchBarContainer>
      <Icon type="search" />
      <input ref={ref} placeholder="Busca tu tarea" value={searchValue} onChange={handleChange} />
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  onChangeSearchValue: PropTypes.func,
};

export { SearchBar };
