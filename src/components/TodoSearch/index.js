import React from "react";
import search from './search.module.css';

function TodoSearch({searchValue, setSearchValue}) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  };

  return (
    <input
      className={search['search-bar']}
      placeholder='¿Qué buscas hoy?'
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch }