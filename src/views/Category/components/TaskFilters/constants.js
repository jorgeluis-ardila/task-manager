import { actionNamesFilters } from 'providers/context/Data/constants';

export const getTaskFilterOptions = actionsList => [
  { action: actionsList.taskFilters.all, name: actionNamesFilters.taskFilterAll, label: 'Todas' },
  { action: actionsList.taskFilters.active, name: actionNamesFilters.taskFilterActive, label: 'Activas' },
  { action: actionsList.taskFilters.expired, name: actionNamesFilters.taskFilterExpired, label: 'Expiradas' },
  { action: actionsList.taskFilters.completed, name: actionNamesFilters.taskFilterCompleted, label: 'Completadas' },
];
