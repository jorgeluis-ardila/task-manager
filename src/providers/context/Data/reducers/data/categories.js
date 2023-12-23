import { random } from 'lodash';
import { getHashId, findIndex, createSlug } from 'utils';

export const actionTypesCategories = {
  createCategory: 'CREATE_CATEGORY',
  editCategory: 'EDIT_CATEGORY',
  highlightCategory: 'HIGHLIGHT_CATEGORY',
  deleteCategory: 'DELETE_CATEGORY',
};

export const reducerOptionsCategories = (state, payload) => ({
  [actionTypesCategories.createCategory]: () => {
    const { categoryInfo } = payload;
    const newData = [...state];
    const newCategory = {
      slug: `${createSlug(categoryInfo.name)}`,
      name: categoryInfo.name,
      description: categoryInfo.description,
      tasks: [],
      isFavorite: false,
      totalTasks: 0,
      completedTasks: 0,
    };
    newCategory.id = `${random(100)}${getHashId(JSON.stringify(newCategory))}`;
    newCategory.slug = `${newCategory.id}--${newCategory.slug}`;

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
    categorySelected.slug = createSlug(newCategoryInfo.name);
    categorySelected.description = newCategoryInfo.description;

    return newData;
  },
});
