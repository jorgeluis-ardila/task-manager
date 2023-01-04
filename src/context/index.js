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