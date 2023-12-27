import { v4 as uuidv4 } from 'uuid';
import { findIndex, createSlug } from 'utils';
import { calculateCompleted, calculateTotal } from './utils.reducer';

export const actionTypesCategories = {
  createCategory: 'CREATE_CATEGORY',
  editCategory: 'EDIT_CATEGORY',
  highlightCategory: 'HIGHLIGHT_CATEGORY',
  deleteCategory: 'DELETE_CATEGORY',
  deleteCompleted: 'DELETE_COMPLETED',
};

export const reducerOptionsCategories = (state, payload) => ({
  [actionTypesCategories.createCategory]: () => {
    const { categoryInfo } = payload;
    const newData = [...state];
    const newCategory = {
      name: categoryInfo.name,
      description: categoryInfo.description,
      tasks: [],
      isFavorite: false,
      totalTasks: 0,
      completedTasks: 0,
    };
    newCategory.id = uuidv4().substr(0, 8); // ${getHashId(JSON.stringify(newCategory))}
    newCategory.slug = `${newCategory.id}--${createSlug(categoryInfo.name)}`;

    newData.push(newCategory);

    return newData;
  },
  [actionTypesCategories.highlightCategory]: () => {
    const newData = [...state];
    const { categoryId } = payload;
    const categorySelected = newData[findIndex(state, categoryId, 'id')];

    categorySelected.isFavorite = !categorySelected.isFavorite;

    return newData;
  },
  [actionTypesCategories.deleteCategory]: () => {
    const newData = [...state];
    const { categoryId } = payload;

    newData.splice(findIndex(newData, categoryId, 'id'), 1);

    return newData;
  },
  [actionTypesCategories.editCategory]: () => {
    const { newCategoryInfo, categoryId } = payload;
    const newData = [...state];
    let categorySelected = newData[findIndex(state, categoryId, 'id')];

    categorySelected.name = newCategoryInfo.name;
    categorySelected.slug = `${categorySelected.id}--${createSlug(newCategoryInfo.name)}`;
    categorySelected.description = newCategoryInfo.description;

    return newData;
  },
  [actionTypesCategories.deleteCompleted]: () => {
    const { categoryId } = payload;
    const newData = [...state];
    let categorySelected = newData[findIndex(state, categoryId, 'id')];

    categorySelected.tasks = categorySelected.tasks.filter(task => task.isCompleted !== true);
    categorySelected.totalTasks = calculateTotal(categorySelected.tasks);
    categorySelected.completedTasks = calculateCompleted(categorySelected.tasks);

    return newData;
  },
});
