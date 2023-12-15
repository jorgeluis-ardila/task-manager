import { setLocalStorage } from 'hooks';
import { actionNamesFilters } from '../constants';

const reducerOptionsFilters = (state, payload) => ({
  [actionNamesFilters.sort]: () => {
    const newFilters = { ...state };
    const { value } = payload;

    const isFirtChange = !newFilters.sort[actionNamesFilters.asc] && !newFilters.sort[actionNamesFilters.dec];

    newFilters.sort[actionNamesFilters.asc] =
      value?.[actionNamesFilters.asc] ?? !isFirtChange ? !newFilters.sort[actionNamesFilters.asc] : true;
    newFilters.sort[actionNamesFilters.dec] =
      value?.[actionNamesFilters.dec] ?? !isFirtChange ? !newFilters.sort[actionNamesFilters.dec] : false;
    newFilters.sortDate[actionNamesFilters.dateAsc] = false;
    newFilters.sortDate[actionNamesFilters.dateDec] = false;

    return newFilters;
  },
  [actionNamesFilters.sortDate]: () => {
    const newFilters = { ...state };
    const { value } = payload;

    const isFirtChange =
      !newFilters.sortDate[actionNamesFilters.dateAsc] && !newFilters.sortDate[actionNamesFilters.dateDec];

    newFilters.sort[actionNamesFilters.asc] = false;
    newFilters.sort[actionNamesFilters.dec] = false;
    newFilters.sortDate[actionNamesFilters.dateAsc] =
      value?.[actionNamesFilters.dateAsc] ?? !isFirtChange ? !newFilters.sortDate[actionNamesFilters.dateAsc] : true;
    newFilters.sortDate[actionNamesFilters.dateDec] =
      value?.[actionNamesFilters.dateDec] ?? !isFirtChange ? !newFilters.sortDate[actionNamesFilters.dateDec] : false;

    return newFilters;
  },
  /* [actionNamesFilters.asc]: () => {
    const newFilters = { ...state };
    newFilters.sort[actionNamesFilters.asc] = true;
    newFilters.sort[actionNamesFilters.dec] = false;
    newFilters.sortDate[actionNamesFilters.dateAsc] = false;
    newFilters.sortDate[actionNamesFilters.dateDec] = false;

    return newFilters;
  },
  [actionNamesFilters.dec]: () => {
    const newFilters = { ...state };
    newFilters.sort[actionNamesFilters.asc] = false;
    newFilters.sort[actionNamesFilters.dec] = true;
    newFilters.sortDate[actionNamesFilters.dateAsc] = false;
    newFilters.sortDate[actionNamesFilters.dateDec] = false;

    return newFilters;
  },
  [actionNamesFilters.dateAsc]: () => {
    const newFilters = { ...state };
    newFilters.sort[actionNamesFilters.asc] = false;
    newFilters.sort[actionNamesFilters.dec] = false;
    newFilters.sortDate[actionNamesFilters.dateAsc] = true;
    newFilters.sortDate[actionNamesFilters.dateDec] = false;

    return newFilters;
  },
  [actionNamesFilters.dateDec]: () => {
    const newFilters = { ...state };
    newFilters.sort[actionNamesFilters.asc] = false;
    newFilters.sort[actionNamesFilters.dec] = false;
    newFilters.sortDate[actionNamesFilters.dateAsc] = false;
    newFilters.sortDate[actionNamesFilters.dateDec] = true;

    return newFilters;
  }, */
  [actionNamesFilters.favorite]: () => {
    const newFilters = { ...state };
    const { value } = payload;
    newFilters.categoryFilters[actionNamesFilters.favorite] =
      value ?? !newFilters.categoryFilters[actionNamesFilters.favorite];

    return newFilters;
  },
  [actionNamesFilters.taskFilterAll]: () => {
    const newFilters = { ...state };
    newFilters.taskFilters[actionNamesFilters.taskFilterAll] = true;
    newFilters.taskFilters[actionNamesFilters.taskFilterActive] = false;
    newFilters.taskFilters[actionNamesFilters.taskFilterExpired] = false;
    newFilters.taskFilters[actionNamesFilters.taskFilterCompleted] = false;

    return newFilters;
  },
  [actionNamesFilters.taskFilterActive]: () => {
    const newFilters = { ...state };
    newFilters.taskFilters[actionNamesFilters.taskFilterAll] = false;
    newFilters.taskFilters[actionNamesFilters.taskFilterActive] = true;
    newFilters.taskFilters[actionNamesFilters.taskFilterExpired] = false;
    newFilters.taskFilters[actionNamesFilters.taskFilterCompleted] = false;

    return newFilters;
  },
  [actionNamesFilters.taskFilterExpired]: () => {
    const newFilters = { ...state };
    newFilters.taskFilters[actionNamesFilters.taskFilterAll] = false;
    newFilters.taskFilters[actionNamesFilters.taskFilterActive] = false;
    newFilters.taskFilters[actionNamesFilters.taskFilterExpired] = true;
    newFilters.taskFilters[actionNamesFilters.taskFilterCompleted] = false;

    return newFilters;
  },
  [actionNamesFilters.taskFilterCompleted]: () => {
    const newFilters = { ...state };
    newFilters.taskFilters[actionNamesFilters.taskFilterAll] = false;
    newFilters.taskFilters[actionNamesFilters.taskFilterActive] = false;
    newFilters.taskFilters[actionNamesFilters.taskFilterExpired] = false;
    newFilters.taskFilters[actionNamesFilters.taskFilterCompleted] = true;

    return newFilters;
  },
  [actionNamesFilters.layoutLine]: () => {
    const newFilters = { ...state };
    newFilters.layout[actionNamesFilters.layoutLine] = true;
    newFilters.layout[actionNamesFilters.layoutSquare] = false;

    return newFilters;
  },
  [actionNamesFilters.layoutSquare]: () => {
    const newFilters = { ...state };
    newFilters.layout[actionNamesFilters.layoutLine] = false;
    newFilters.layout[actionNamesFilters.layoutSquare] = true;

    return newFilters;
  },
});

export const reducerFnFilters = (state, action) => {
  const newFilters = reducerOptionsFilters(state, action.payload)[action.type]() || state;
  setLocalStorage('filters', newFilters);
  return newFilters;
};
