import React from 'react';
import StyledHeader from './style';
import { Greeting, SearchBar } from './components';
import { useData } from 'providers/context';

const Header = () => {
  const { searchTerm, onChangeSearchTerm, currentCategory, categoryActions } = useData();

  return (
    <StyledHeader>
      <Greeting
        userData={{}}
        onOpenProfile={() => null}
        onGoBack={categoryActions.open}
        isCategoryOpen={!!currentCategory}
      />
      <SearchBar searchValue={searchTerm} onChangeSearchValue={onChangeSearchTerm} />
    </StyledHeader>
  );
};

export { Header };
