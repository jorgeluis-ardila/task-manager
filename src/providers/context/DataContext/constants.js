import { getLocalStorage } from 'hooks';
import { isExpired } from 'utils';

export const INITIAL_DATA = getLocalStorage('data') || [];

export const FILTERS_FN = {
  none: prevTasks => prevTasks,
  active: prevTasks => prevTasks.filter(task => !task.completed),
  completed: prevTasks => prevTasks.filter(task => !!task.completed),
  expired: prevTasks => prevTasks.filter(task => isExpired(task.date)),
};
