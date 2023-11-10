import React, { useState } from "react";
import { FilterIcon } from "../IconsApp/Icons";
import filter from "./filter.module.css";

export function Filters({ searchBar, filterButton }) {
  const [isOpen, setIsOpen] = useState(false),
    [buttons, setButtons] = useState([
      {
        text: "Todos",
        filterState: "all",
        active: true,
      },
      {
        text: "Activos",
        filterState: "active",
        active: false,
      },
      {
        text: "Completados",
        filterState: "complete",
        active: false,
      },
    ]);

  const openDropDown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleActive = (activeButton, setFilterTasks) => {
    setFilterTasks(activeButton.filterState);
    setButtons(
      buttons.map((button) => {
        if (button.text === activeButton.text) {
          return activeButton;
        } else {
          return {
            ...button,
            active: false,
          };
        }
      })
    );
  };

  return (
    <>
      <nav className={filter["trigger-container"]}>
        {searchBar}
        <FilterIcon
          onClick={openDropDown}
          className={`${filter.trigger} ${
            isOpen ? filter["trigger--active"] : ""
          }`}
          classNameSvg={filter["svg-trigger"]}
        />
      </nav>
      {isOpen && (
        <div className={filter.container}>
          {buttons.map((button) => (
            <div key={button.text}>{filterButton(button, handleActive)}</div>
          ))}
        </div>
      )}
    </>
  );
}
