import React from 'react';
import StyledHeader from './style';
import { Greeting, SearchBar } from './components';
import { useStore } from '../../../../providers/context';

const Header = () => {
  const { searchTerm, onChangeSearchTerm, currentCategory, onOpenCategory } = useStore();

  return (
    <StyledHeader>
      <Greeting userData={{}} onOpenProfile={() => null} onGoBack={onOpenCategory} isCategoryOpen={!!currentCategory} />
      <SearchBar searchValue={searchTerm} onChangeSearchValue={onChangeSearchTerm} />
    </StyledHeader>
  );
};

export { Header };
