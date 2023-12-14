import { createContext, useContext, useState, useMemo, useReducer } from 'react';
import { findIndexById } from 'utils';
import { actionTypesData, reducerFnData } from './reducers';
import { FILTERS_FN, INITIAL_DATA } from './constants';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // const [data, setData] = useStateLocalStorage('tasks', INITIAL_DATA);
  const [data, dispatch] = useReducer(reducerFnData, INITIAL_DATA);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('none');

  const tasksFiltered = useMemo(() => {
    if (!currentCategory) {
      return [];
    }
    let newTasks = currentCategory.tasks;
    const filterFn = FILTERS_FN?.[activeFilter];
    newTasks = filterFn(newTasks);

    return newTasks;
  }, [activeFilter, currentCategory]);

  const dataSearched = useMemo(() => {
    const categoriesList = data;
    let newData = currentCategory ? [...tasksFiltered] : [...categoriesList];
    if (searchTerm) {
      const splitedSearch = searchTerm.split(' ');
      newData = newData.filter(item => {
        return splitedSearch.every(term => item['name'].toLowerCase().includes(term.toLowerCase()));
      });
    }

    return newData;
  }, [searchTerm, tasksFiltered, currentCategory, data]);

  const onChangeSearchTerm = newSearchTerm => setSearchTerm(newSearchTerm);

  const onChangeActiveFilter = newFilter => setActiveFilter(newFilter);

  const categoryActions = {
    open: id => {
      const categoryIndex = findIndexById(data, id);
      setCurrentCategory(data[categoryIndex] ?? null);
    },
    add: categoryInfo => dispatch({ type: actionTypesData.createCategory, payload: { categoryInfo } }),
    edit: () => {},
    delete: () => {},
    hightlight: id => dispatch({ type: actionTypesData.highlightCategory, payload: { currentCategoryId: id } }),
  };

  const taskActions = {
    add: taskInfo => dispatch({ type: actionTypesData.createTask, payload: { taskInfo } }),
    edit: () => {},
    complete: taskId =>
      dispatch({ type: actionTypesData.completeTask, payload: { taskId, currentCategoryId: currentCategory.id } }),
    delete: taskId =>
      dispatch({ type: actionTypesData.deleteTask, payload: { taskId, currentCategoryId: currentCategory.id } }),
  };

  return (
    <DataContext.Provider
      value={{
        data,
        searchTerm,
        onChangeSearchTerm,
        dataSearched,
        currentCategory,
        tasksFiltered,
        activeFilter,
        onChangeActiveFilter,
        categoryActions,
        taskActions,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const dataContext = useContext(DataContext);
  return dataContext;
};

export { DataProvider, useData };
