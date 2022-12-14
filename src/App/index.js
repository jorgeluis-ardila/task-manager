import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoList/TodoItem';
import { TodoButtonCreate } from '../components/TodoButtonCreate';
// import './App.css';

const defaultTodos = [
  {text: 'Lavar Loza', completed: false },
  {text: 'Bañarme', completed: true },
  {text: 'Limpiar Jaula Carlota', completed: false },
  {text: 'Lorem imsum ', completed: false },
  {text: 'Sacar a Kaz', completed: false },
  {text: 'Tender Cama', completed: false },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos),
        [searchValue, setSearchValue] = React.useState(''),
        completedTodos = todos.filter(todo => !!todo.completed).length,
        totalTodos = todos.length;
        
  const searchTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  const findIndex = (text) => todos.findIndex(todo => todo.text === text);
  const completeTodo = (text) => {
    const newTodos = [...todos];
    newTodos[findIndex(text)].completed = !newTodos[findIndex(text)].completed;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    newTodos.splice(findIndex(text), 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchTodos.map(todo => (
          <TodoItem
            index={findIndex(todo.text)}
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoButtonCreate/>
    </React.Fragment>
  );
}

export default App;
