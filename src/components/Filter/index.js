import React from "react";
import { SearchBar } from "../SearchBar";
import { FilterButton, FilterDropdown } from "./FilterButton";
import filter from "./filter.module.css";

function Filters() {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleTrigger = () => {
    setIsOpen(prevState => !prevState)
  };

  return (
    <React.Fragment>
      <nav className={filter['trigger-container']}>
        <SearchBar/>
        <button
          className={filter.trigger}
          onClick={handleTrigger}
        ></button>
      </nav>
      {isOpen &&
        <FilterDropdown
          buttons={[
            <FilterButton
              isActive={true}
              text={'Todos'}
            />,
            <FilterButton
              filterState={'active'}
              text={'Activos'}
            />,
            <FilterButton
              filterState={'complete'}
              text={'Completados'}
            />
          ]}
        />
      }
    </React.Fragment>
  );
}

export { Filters };