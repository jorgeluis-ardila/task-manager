import React from "react";
import { SearchBar } from "../SearchBar";
import { FilterDropdown } from "./FilterButton";
import { FilterIcon } from "../IconsApp/Icons";
import filter from "./filter.module.css";

export function Filters() {

  const [isOpen, setIsOpen] = React.useState(false),
        [buttons, setButtons] = React.useState([
          {
            text: 'Todos',
            filterState: 'all',
            active: true
          },
          {
            text: 'Activos',
            filterState: 'active',
            active: false
          },
          {
            text: 'Completados',
            filterState: 'complete',
            active: false
          }
        ]);

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
          buttons={buttons}
          setButtons={setButtons}
        />
      }
    </>
  );
}