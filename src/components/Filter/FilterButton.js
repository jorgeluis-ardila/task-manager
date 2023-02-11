import React from "react";
import { Context } from "../../context";
import filter from "./filter.module.css"

function FilterButton({
  button,
  onActive
}) {
  

  return (
    <button
      onClick={() => onActive({
        ...button,
        active: true
      })}
      className={`${button.active ? filter.active : ''} ${filter.button}`}
    >
      {button.text}
    </button>
  );
}

export function FilterDropdown({buttons, setButtons}) {

  const {
    setFilterTasks
  } = React.useContext(Context);

  const handleActive = (activeButton) => {
    setFilterTasks(activeButton.filterState);
    setButtons(buttons.map(button => {
      if (button.text === activeButton.text) {
        return activeButton;
      } else {
        return {
          ...button,
          active: false
        };
      }
    }));
  };

  return (
    <div className={filter.container}>
      {buttons.map((button, index) => (
        <div key={index}>
          <FilterButton
            button={button}
            onActive={handleActive}
          />
        </div>
      ))}
    </div>
  );
}