import React from 'react';
import { ToDoContext } from '../../context';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoButtonCreate } from '../TodoButtonCreate';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { ToDoMessage, ToDoLoading } from '../MessageLoading';

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