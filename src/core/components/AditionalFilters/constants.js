import { actionNamesFilters } from 'providers/context/Data/constants';

export const getCategoryFilterOptions = actionsList => [
  { action: actionsList.categoryFilters.favorite, name: actionNamesFilters.favorite, label: 'Favoritos', icon: 'star' },
];

export const getLayoutOptions = actionsList => [
  { action: actionsList.layout.layoutLine, name: actionNamesFilters.layoutLine, icon: 'lineView' },
  { action: actionsList.layout.layoutSquare, name: actionNamesFilters.layoutSquare, icon: 'squareView' },
];
