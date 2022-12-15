import React from 'react';
import { ToDoContext } from '../components/TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoButtonCreate } from '../components/TodoButtonCreate';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';

function AppUI() {

  const { openModal, setOpenModal } = React.useContext(ToDoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      <TodoList />

      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      <TodoButtonCreate
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI }