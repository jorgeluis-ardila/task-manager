import { createContext, useContext, useState, useMemo } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { isExpired } from '../../utils';
import { INITIAL_DATA } from './mockData';

const findIndex = (data, id) => data.findIndex(item => item.id === id);

const FILTERS_FN = {
  none: prevTasks => prevTasks,
  active: prevTasks => prevTasks.filter(task => !task.completed),
  completed: prevTasks => prevTasks.filter(task => !!task.completed),
  expired: prevTasks => prevTasks.filter(task => isExpired(task.date)),
};

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [isLoading /* setIsLoading */] = useState(false);
  const [error /* setError */] = useState(false);
  const [data /* setData */] = useLocalStorage('task', { value: INITIAL_DATA }, true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCategory, setCurrentCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState('none');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ content: null, type: '' });

  const onChangeTheme = () => setTheme(prevTheme => (prevTheme !== 'light' ? 'light' : 'dark'));

  const onOpenCategory = newCategoryId => {
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

  const onChangeSearchTerm = newSearchTerm => setSearchTerm(newSearchTerm);

  const onChangeActiveFilter = newFilter => setActiveFilter(newFilter);

  const onOpenModal = (modalContent, modalType) => {
    setModalData({ content: modalContent, type: modalType });
    setIsModalOpen(true);
  };
  const onCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalData({ content: null, type: '' });
    }, 500);
  };

  return (
    <StoreContext.Provider
      value={{
        theme,
        onChangeTheme,
        isLoading,
        error,
        data: data.value,
        searchTerm,
        onChangeSearchTerm,
        dataSearched,
        currentCategory,
        onOpenCategory,
        tasksFiltered,
        activeFilter,
        onChangeActiveFilter,
        isModalOpen,
        modalData,
        onOpenModal,
        onCloseModal,
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
    isModalOpen,
    modalData,
    onOpenModal,
    onCloseModal,
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
    isModalOpen,
    modalData,
    onOpenModal,
    onCloseModal,
  };
};

export { StoreProvider, useStore };
