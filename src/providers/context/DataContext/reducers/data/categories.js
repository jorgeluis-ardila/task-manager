import { random } from 'lodash';
import { getHashId, findIndexById } from 'utils';
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
    const { currentCategoryId } = payload;
    const categorySelected = newData[findIndexById(state, currentCategoryId)];

    categorySelected.isFavorite = !categorySelected.isFavorite;

    setLocalStorage('data', newData);
    return newData;
  },
});
