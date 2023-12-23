import { useState } from 'react';
import { useLocalStorage } from './useLocalStorageDataOLD';
import { useStorageListener } from './useStorageListener';

export function useTasks() {
  const {
      storage: tasks,
      saveStorage: saveTasks,
      syncronizeInfo: syncronizeTasks,
      loading,
      error,
    } = useLocalStorage('TODOS_V1', []),
    { storageChange, handleSync } = useStorageListener(syncronizeTasks),
    [searchValue, setSearchValue] = useState(''),
    [filterTasks, setFilterTasks] = useState(''),
    [openModal, setOpenModal] = useState(false),
    [modalType, setModalType] = useState('');

  const filteredTasks = filter => {
    switch (filter) {
      case 'complete':
        return tasks.filter(todo => !!todo.completed);
      case 'active':
        return tasks.filter(todo => !todo.completed);
      default:
        return tasks;
    }
  };

  const completedTasks = filteredTasks('complete').length,
    totalTasks = filteredTasks().length,
    searchedTasks = filteredTasks(filterTasks).filter(todo =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

  const findIndex = (text, key) => tasks.findIndex(todo => todo.text === text && todo.key === key);

  const addTask = text => {
    const newTasks = [...tasks];
    newTasks.push({
      completed: false,
      text,
      key: tasks.length + 1,
    });
    saveTasks(newTasks);
  };

  const completeTask = (text, key) => {
    const newTasks = [...tasks];
    newTasks[findIndex(text, key)].completed = !newTasks[findIndex(text, key)].completed;
    saveTasks(newTasks);
  };

  const deleteTask = (text, key) => {
    const newTasks = [...tasks];
    newTasks.splice(findIndex(text, key), 1);
    newTasks.forEach((task, index) => (task.key = ++index));
    saveTasks(newTasks);
  };

  const deleteCompleted = () => {
    const oldTasks = [...tasks];
    const newTasks = oldTasks.filter(task => task.completed !== true);
    newTasks.forEach((task, index) => (task.key = ++index));
    saveTasks(newTasks);
  };

  const closeModal = () => {
    setOpenModal(false);
    setTimeout(() => {
      setModalType('');
    }, 300);
  };

  return {
    loading,
    error,
    searchValue,
    setSearchValue,
    filterTasks,
    setFilterTasks,
    totalTasks,
    completedTasks,
    searchedTasks,
    addTask,
    completeTask,
    deleteTask,
    deleteCompleted,
    openModal,
    setOpenModal,
    closeModal,
    modalType,
    setModalType,
    storageChange,
    handleSync,
  };
}
