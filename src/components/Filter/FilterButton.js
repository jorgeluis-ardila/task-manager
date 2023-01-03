import React from "react";
import { Context } from "../../context";
import filter from "./filter.module.css"

function FilterButton({
  isActive,
  filterState,
  text,
}) {
  const {
    setFilterTasks
  } = React.useContext(Context);

  const onClickButton = (e) => {
    setFilterTasks(filterState);
    [...e.target.parentElement.children].forEach(sibling => sibling.classList.remove(filter.active));
    e.target.classList.add(filter.active);
  };

  return (
    <button
      onClick={onClickButton}
      className={`${isActive ? filter.active : ''} ${filter.button}`}
    >
      {text}
    </button>
  );
}

function FilterDropdown({
  buttons
}) {
  return (
    <div className={filter.container}>
      {buttons.map((button, index) => (
        button
      ))}
    </div>
  );
}

export { FilterButton, FilterDropdown }