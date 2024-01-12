import { actionTypesFilters } from 'providers/context/Data/constants';

export const getTaskFilterOptions = actionsList => [
  { action: actionsList.taskFilters.all, name: actionTypesFilters.taskFilterAll, label: 'Todas' },
  { action: actionsList.taskFilters.active, name: actionTypesFilters.taskFilterActive, label: 'Activas' },
  { action: actionsList.taskFilters.expired, name: actionTypesFilters.taskFilterExpired, label: 'Expiradas' },
  { action: actionsList.taskFilters.completed, name: actionTypesFilters.taskFilterCompleted, label: 'Completadas' },
];
