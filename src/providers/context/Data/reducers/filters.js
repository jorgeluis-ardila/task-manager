import { setLocalStorage } from 'utils';
import { actionTypesFilters } from '../constants';

const reducerOptionsFilters = (state, payload) => ({
  [actionTypesFilters.sort]: () => {
    const newFilters = { ...state };
    const { value } = payload;

    const isFirtChange = !newFilters.sort[actionTypesFilters.asc] && !newFilters.sort[actionTypesFilters.dec];

    newFilters.sort[actionTypesFilters.asc] =
      value?.[actionTypesFilters.asc] ?? !isFirtChange ? !newFilters.sort[actionTypesFilters.asc] : true;
    newFilters.sort[actionTypesFilters.dec] =
      value?.[actionTypesFilters.dec] ?? !isFirtChange ? !newFilters.sort[actionTypesFilters.dec] : false;
    newFilters.sortDate[actionTypesFilters.dateAsc] = false;
    newFilters.sortDate[actionTypesFilters.dateDec] = false;

    return newFilters;
  },
  [actionTypesFilters.sortDate]: () => {
    const newFilters = { ...state };
    const { value } = payload;

    const isFirtChange =
      !newFilters.sortDate[actionTypesFilters.dateAsc] && !newFilters.sortDate[actionTypesFilters.dateDec];

    newFilters.sort[actionTypesFilters.asc] = false;
    newFilters.sort[actionTypesFilters.dec] = false;
    newFilters.sortDate[actionTypesFilters.dateAsc] =
      value?.[actionTypesFilters.dateAsc] ?? !isFirtChange ? !newFilters.sortDate[actionTypesFilters.dateAsc] : true;
    newFilters.sortDate[actionTypesFilters.dateDec] =
      value?.[actionTypesFilters.dateDec] ?? !isFirtChange ? !newFilters.sortDate[actionTypesFilters.dateDec] : false;

    return newFilters;
  },
  [actionTypesFilters.favorite]: () => {
    const newFilters = { ...state };
    const { value } = payload;
    newFilters.categoryFilters[actionTypesFilters.favorite] =
      value ?? !newFilters.categoryFilters[actionTypesFilters.favorite];

    return newFilters;
  },
  [actionTypesFilters.taskFilterAll]: () => {
    const newFilters = { ...state };
    newFilters.taskFilters[actionTypesFilters.taskFilterAll] = true;
    newFilters.taskFilters[actionTypesFilters.taskFilterActive] = false;
    newFilters.taskFilters[actionTypesFilters.taskFilterExpired] = false;
    newFilters.taskFilters[actionTypesFilters.taskFilterCompleted] = false;

    return newFilters;
  },
  [actionTypesFilters.taskFilterActive]: () => {
    const newFilters = { ...state };
    newFilters.taskFilters[actionTypesFilters.taskFilterAll] = false;
    newFilters.taskFilters[actionTypesFilters.taskFilterActive] = true;
    newFilters.taskFilters[actionTypesFilters.taskFilterExpired] = false;
    newFilters.taskFilters[actionTypesFilters.taskFilterCompleted] = false;

    return newFilters;
  },
  [actionTypesFilters.taskFilterExpired]: () => {
    const newFilters = { ...state };
    newFilters.taskFilters[actionTypesFilters.taskFilterAll] = false;
    newFilters.taskFilters[actionTypesFilters.taskFilterActive] = false;
    newFilters.taskFilters[actionTypesFilters.taskFilterExpired] = true;
    newFilters.taskFilters[actionTypesFilters.taskFilterCompleted] = false;

    return newFilters;
  },
  [actionTypesFilters.taskFilterCompleted]: () => {
    const newFilters = { ...state };
    newFilters.taskFilters[actionTypesFilters.taskFilterAll] = false;
    newFilters.taskFilters[actionTypesFilters.taskFilterActive] = false;
    newFilters.taskFilters[actionTypesFilters.taskFilterExpired] = false;
    newFilters.taskFilters[actionTypesFilters.taskFilterCompleted] = true;

    return newFilters;
  },
  [actionTypesFilters.layoutLine]: () => {
    const newFilters = { ...state };
    newFilters.layout[actionTypesFilters.layoutLine] = true;
    newFilters.layout[actionTypesFilters.layoutSquare] = false;

    return newFilters;
  },
  [actionTypesFilters.layoutSquare]: () => {
    const newFilters = { ...state };
    newFilters.layout[actionTypesFilters.layoutLine] = false;
    newFilters.layout[actionTypesFilters.layoutSquare] = true;

    return newFilters;
  },
});

export const reducerFnFilters = (state, action) => {
  const newFilters = reducerOptionsFilters(state, action.payload)[action.type]() || state;
  setLocalStorage('filters', newFilters);
  return newFilters;
};
