import { getLocalStorage } from '..';
import { isExpired } from 'utils';

export const actionTypesFilters = {
  sort: 'SORT',
  sortDate: 'SORT_BY_DATE',
  asc: 'SORT_BY_ASC',
  dec: 'SORT_BY_DEC',
  dateAsc: 'SORT_BY_DATE_ASC',
  dateDec: 'SORT_BY_DATE_DESC',
  favorite: 'SORT_BY_FAVORITE',
  taskFilterAll: 'FILTER_BY_ALL',
  taskFilterActive: 'FILTER_BY_ACTIVE',
  taskFilterExpired: 'FILTER_BY_EXPIRED',
  taskFilterCompleted: 'FILTER_BY_COMPLETED',
  layoutLine: 'VIEW_LINE_LAYOUT',
  layoutSquare: 'VIEW_SQUARE_LAYOUT',
};

export const INITIAL_FILTERS = getLocalStorage('filters') || {
  sort: {
    [actionTypesFilters.asc]: true,
    [actionTypesFilters.dec]: false,
  },
  sortDate: {
    [actionTypesFilters.dateAsc]: false,
    [actionTypesFilters.dateDec]: false,
  },
  categoryFilters: {
    [actionTypesFilters.favorite]: false,
  },
  layout: {
    [actionTypesFilters.layoutLine]: true,
    [actionTypesFilters.layoutSquare]: false,
  },
  taskFilters: {
    [actionTypesFilters.taskFilterAll]: true,
    [actionTypesFilters.taskFilterActive]: false,
    [actionTypesFilters.taskFilterExpired]: false,
    [actionTypesFilters.taskFilterCompleted]: false,
  },
};

export const FILTERS_FN = {
  [actionTypesFilters.taskFilterAll]: item => item,
  [actionTypesFilters.taskFilterActive]: item => !item.isCompleted && !isExpired(item?.dueDate),
  [actionTypesFilters.taskFilterExpired]: item => !item.isCompleted && isExpired(item?.dueDate),
  [actionTypesFilters.taskFilterCompleted]: item => item?.isCompleted,

  [actionTypesFilters.asc]: (a, b) => b?.name.localeCompare(a?.name),
  [actionTypesFilters.dec]: (a, b) => a?.name.localeCompare(b?.name),

  [actionTypesFilters.dateAsc]: (a, b) => {
    const aDateParts = a?.dueDate.split('-').map(item => parseInt(item));
    const bDateParts = b?.dueDate.split('-').map(item => parseInt(item));
    const aDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2], 23, 59, 59);
    const bDate = new Date(bDateParts[0], bDateParts[1] - 1, bDateParts[2], 23, 59, 59);
    return bDate - aDate;
  },
  [actionTypesFilters.dateDec]: (a, b) => {
    const aDateParts = a?.dueDate.split('-').map(item => parseInt(item));
    const bDateParts = b?.dueDate.split('-').map(item => parseInt(item));
    const aDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2], 23, 59, 59);
    const bDate = new Date(bDateParts[0], bDateParts[1] - 1, bDateParts[2], 23, 59, 59);
    return aDate - bDate;
  },

  [actionTypesFilters.favorite]: item => item?.isFavorite,
};
