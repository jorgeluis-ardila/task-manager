import { actionTypesCategories, reducerOptionsCategories } from './categories';
import { actionTypesTasks, reducerOptionsTasks } from './tasks';

export const actionTypesData = {
  ...actionTypesCategories,
  ...actionTypesTasks,
};

const reducerOptionsData = (state, payload) => ({
  ...reducerOptionsCategories(state, payload),
  ...reducerOptionsTasks(state, payload),
});

export const reducerFnData = (state, action) => {
  return reducerOptionsData(state, action.payload)[action.type]() || state;
};
