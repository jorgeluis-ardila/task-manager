import React from "react";
import filter from "./filter.module.css"

export function FilterButton({
  button,
  onClick,
  setFilterTasks,
}) {

  return (
    <button
      onClick={() => onClick({ ...button, active: true }, setFilterTasks)}
      className={`${button.active ? filter.active : ''} ${filter.button}`}
    >
      {button.text}
    </button>
  );
}