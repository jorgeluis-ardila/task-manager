import React from "react";
import { Context } from "../../context";
import filter from "./filter.module.css"

function FilterButton({
  setIsActive,
  isActive,
  filterState,
  text,
}) {
  const {
    setFilterTodos
  } = React.useContext(Context);

  const onClickButton = (e) => {
    setFilterTodos(filterState);
    [...e.target.parentElement.children].forEach(sibling => sibling.classList.remove(filter.active))
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

function FilterContainer() {

  // const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={filter.container}>
      <FilterButton
        // setIsActive={setIsActive}
        isActive={true}
        text={'Todos'}
      />
      <FilterButton
        // setIsActive={setIsActive}
        // isActive={isActive}
        filterState={'active'}
        text={'Activos'}
      />
      <FilterButton
        // setIsActive={setIsActive}
        // isActive={isActive}
        filterState={'complete'}
        text={'Completados'}
      />
    </div>
  );
}

export { FilterContainer };