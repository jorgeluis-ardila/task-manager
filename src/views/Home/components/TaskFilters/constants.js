import { actionTypesHomeFilters, filtersActions } from 'views/Home/constants';

export const taskFilters = [
  {
    action: filtersActions[actionTypesHomeFilters.todayActive],
    name: actionTypesHomeFilters.todayActive,
    label: 'Hoy',
  },
  { action: filtersActions[actionTypesHomeFilters.tomorrow], name: actionTypesHomeFilters.tomorrow, label: 'Mañana' },
  {
    action: filtersActions[actionTypesHomeFilters.toExpire],
    name: actionTypesHomeFilters.toExpire,
    label: 'Por Vencer',
  },
  {
    action: filtersActions[actionTypesHomeFilters.todayCompleted],
    name: actionTypesHomeFilters.todayCompleted,
    label: 'Completadas Hoy',
  },
];
