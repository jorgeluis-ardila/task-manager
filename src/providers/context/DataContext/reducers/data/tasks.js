import { random } from 'lodash';
import { getHashId, findIndexById } from 'utils';
import { setLocalStorage } from 'hooks';

export const actionTypesTasks = {
  createTask: 'CREATETASK',
  editTask: 'EDITTASK',
  completeTask: 'COMPLETETASK',
  deleteTask: 'DELETETASK',
};

const reducerUtils = {
  calculateCompleted: tasks => tasks.filter(task => task?.isCompleted).length,
  calculateTotal: tasks => tasks.length,
};

export const reducerOptionsTasks = (state, payload) => ({
  [actionTypesTasks.createTask]: () => {
    const newData = [...state];
    const { taskInfo } = payload;
    const categorySelected = newData[findIndexById(state, taskInfo.category)];

    categorySelected.tasks.push({
      id: `task_${random(100)}${getHashId(taskInfo.name)}`,
      name: taskInfo.name,
      description: taskInfo.description,
      isCompleted: false,
      dueDate: taskInfo.dueDate,
      category: { name: categorySelected.name, id: taskInfo.category },
    });

    categorySelected.totalTasks = reducerUtils.calculateTotal(categorySelected.tasks);
    categorySelected.completedTasks = reducerUtils.calculateCompleted(categorySelected.tasks);

    setLocalStorage('data', newData);
    return newData;
  },
  [actionTypesTasks.completeTask]: () => {
    const newData = [...state];
    const { taskId, currentCategoryId } = payload;
    const categorySelected = newData[findIndexById(state, currentCategoryId)];
    const taskSelected = categorySelected.tasks[findIndexById(categorySelected.tasks, taskId)];

    taskSelected.isCompleted = !taskSelected.isCompleted;
    categorySelected.completedTasks = reducerUtils.calculateCompleted(categorySelected.tasks);

    setLocalStorage('data', newData);
    return newData;
  },
  [actionTypesTasks.deleteTask]: () => {
    const newData = [...state];
    const { taskId, currentCategoryId } = payload;
    const categorySelected = newData[findIndexById(state, currentCategoryId)];

    categorySelected.tasks.splice(findIndexById(categorySelected.tasks, taskId), 1);
    categorySelected.totalTasks = reducerUtils.calculateTotal(categorySelected.tasks);
    categorySelected.completedTasks = reducerUtils.calculateCompleted(categorySelected.tasks);

    setLocalStorage('data', newData);
    return newData;
  },
});
