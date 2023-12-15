import { actionNamesFilters } from 'providers/context/DataContext/constants';

export const DELETE_MODAL_TEXT = {
  task: () => (
    <>
      <span className="bold">¡Hey!</span> Solo quería informarte que luego de borrar una tarea no se podrá recuperar.{' '}
      <span className="bold">Esta acción no se puede deshacer</span>, así que asegúrate de haber revisado todo.
    </>
  ),
  category: () => (
    <>
      <span className="bold">¡Hey!</span> Solo quería informarte que al borrar una categoría también se eliminarán todas
      las tareas asociadas. <span className="bold">Esta acción no se puede deshacer</span>, así que asegúrate de haber
      revisado todo.
    </>
  ),
};

export const getTaskFilterOptions = actionsList => [
  { action: actionsList.taskFilters.all, name: actionNamesFilters.taskFilterAll, label: 'Todas' },
  { action: actionsList.taskFilters.active, name: actionNamesFilters.taskFilterActive, label: 'Activas' },
  { action: actionsList.taskFilters.expired, name: actionNamesFilters.taskFilterExpired, label: 'Expiradas' },
  { action: actionsList.taskFilters.completed, name: actionNamesFilters.taskFilterCompleted, label: 'Completadas' },
];

export const getCategoryFilterOptions = actionsList => [
  { action: actionsList.categoryFilters.favorite, name: actionNamesFilters.favorite, label: 'Favoritos', icon: 'star' },
];

export const getLayoutOptions = actionsList => [
  { action: actionsList.layout.layoutLine, name: actionNamesFilters.layoutLine, icon: 'lineView' },
  { action: actionsList.layout.layoutSquare, name: actionNamesFilters.layoutSquare, icon: 'squareView' },
];
