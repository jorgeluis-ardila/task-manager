import React from "react";
import { Context } from "../../utils/context";
import filter from "./filter.module.css"

function FilterButton({
  button,
  onClick
}) {
  

  return (
    <button
      onClick={() => onClick({
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
        <div key={button.text}>
          <FilterButton
            button={button}
            onClick={handleActive}
          />
        </div>
      ))}
    </div>
  );
}