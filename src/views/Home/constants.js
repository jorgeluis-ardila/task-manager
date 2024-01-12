import { getPercentage, getTaskFromDate, getToExpired } from 'utils';

export const actionTypesHomeFilters = {
  today: 'FILTER_BY_TODAY',
  todayCompleted: 'FILTER_BY_TODAY_COMPLETED',
  todayActive: 'FILTER_BY_TODAY_ACTIVE',
  tomorrow: 'FILTER_BY_TOMORROW',
  toExpire: 'FILTER_BY_TO_EXPIRED',
};

export const filtersActions = {
  [actionTypesHomeFilters.today]: tasks =>
    tasks.filter(task => {
      const today = new Date();
      return getTaskFromDate(task.dueDate, today);
    }),
  [actionTypesHomeFilters.todayCompleted]: tasks =>
    tasks.filter(task => {
      const today = new Date();
      return getTaskFromDate(task.dueDate, today) && task.isCompleted;
    }),
  [actionTypesHomeFilters.todayActive]: tasks =>
    tasks.filter(task => {
      const today = new Date();
      return getTaskFromDate(task.dueDate, today) && !task.isCompleted;
    }),
  [actionTypesHomeFilters.tomorrow]: tasks =>
    tasks.filter(task => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return getTaskFromDate(task.dueDate, tomorrow) && !task.isCompleted;
    }),
  [actionTypesHomeFilters.toExpire]: tasks => tasks.filter(task => getToExpired(task.dueDate) && !task.isCompleted),
};

export const getDailyData = tasksListed => {
  const dailyTask = filtersActions[actionTypesHomeFilters.today](tasksListed).length;
  const dailyTaskCompleted = filtersActions[actionTypesHomeFilters.todayCompleted](tasksListed).length;
  const percentageDaily = getPercentage({
    partialValue: dailyTaskCompleted,
    totalValue: dailyTask,
  });

  return {
    total: dailyTask,
    completed: dailyTaskCompleted,
    percentage: percentageDaily,
  };
};
