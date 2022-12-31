import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const Context = React.createContext();

function ToDoProvider(props) {

  const {
    storage: todos,
    saveStorage: saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [isMobile, setIsMobile] = React.useState(false),
        [searchValue, setSearchValue] = React.useState(''),
        [filterTodos, setFilterTodos] = React.useState(''),
        [openModal, setOpenModal] = React.useState(false);

  const detectMobile = () => {
    setIsMobile(window.innerWidth <= 768 ? true : false);
  }
  React.useEffect(() => {
    window.addEventListener('resize', detectMobile);
    detectMobile();
    return () => window.removeEventListener('resize', detectMobile);
  })

  const filteredToDos = (filter) => {
    switch (filter) {
      case 'complete':
        return todos.filter(todo => !!todo.completed)
      case 'active':
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  }

  const completedTodos = filteredToDos('complete').length,
        totalTodos = filteredToDos().length,
        rederedTodos = filteredToDos(filterTodos),
        searchTodos = rederedTodos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

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
    <Context.Provider value={{
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
      filterTodos,
      setFilterTodos,
      openModal,
      setOpenModal,
      isMobile
    }}>
      {props.children}
    </Context.Provider>
  );

}

export { Context, ToDoProvider}