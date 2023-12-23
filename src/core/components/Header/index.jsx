import React from 'react';
import StyledHeader from './style';
import { Greeting, SearchBar } from './components';
import { useData } from 'providers/context';

const Header = () => {
  const { searchTerm, onChangeSearchTerm, defineCurrentCategory, defineCurrentTask } = useData();

  const handleGoBack = () => {
    defineCurrentCategory();
    defineCurrentTask();
  };

  return (
    <StyledHeader>
      <Greeting userData={{}} onGoBack={handleGoBack} onOpenProfile={() => null} />

      <SearchBar searchValue={searchTerm} onChangeSearchValue={onChangeSearchTerm} />
    </StyledHeader>
  );
};

export { Header };
