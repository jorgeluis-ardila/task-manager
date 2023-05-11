import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTasks() {

  const {
    storage: tasks,
    saveStorage: saveToDos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []),
  [searchValue, setSearchValue] = React.useState(''),
  [filterTasks, setFilterTasks] = React.useState(''),
  [openModal, setOpenModal] = React.useState(false),
  [modalType, setModalType] = React.useState('');

  const filteredTasks = (filter) => {
    switch (filter) {
      case 'complete':
        return tasks.filter(todo => !!todo.completed)
      case 'active':
        return tasks.filter(todo => !todo.completed)
      default:
        return tasks
    }
  }

  const completedTasks = filteredTasks('complete').length,
        totalTasks = filteredTasks().length,
        searchedTasks = filteredTasks(filterTasks).filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const findIndex = (text, key) => tasks.findIndex(todo => todo.text === text && todo.key === key);

  const addTask = (text) => {
    const newTasks = [...tasks];
    newTasks.push({
      completed: false,
      text,
      key: tasks.length + 1
    });
    saveToDos(newTasks);
  };

  const completeTask = (text, key) => {
    const newTasks = [...tasks];
    newTasks[findIndex(text, key)].completed = !newTasks[findIndex(text, key)].completed;
    saveToDos(newTasks);
  };

  const deleteTask = (text, key) => {
    const newTasks = [...tasks];
    newTasks.splice(findIndex(text, key), 1);
    newTasks.forEach((task, index) => task.key = ++index);
    saveToDos(newTasks);
  };

  const deleteCompleted = () => {
    const oldTasks = [...tasks];
    const newTasks = oldTasks.filter(task => task.completed !== true)
    console.log(newTasks);
    newTasks.forEach((task, index) => task.key = ++index);
    saveToDos(newTasks);
  }

  const closeModal = () => {
    setOpenModal(false);
    setTimeout(() => {
      setModalType('');
    }, 300);
  }

  return (
    {
      loading,
      error,
      searchValue,
      setSearchValue,
      filterTasks,
      setFilterTasks,
      openModal,
      setOpenModal,
      closeModal,
      modalType,
      setModalType,
      totalTasks,
      completedTasks,
      searchedTasks,
      addTask,
      completeTask,
      deleteTask,
      deleteCompleted,
    }
  );

}
