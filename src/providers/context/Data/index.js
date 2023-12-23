import { createContext, useContext, useState, useMemo, useReducer, useCallback } from 'react';
import { findIndex, getKeyWithTrueValue } from 'utils';
// import { useStateLocalStorage } from 'hooks';
import { actionTypesData, reducerFnData, reducerFnFilters } from './reducers';
import { FILTERS_FN, INITIAL_DATA, INITIAL_FILTERS, actionNamesFilters } from './constants';
import { matchPath, useLocation } from 'react-router-dom';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // const [data, setData] = useStateLocalStorage('tasks', INITIAL_DATA);
  const { pathname } = useLocation();
  const matchCategoryRoute = matchPath({ path: '/:categorySlug' }, pathname)?.params;
  const matchTaskRoute = matchPath({ path: '/:categorySlug/:taskSlug' }, pathname)?.params;

  const [data, dispatchData] = useReducer(reducerFnData, INITIAL_DATA);
  const [currentCategory, setCurrentCategory] = useState(() => {
    const categoryId = matchCategoryRoute?.categorySlug.split('--')[0] || matchTaskRoute?.categorySlug.split('--')[0];
    const categoryIndex = findIndex(data, categoryId, 'id');

    return data[categoryIndex] ?? null;
  });
  const [currentTask, setCurrentTask] = useState(() => {
    const taskId = matchTaskRoute?.taskSlug.split('--')[0];
    const taskIndex = findIndex(currentCategory?.tasks, taskId, 'id');
    return currentCategory?.tasks[taskIndex] ?? null;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersState, dispatchFilters] = useReducer(reducerFnFilters, INITIAL_FILTERS);
  const { sort, categoryFilters, layout, taskFilters, sortDate } = filtersState;

  const defineCurrentCategory = useCallback(
    id => {
      const categoryIndex = findIndex(data, id, 'id');
      setCurrentCategory(data[categoryIndex] ?? null);
    },
    [data]
  );

  const defineCurrentTask = useCallback(
    id => {
      const taskIndex = findIndex(currentCategory?.tasks, id, 'id');
      setCurrentTask(currentCategory?.tasks[taskIndex] ?? null);
    },
    [currentCategory]
  );

  const filterData = useCallback(
    data => {
      let newData = !currentCategory ? data : currentCategory?.tasks;

      newData = newData.filter(item => {
        if (currentCategory) {
          const taskActiveFilter = getKeyWithTrueValue(taskFilters);
          return FILTERS_FN?.[taskActiveFilter](item);
        }
        if (!currentCategory && categoryFilters[actionNamesFilters.favorite]) {
          const categoryActiveFilter = getKeyWithTrueValue(categoryFilters);
          return FILTERS_FN?.[categoryActiveFilter]?.(item);
        }
        return item;
      });

      newData.sort((a, b) => {
        if (currentCategory) {
          const sortTaskActiveFilter = getKeyWithTrueValue(sortDate);
          return FILTERS_FN?.[sortTaskActiveFilter]?.(a, b);
        }
        const sortActiveFilter = getKeyWithTrueValue(sort);
        return FILTERS_FN?.[sortActiveFilter]?.(a, b);
      });

      return newData;
    },
    [categoryFilters, sort, sortDate, taskFilters, currentCategory]
  );

  let filteredData = filterData(data);

  const dataSearched = useMemo(() => {
    let newData = filteredData;
    if (searchTerm) {
      const splitedSearch = searchTerm.split(' ');
      newData = newData.filter(item => {
        return splitedSearch.every(term => item['name'].toLowerCase().includes(term.toLowerCase()));
      });
    }

    return newData;
  }, [searchTerm, filteredData]);

  const onChangeSearchTerm = newSearchTerm => setSearchTerm(newSearchTerm);

  const filtersActions = {
    sort: value => {
      dispatchFilters({ type: actionNamesFilters.sort, payload: { value } });
    },
    sortDate: value => {
      dispatchFilters({ type: actionNamesFilters.sortDate, payload: { value } });
    },
    categoryFilters: {
      favorite: value => {
        dispatchFilters({ type: actionNamesFilters.favorite, payload: { value } });
      },
    },
    taskFilters: {
      all: () => {
        dispatchFilters({ type: actionNamesFilters.taskFilterAll, payload: {} });
      },
      active: () => {
        dispatchFilters({ type: actionNamesFilters.taskFilterActive, payload: {} });
      },
      expired: () => {
        dispatchFilters({ type: actionNamesFilters.taskFilterExpired, payload: {} });
      },
      completed: () => {
        dispatchFilters({ type: actionNamesFilters.taskFilterCompleted, payload: {} });
      },
    },
    layout: {
      layoutLine: () => {
        dispatchFilters({ type: actionNamesFilters.layoutLine, payload: {} });
      },
      layoutSquare: () => {
        dispatchFilters({ type: actionNamesFilters.layoutSquare, payload: {} });
      },
    },
  };

  const categoryActions = {
    open: id => {
      defineCurrentCategory(id);
      if (filtersState.sortDate[actionNamesFilters.dateAsc]) {
        filtersActions.sort({ [actionNamesFilters.asc]: true, [actionNamesFilters.dec]: false });
      }
      if (filtersState.sortDate[actionNamesFilters.dateDec]) {
        filtersActions.sort({ [actionNamesFilters.asc]: false, [actionNamesFilters.dec]: true });
      }
    },
    add: categoryInfo => dispatchData({ type: actionTypesData.createCategory, payload: { categoryInfo } }),
    edit: (newCategoryInfo, categoryId) => {
      dispatchData({ type: actionTypesData.editCategory, payload: { newCategoryInfo, categoryId } });
    },
    delete: categoryId => dispatchData({ type: actionTypesData.deleteCategory, payload: { categoryId } }),
    hightlight: id => dispatchData({ type: actionTypesData.highlightCategory, payload: { categoryId: id } }),
  };

  const taskActions = {
    open: id => defineCurrentTask(id),
    add: taskInfo => dispatchData({ type: actionTypesData.createTask, payload: { taskInfo } }),
    edit: (newTaskInfo, taskId) => {
      dispatchData({
        type: actionTypesData.editTask,
        payload: { newTaskInfo, taskId, currentCategoryId: currentCategory.id },
      });
    },
    complete: taskId => {
      dispatchData({ type: actionTypesData.completeTask, payload: { taskId, currentCategoryId: currentCategory.id } });
    },
    delete: taskId => {
      dispatchData({ type: actionTypesData.deleteTask, payload: { taskId, currentCategoryId: currentCategory.id } });
    },
  };

  return (
    <DataContext.Provider
      value={{
        data,
        searchTerm,
        onChangeSearchTerm,
        dataSearched,
        currentCategory,
        defineCurrentCategory,
        currentTask,
        defineCurrentTask,
        sort,
        sortDate,
        categoryFilters,
        taskFilters,
        layout,
        filtersActions,
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
