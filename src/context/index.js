import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const Context = React.createContext();

function ToDoProvider(props) {

  const {
    storage: tasks,
    saveStorage: saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []),
    [searchValue, setSearchValue] = React.useState(''),
    [filterTasks, setFilterTasks] = React.useState(''),
    [openModal, setOpenModal] = React.useState(false);

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

  const findIndex = (text) => tasks.findIndex(todo => todo.text === text);

  const addTask = (text) => {
    const newTasks = [...tasks];
    newTasks.push({
      completed: false,
      text,
    });
    saveToDos(newTasks);
  };

  const completeTask = (text) => {
    const newTasks = [...tasks];
    newTasks[findIndex(text)].completed = !newTasks[findIndex(text)].completed;
    saveToDos(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    newTasks.splice(findIndex(text), 1);
    saveToDos(newTasks);
  };

  return (
    <Context.Provider value={{
      loading,
      error,
      searchValue,
      setSearchValue,
      filterTasks,
      setFilterTasks,
      openModal,
      setOpenModal,
      totalTasks,
      completedTasks,
      searchedTasks,
      findIndex,
      addTask,
      completeTask,
      deleteTask,
    }}>
      {props.children}
    </Context.Provider>
  );

}

export { Context, ToDoProvider}