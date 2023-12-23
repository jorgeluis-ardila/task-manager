import { random } from 'lodash';
import { getHashId, findIndex, createSlug } from 'utils';

export const actionTypesTasks = {
  createTask: 'CREATE_TASK',
  editTask: 'EDIT_TASK',
  completeTask: 'COMPLETE_TASK',
  deleteTask: 'DELETE_TASK',
};

const reducerUtils = {
  calculateCompleted: tasks => tasks.filter(task => task?.isCompleted).length,
  calculateTotal: tasks => tasks.length,
};

export const reducerOptionsTasks = (state, payload) => ({
  [actionTypesTasks.createTask]: () => {
    const newData = [...state];
    const { taskInfo } = payload;
    const categorySelected = newData[findIndex(state, taskInfo.category, 'id')];
    const newTask = {
      slug: createSlug(taskInfo.name),
      name: taskInfo.name,
      description: taskInfo.description,
      isCompleted: false,
      dueDate: taskInfo.dueDate,
      category: { name: categorySelected.name, id: taskInfo.category },
    };
    newTask.id = `${random(100)}${getHashId(JSON.stringify(newTask))}`;
    newTask.slug = `${newTask.id}--${newTask.slug}`;

    categorySelected.tasks.push(newTask);

    categorySelected.totalTasks = reducerUtils.calculateTotal(categorySelected.tasks);
    categorySelected.completedTasks = reducerUtils.calculateCompleted(categorySelected.tasks);

    return newData;
  },
  [actionTypesTasks.completeTask]: () => {
    const newData = [...state];
    const { taskId, currentCategoryId } = payload;
    const categorySelected = newData[findIndex(state, currentCategoryId, 'id')];
    const taskSelected = categorySelected.tasks[findIndex(categorySelected.tasks, taskId, 'id')];

    taskSelected.isCompleted = !taskSelected.isCompleted;
    categorySelected.completedTasks = reducerUtils.calculateCompleted(categorySelected.tasks);

    return newData;
  },
  [actionTypesTasks.deleteTask]: () => {
    const newData = [...state];
    const { taskId, currentCategoryId } = payload;
    const categorySelected = newData[findIndex(state, currentCategoryId, 'id')];

    categorySelected.tasks.splice(findIndex(categorySelected.tasks, taskId, 'id'), 1);
    categorySelected.totalTasks = reducerUtils.calculateTotal(categorySelected.tasks);
    categorySelected.completedTasks = reducerUtils.calculateCompleted(categorySelected.tasks);

    return newData;
  },
  [actionTypesTasks.editTask]: () => {
    const newData = [...state];
    const { newTaskInfo, taskId, currentCategoryId } = payload;
    const currentCategory = newData[findIndex(state, currentCategoryId, 'id')];
    const categorySelected = newData[findIndex(state, newTaskInfo.category, 'id')];
    const taskSelected = currentCategory.tasks[findIndex(currentCategory.tasks, taskId, 'id')];

    taskSelected.name = newTaskInfo.name;
    taskSelected.slug = createSlug(newTaskInfo.name);
    taskSelected.description = newTaskInfo.description;
    taskSelected.dueDate = newTaskInfo.dueDate;
    taskSelected.category = { name: categorySelected.name, id: newTaskInfo.category };

    if (newTaskInfo.category !== currentCategoryId) {
      categorySelected.tasks.push(taskSelected);
      categorySelected.totalTasks = reducerUtils.calculateTotal(categorySelected.tasks);
      categorySelected.completedTasks = reducerUtils.calculateCompleted(categorySelected.tasks);

      currentCategory.tasks.splice(findIndex(currentCategory.tasks, taskId, 'id'), 1);
      currentCategory.totalTasks = reducerUtils.calculateTotal(currentCategory.tasks);
      currentCategory.completedTasks = reducerUtils.calculateCompleted(currentCategory.tasks);
    }

    return newData;
  },
});
