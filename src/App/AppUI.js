import React from 'react';
import { ToDoContext } from '../components/TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoButtonCreate } from '../components/TodoButtonCreate';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { ToDoMessage, ToDoLoading } from '../components/MessageLoading';

function AppUI() {

  const {
    loading,
    error,
    searchTodos,
    openModal,
    setOpenModal
  } = React.useContext(ToDoContext);

  return (
    <React.Fragment>

      { loading && <ToDoLoading /> }
      { error && <ToDoMessage message={'Hubo un error!'} /> }
      { (!loading && !error) &&
        <React.Fragment>
          {
            searchTodos.length
            ? <React.Fragment>
                <TodoCounter />
                <TodoSearch />
              </React.Fragment>
            : <TodoCounter message='Aun no tienes tareas creadas' />
          }
          {
            !searchTodos.length
            ? <ToDoMessage message={"Crea tus To Do's"} />
            : <TodoList />
          }
          <TodoButtonCreate
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </React.Fragment>
      }

      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

    </React.Fragment>
  );
}

export { AppUI }