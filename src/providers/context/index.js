import { createContext, useContext, useState, useMemo } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { isExpired } from '../../utils';

const findIndex = (data, id) => data.findIndex(item => item.id === id);

const INITIAL_DATA = [
  {
    id: 1,
    name: 'Categori Name really long too',
    tasks: [
      {
        id: 1,
        name: 'Task Title 1', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: true,
        dueDate: '2023-11-30',
        category: 'Categori Name really long too',
      },
      {
        id: 2,
        name: 'Task Title 2', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: true,
        dueDate: '2023-11-30',
        category: 'Categori Name really long too',
      },
      {
        id: 3,
        name: 'Task Title 3', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: false,
        dueDate: '2023-11-30',
        category: 'Categori Name really long too',
      },
      {
        id: 4,
        name: 'Task Title 4', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: false,
        dueDate: '2023-11-30',
        category: 'Categori Name really long too',
      },
      {
        id: 5,
        name: 'Task Title 5', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: false,
        dueDate: '2023-11-30',
        category: 'Categori Name really long too',
      },
    ],
    isFavorite: false,
    totalTasks: 5,
    completedTasks: 2,
  },
  {
    id: 2,
    name: 'Category Name 2',
    tasks: [
      {
        id: 1,
        name: 'Task Title 1', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: true,
        dueDate: '2023-11-30',
        category: 'Category Name 2',
      },
      {
        id: 2,
        name: 'Task Title 2', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: false,
        dueDate: '2023-11-30',
        category: 'Category Name 2',
      },
    ],
    isFavorite: false,
    totalTasks: 2,
    completedTasks: 1,
  },
  {
    id: 3,
    name: 'The Name of Category',
    tasks: [
      {
        id: 1,
        name: 'Task Title', //max lenght 30
        description: 'Task description, yara yara numbeleque yara yara', //max lenght 100
        isCompleted: true,
        dueDate: '2023-11-30',
        category: 'The Name of Category',
      },
    ],
    isFavorite: false,
    totalTasks: 10,
    completedTasks: 0,
  },
];

const INITIAL_STATE = {
  theme: 'light',
  onChangeTheme: () => {},
  isLoading: false,
  error: false,
  data: INITIAL_DATA,
  searchTerm: '',
  onChangeSearchTerm: newSearchTerm => {},
  dataSearched: [],
  currentCategory: null,
  onOpenCategory: newCategoryId => {},
  tasksFiltered: [],
  activeFilter: 'none',
  onChangeActiveFilter: newFilter => {},
  modalOptions: {
    isOpen: false,
    modalContent: {
      login: false,
      create: false,
    },
  },
  onChangeModalOptions: newValue => {},
};

const FILTERS_FN = {
  none: prevTasks => prevTasks,
  active: prevTasks => prevTasks.filter(task => !task.completed),
  completed: prevTasks => prevTasks.filter(task => !!task.completed),
  expired: prevTasks => prevTasks.filter(task => isExpired(task.date)),
};

const StoreContext = createContext(INITIAL_STATE);

const StoreProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', INITIAL_STATE.theme);
  const [isLoading /* setIsLoading */] = useState(INITIAL_STATE.isLoading);
  const [error /* setError */] = useState(INITIAL_STATE.error);
  const [data /* setData */] = useLocalStorage('task', { value: INITIAL_STATE.data }, true);
  const [currentCategory, setCurrentCategory] = useState(INITIAL_STATE.currentCategory);
  const [searchTerm, setSearchTerm] = useState(INITIAL_STATE.searchTerm);
  const [activeFilter, setActiveFilter] = useState(INITIAL_STATE.activeFilter);
  const [modalOptions, setModalOptions] = useState(INITIAL_STATE.modalOptions);

  const handleTheme = () => setTheme(prevTheme => (prevTheme !== 'light' ? 'light' : 'dark'));

  const handleOpenCategory = newCategoryId => {
    const categories = data.value;
    const categoryIndex = findIndex(categories, newCategoryId);
    setCurrentCategory(categories[categoryIndex] ?? null);
  };

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
    const categoriesList = data.value;
    let newData = currentCategory ? [...tasksFiltered] : [...categoriesList];
    if (searchTerm) {
      const splitedSearch = searchTerm.split(' ');
      newData = newData.filter(item => {
        return splitedSearch.every(term => item['name'].toLowerCase().includes(term.toLowerCase()));
      });
    }

    return newData;
  }, [searchTerm, tasksFiltered, currentCategory, data.value]);

  const handleSearchTerm = newSearchTerm => setSearchTerm(newSearchTerm);

  const handleActiveFilter = newFilter => setActiveFilter(newFilter);
  const handleModalOptions = newValue => setModalOptions(newValue);

  return (
    <StoreContext.Provider
      value={{
        theme,
        onChangeTheme: handleTheme,
        isLoading,
        error,
        data: data.value,
        searchTerm,
        onChangeSearchTerm: handleSearchTerm,
        dataSearched,
        currentCategory,
        onOpenCategory: handleOpenCategory,
        tasksFiltered,
        activeFilter,
        onChangeActiveFilter: handleActiveFilter,
        modalOptions,
        onChangeModalOptions: handleModalOptions,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  const {
    theme,
    onChangeTheme,
    isLoading,
    error,
    data,
    searchTerm,
    onChangeSearchTerm,
    dataSearched,
    currentCategory,
    onOpenCategory,
    tasksFiltered,
    activeFilter,
    onChangeActiveFilter,
    modalOptions,
    onChangeModalOptions,
  } = useContext(StoreContext);
  return {
    theme,
    onChangeTheme,
    isLoading,
    error,
    data,
    searchTerm,
    onChangeSearchTerm,
    dataSearched,
    currentCategory,
    onOpenCategory,
    tasksFiltered,
    activeFilter,
    onChangeActiveFilter,
    modalOptions,
    onChangeModalOptions,
  };
};

export { StoreContext, StoreProvider, useStore };
