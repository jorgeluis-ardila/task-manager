import { getLocalStorage } from 'hooks';
import { isExpired } from 'utils';

export const actionNamesFilters = {
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

export const INITIAL_DATA = getLocalStorage('data') || [];

export const INITIAL_FILTERS = {
  sort: {
    [actionNamesFilters.asc]: true,
    [actionNamesFilters.dec]: false,
  },
  sortDate: {
    [actionNamesFilters.dateAsc]: false,
    [actionNamesFilters.dateDec]: false,
  },
  categoryFilters: {
    [actionNamesFilters.favorite]: false,
  },
  layout: {
    [actionNamesFilters.layoutLine]: true,
    [actionNamesFilters.layoutSquare]: false,
  },
  taskFilters: {
    [actionNamesFilters.taskFilterAll]: true,
    [actionNamesFilters.taskFilterActive]: false,
    [actionNamesFilters.taskFilterExpired]: false,
    [actionNamesFilters.taskFilterCompleted]: false,
  },
};

export const FILTERS_FN2 = {
  [actionNamesFilters.taskFilterAll]: prevData => prevData,
  [actionNamesFilters.taskFilterActive]: prevData =>
    prevData.filter(item => !item.isCompleted && !isExpired(item?.dueDate)),
  [actionNamesFilters.taskFilterExpired]: prevData =>
    prevData.filter(item => !item.isCompleted && isExpired(item?.dueDate)),
  [actionNamesFilters.taskFilterCompleted]: prevData => prevData.filter(item => item?.isCompleted),
  [actionNamesFilters.asc]: prevData => prevData.sort((a, b) => a?.name.localeCompare(b?.name)),
  [actionNamesFilters.dec]: prevData => prevData.sort((a, b) => b?.name.localeCompare(a?.name)),
  [actionNamesFilters.dateAsc]: prevData =>
    prevData.sort((a, b) => {
      const aDateParts = a?.dueDate.split('-').map(item => parseInt(item));
      const bDateParts = b?.dueDate.split('-').map(item => parseInt(item));
      const aDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2], 23, 59, 59);
      const bDate = new Date(bDateParts[0], bDateParts[1] - 1, bDateParts[2], 23, 59, 59);
      return aDate - bDate;
    }),
  [actionNamesFilters.dateDec]: prevData =>
    prevData.sort((a, b) => {
      const aDateParts = a?.dueDate.split('-').map(item => parseInt(item));
      const bDateParts = b?.dueDate.split('-').map(item => parseInt(item));
      const aDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2], 23, 59, 59);
      const bDate = new Date(bDateParts[0], bDateParts[1] - 1, bDateParts[2], 23, 59, 59);
      return bDate - aDate;
    }),
  [actionNamesFilters.favorite]: prevData => prevData.filter(item => item?.isFavorite),
};

export const FILTERS_FN = {
  [actionNamesFilters.taskFilterAll]: item => item,
  [actionNamesFilters.taskFilterActive]: item => !item.isCompleted && !isExpired(item?.dueDate),
  [actionNamesFilters.taskFilterExpired]: item => !item.isCompleted && isExpired(item?.dueDate),
  [actionNamesFilters.taskFilterCompleted]: item => item?.isCompleted,

  [actionNamesFilters.asc]: (a, b) => a?.name.localeCompare(b?.name),
  [actionNamesFilters.dec]: (a, b) => b?.name.localeCompare(a?.name),

  [actionNamesFilters.dateAsc]: (a, b) => {
    const aDateParts = a?.dueDate.split('-').map(item => parseInt(item));
    const bDateParts = b?.dueDate.split('-').map(item => parseInt(item));
    const aDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2], 23, 59, 59);
    const bDate = new Date(bDateParts[0], bDateParts[1] - 1, bDateParts[2], 23, 59, 59);
    return aDate - bDate;
  },
  [actionNamesFilters.dateDec]: (a, b) => {
    const aDateParts = a?.dueDate.split('-').map(item => parseInt(item));
    const bDateParts = b?.dueDate.split('-').map(item => parseInt(item));
    const aDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2], 23, 59, 59);
    const bDate = new Date(bDateParts[0], bDateParts[1] - 1, bDateParts[2], 23, 59, 59);
    return bDate - aDate;
  },

  [actionNamesFilters.favorite]: item => item?.isFavorite,
};
