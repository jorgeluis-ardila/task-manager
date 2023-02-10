import React from "react";
import { SearchBar } from "../SearchBar";
import { FilterButton, FilterDropdown } from "./FilterButton";
import { FilterIcon } from "../IconsApp/Icons";
import filter from "./filter.module.css";

export function Filters() {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleTrigger = () => {
    setIsOpen(prevState => !prevState)
  };

  return (
    <>
      <nav className={filter['trigger-container']}>
        <SearchBar/>
        <FilterIcon
          onFilter={handleTrigger}
          className={`${filter.trigger} ${isOpen ? filter['trigger--active'] : ''}`}
          classNameSvg={filter['svg-trigger']}
        />
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
    </>
  );
}