import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {

  const {
    storage: todos,
    saveStorage: saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState(''),
        [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length,
        totalTodos = todos.length,
        searchTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const findIndex = (text) => todos.findIndex(todo => todo.text === text);

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveToDos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    newTodos[findIndex(text)].completed = !newTodos[findIndex(text)].completed;
    saveToDos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    newTodos.splice(findIndex(text), 1);
    saveToDos(newTodos);
  };

  return (
    <ToDoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      findIndex,
      addTodo,
      completeTodo,
      deleteTodo,
      searchTodos,
      searchValue,
      setSearchValue,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </ToDoContext.Provider>
  );

}

export { ToDoContext, ToDoProvider}