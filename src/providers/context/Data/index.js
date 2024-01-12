import { createContext, useContext, useState, useMemo, useReducer, useCallback, useEffect } from 'react';
import { matchPath, useLocation, useSearchParams } from 'react-router-dom';
import { getDocs, getFirestore, collection } from 'firebase/firestore';
import { findIndex, getKeyWithTrueValue } from 'utils';
// import { useStateLocalStorage } from 'hooks';
import { actionTypesData, reducerFnData, reducerFnFilters } from './reducers';
import { FILTERS_FN, INITIAL_DATA, INITIAL_FILTERS, actionTypesFilters } from './constants';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { pathname } = useLocation();

  const matchCategoryRoute = useMemo(() => matchPath({ path: 'boards/:categorySlug' }, pathname)?.params, [pathname]);

  const matchTaskRoute = useMemo(
    () =>
      matchPath({ path: 'boards/:categorySlug/t/:taskSlug' }, pathname)?.params ||
      matchPath({ path: 'boards/:categorySlug/t/:taskSlug/edit' }, pathname)?.params,
    [pathname]
  );

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

  const db = getFirestore();
  const onGetBoards = async () => {
    getDocs(collection(db, 'boards')).then(querySnapshot => {
      console.log(querySnapshot.docs);
    });
  };

  const defineCurrentCategory = async id => {
    const categoryIndex = findIndex(data, id, 'id');
    const selectedCategory = data[categoryIndex] ?? null;
    await setCurrentCategory(selectedCategory);
    return selectedCategory;
  };

  const defineCurrentTask = (id, category) => {
    const taskIndex = findIndex(category?.tasks, id, 'id');
    setCurrentTask(category?.tasks[taskIndex] ?? null);
  };

  const onChangeSearchTerm = newSearchTerm => setSearchTerm(newSearchTerm);

  const filtersActions = {
    sort: value => {
      dispatchFilters({ type: actionTypesFilters.sort, payload: { value } });
    },
    sortDate: value => {
      dispatchFilters({ type: actionTypesFilters.sortDate, payload: { value } });
    },
    categoryFilters: {
      favorite: value => {
        dispatchFilters({ type: actionTypesFilters.favorite, payload: { value } });
      },
    },
    taskFilters: {
      all: () => {
        dispatchFilters({ type: actionTypesFilters.taskFilterAll });
      },
      active: () => {
        dispatchFilters({ type: actionTypesFilters.taskFilterActive });
      },
      expired: () => {
        dispatchFilters({ type: actionTypesFilters.taskFilterExpired });
      },
      completed: () => {
        dispatchFilters({ type: actionTypesFilters.taskFilterCompleted });
      },
    },
    layout: {
      layoutLine: () => {
        dispatchFilters({ type: actionTypesFilters.layoutLine });
      },
      layoutSquare: () => {
        dispatchFilters({ type: actionTypesFilters.layoutSquare });
      },
    },
  };

  const categoryActions = {
    open: categoryId => {
      defineCurrentCategory(categoryId);
      if (filtersState.sortDate[actionTypesFilters.dateAsc]) {
        filtersActions.sort({ [actionTypesFilters.asc]: true, [actionTypesFilters.dec]: false });
      }
      if (filtersState.sortDate[actionTypesFilters.dateDec]) {
        filtersActions.sort({ [actionTypesFilters.asc]: false, [actionTypesFilters.dec]: true });
      }
    },
    add: categoryInfo => dispatchData({ type: actionTypesData.createCategory, payload: { categoryInfo } }),
    edit: (newCategoryInfo, categoryId) => {
      dispatchData({ type: actionTypesData.editCategory, payload: { newCategoryInfo, categoryId } });
    },
    delete: categoryId => dispatchData({ type: actionTypesData.deleteCategory, payload: { categoryId } }),
    hightlight: categoryId =>
      dispatchData({ type: actionTypesData.highlightCategory, payload: { categoryId: categoryId } }),
    deleteCompleted: categoryId =>
      dispatchData({ type: actionTypesData.deleteCompleted, payload: { categoryId: categoryId } }),
  };

  const taskActions = {
    open: async (taskId, categoryId) => {
      const selectedCategory = await defineCurrentCategory(categoryId);
      defineCurrentTask(taskId, selectedCategory);
    },
    add: taskInfo => dispatchData({ type: actionTypesData.createTask, payload: { taskInfo } }),
    edit: (newTaskInfo, taskId, categoryId) => {
      dispatchData({
        type: actionTypesData.editTask,
        payload: { newTaskInfo, taskId, currentCategoryId: categoryId },
      });
    },
    complete: (taskId, categoryId) => {
      dispatchData({ type: actionTypesData.completeTask, payload: { taskId, currentCategoryId: categoryId } });
    },
    delete: (taskId, categoryId) => {
      dispatchData({ type: actionTypesData.deleteTask, payload: { taskId, currentCategoryId: categoryId } });
    },
  };

  const filterData = useCallback(
    data => {
      let newData = !matchCategoryRoute ? data : currentCategory?.tasks;

      newData = newData?.filter(item => {
        if (currentCategory) {
          const taskActiveFilter = getKeyWithTrueValue(taskFilters);
          return FILTERS_FN?.[taskActiveFilter](item);
        }
        if (!currentCategory) {
          const categoryActiveFilter = getKeyWithTrueValue(categoryFilters);
          return FILTERS_FN?.[categoryActiveFilter]?.(item) ?? item;
        }
        return item;
      });

      newData?.sort((a, b) => {
        const sortTaskActiveFilter = getKeyWithTrueValue(sortDate);
        if (currentCategory && sortTaskActiveFilter) {
          return FILTERS_FN?.[sortTaskActiveFilter]?.(a, b);
        }
        const sortActiveFilter = getKeyWithTrueValue(sort);
        return FILTERS_FN?.[sortActiveFilter]?.(a, b);
      });

      return newData ?? [];
    },
    [categoryFilters, sort, sortDate, taskFilters, currentCategory, matchCategoryRoute]
  );

  const filteredData = filterData(data);

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
        onGetBoards,
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
