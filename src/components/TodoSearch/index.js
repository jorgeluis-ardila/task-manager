import React from "react";
import { ToDoContext } from "../../context";
import search from './search.module.css';

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(ToDoContext);

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

export { TodoSearch }