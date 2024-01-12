import { actionTypesFilters } from 'providers/context/Data/constants';

export const getCategoryFilterOptions = actionsList => [
  { action: actionsList.categoryFilters.favorite, name: actionTypesFilters.favorite, label: 'Favoritos', icon: 'star' },
];

export const getLayoutOptions = actionsList => [
  { action: actionsList.layout.layoutLine, name: actionTypesFilters.layoutLine, icon: 'lineView' },
  { action: actionsList.layout.layoutSquare, name: actionTypesFilters.layoutSquare, icon: 'squareView' },
];
