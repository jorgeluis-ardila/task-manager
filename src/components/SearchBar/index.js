import React from "react";
import { Context } from "../../context";
import search from './search.module.css';

function SearchBar() {

  const { searchValue, setSearchValue } = React.useContext(Context);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className={search['bar']}
      placeholder='¿Qué buscas hoy?'
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { SearchBar }