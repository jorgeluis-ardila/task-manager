import { random } from 'lodash';
import { getHashId, findIndex } from 'utils';
import { setLocalStorage } from 'hooks';

export const actionTypesCategories = {
  createCategory: 'CREATECATEGORY',
  editCategory: 'EDITCATEGORY',
  highlightCategory: 'HIGHLIGHTCATEGORY',
  deleteCategory: 'DELETECATEGORY',
};

export const reducerOptionsCategories = (state, payload) => ({
  [actionTypesCategories.createCategory]: () => {
    const { categoryInfo } = payload;
    const newData = [...state];
    newData.push({
      id: `category_${random(100)}${getHashId(categoryInfo.name)}`,
      name: categoryInfo.name,
      description: categoryInfo.description,
      tasks: [],
      isFavorite: false,
      totalTasks: 0,
      completedTasks: 0,
    });

    setLocalStorage('data', newData);
    return newData;
  },
  [actionTypesCategories.highlightCategory]: () => {
    const newData = [...state];
    const { categoryId } = payload;
    const categorySelected = newData[findIndex(state, categoryId, 'id')];

    categorySelected.isFavorite = !categorySelected.isFavorite;

    setLocalStorage('data', newData);
    return newData;
  },
  [actionTypesCategories.deleteCategory]: () => {
    const newData = [...state];
    const { categoryId } = payload;

    newData.splice(findIndex(newData, categoryId, 'id'), 1);

    setLocalStorage('data', newData);
    return newData;
  },
  [actionTypesCategories.editCategory]: () => {
    const { newCategoryInfo, categoryId } = payload;
    const newData = [...state];
    let categorySelected = newData[findIndex(state, categoryId, 'id')];

    categorySelected.name = newCategoryInfo.name;
    categorySelected.description = newCategoryInfo.description;

    setLocalStorage('data', newData);
    return newData;
  },
});
