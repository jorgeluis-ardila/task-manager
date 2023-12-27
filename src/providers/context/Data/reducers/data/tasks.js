import { v4 as uuidv4 } from 'uuid';
import { findIndex, createSlug } from 'utils';
import { calculateCompleted, calculateTotal } from './utils.reducer';

export const actionTypesTasks = {
  createTask: 'CREATE_TASK',
  editTask: 'EDIT_TASK',
  completeTask: 'COMPLETE_TASK',
  deleteTask: 'DELETE_TASK',
};

export const reducerOptionsTasks = (state, payload) => ({
  [actionTypesTasks.createTask]: () => {
    const newData = [...state];
    const { taskInfo } = payload;
    const categorySelected = newData[findIndex(state, taskInfo.category, 'id')];
    const newTask = {
      name: taskInfo.name,
      description: taskInfo.description,
      isCompleted: false,
      dueDate: taskInfo.dueDate,
      category: { name: categorySelected.name, id: taskInfo.category, slug: categorySelected.slug },
    };
    newTask.id = uuidv4().substr(0, 8); // ${getHashId(JSON.stringify(newTask))}
    newTask.slug = `${newTask.id}--${createSlug(taskInfo.name)}`;

    categorySelected.tasks.push(newTask);

    categorySelected.totalTasks = calculateTotal(categorySelected.tasks);
    categorySelected.completedTasks = calculateCompleted(categorySelected.tasks);

    return newData;
  },
  [actionTypesTasks.completeTask]: () => {
    const newData = [...state];
    const { taskId, currentCategoryId } = payload;
    const categorySelected = newData[findIndex(state, currentCategoryId, 'id')];
    const taskSelected = categorySelected.tasks[findIndex(categorySelected.tasks, taskId, 'id')];

    taskSelected.isCompleted = !taskSelected.isCompleted;
    categorySelected.completedTasks = calculateCompleted(categorySelected.tasks);

    return newData;
  },
  [actionTypesTasks.deleteTask]: () => {
    const newData = [...state];
    const { taskId, currentCategoryId } = payload;
    const categorySelected = newData[findIndex(state, currentCategoryId, 'id')];

    categorySelected.tasks.splice(findIndex(categorySelected.tasks, taskId, 'id'), 1);
    categorySelected.totalTasks = calculateTotal(categorySelected.tasks);
    categorySelected.completedTasks = calculateCompleted(categorySelected.tasks);

    return newData;
  },
  [actionTypesTasks.editTask]: () => {
    const newData = [...state];
    const { newTaskInfo, taskId, currentCategoryId } = payload;
    const currentCategory = newData[findIndex(state, currentCategoryId, 'id')];
    const categorySelected = newData[findIndex(state, newTaskInfo.category, 'id')];
    const taskSelected = currentCategory.tasks[findIndex(currentCategory.tasks, taskId, 'id')];

    taskSelected.name = newTaskInfo.name;
    taskSelected.slug = `${taskSelected.id}--${createSlug(newTaskInfo.name)}`;
    taskSelected.description = newTaskInfo.description;
    taskSelected.dueDate = newTaskInfo.dueDate;
    taskSelected.category = { name: categorySelected.name, id: newTaskInfo.category, slug: categorySelected.slug };

    if (newTaskInfo.category !== currentCategoryId) {
      categorySelected.tasks.push(taskSelected);
      categorySelected.totalTasks = calculateTotal(categorySelected.tasks);
      categorySelected.completedTasks = calculateCompleted(categorySelected.tasks);

      currentCategory.tasks.splice(findIndex(currentCategory.tasks, taskId, 'id'), 1);
      currentCategory.totalTasks = calculateTotal(currentCategory.tasks);
      currentCategory.completedTasks = calculateCompleted(currentCategory.tasks);
    }

    return newData;
  },
});
