import React from 'react';
import { ReactComponent as CheckSVG } from '../../assets/svg/check-icon.svg';
import { ReactComponent as UnCheckSVG } from '../../assets/svg/uncheck-icon.svg';
import { ReactComponent as DeleteSVG } from '../../assets/svg/delete-icon.svg';
import { ReactComponent as SearchSVG } from '../../assets/svg/search-icon.svg';
import { ReactComponent as FilterSVG } from '../../assets/svg/sort-icon.svg';
import icon from './icon.module.css';

const iconTypes = {
  "check": () => (
    <CheckSVG className={`${icon.svg} ${icon['svg--check']}`} fill="#0D0D0D"/>
  ),
  "uncheck": () => (
    <UnCheckSVG className={`${icon.svg} ${icon['svg--uncheck']}`} fill="#0D0D0D" />
  ),
  "delete": () => (
    <DeleteSVG className={`${icon.svg} ${icon['svg--delete']}`} fill="#0D0D0D" />
  ),
  "search": (classNameSvg) => (
    <SearchSVG className={`${icon.svg} ${icon['svg--search']} ${classNameSvg ? classNameSvg : ''}`} fill="#0D0D0D" />
  ),
  "filter": (classNameSvg) => (
    <FilterSVG className={`${icon.svg} ${icon['svg--filter']} ${classNameSvg ? classNameSvg : ''}`} fill="#0D0D0D" />
  ),
};

export function ToDoIcon({ type, onClick, className, classNameSvg }) {
  return (
    <button
      onClick={onClick}
      className={`${icon.container} ${className ? className : ''}`}
    >
      {iconTypes[type](classNameSvg)}
    </button>
  );
}
