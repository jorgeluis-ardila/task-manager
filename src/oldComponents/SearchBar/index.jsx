import React, { useRef } from "react";
import { SearchIcon } from "../IconsApp/Icons";
import search from './search.module.css';

export function SearchBar({
  searchValue,
  setSearchValue
}) {

  const ref = useRef(null);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <div className={search.containter}>
      <input
        ref={ref}
        className={search['bar']}
        placeholder='Busca tu tarea'
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <SearchIcon
        onSearch={handleClick}
        className={search.icon}
        classNameSvg={search['svg-trigger']}
      />
    </div>
  );
}