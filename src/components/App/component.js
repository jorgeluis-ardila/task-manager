import React from 'react';
import { Context } from '../../context';
import { Counter } from '../Counter';
import { Filters } from '../Filter';
import { ToDoList } from '../ToDoList';
import { ButtonCreate } from '../ButtonCreate';
import { Modal } from '../Modal';
import { CreateForm } from '../CreateForm';
import { Message, Loading } from '../MessageLoading';

function AppUI() {

  const {
    loading,
    error,
    totalTodos,
    openModal,
    setOpenModal
  } = React.useContext(Context);

  return (
    <React.Fragment>

      { loading && <Loading /> }
      { error && <Message message={'Hubo un error!'} /> }
      { !loading && !error && (
        <React.Fragment>
          {
            totalTodos
            ? <React.Fragment>
                <Counter />
                <Filters />
                <ToDoList />
              </React.Fragment>
            : <React.Fragment>
                <Counter message='Aun no tienes tareas creadas' />
                <Message message={"Crea tus To Do's"} />
              </React.Fragment>
          }
          <ButtonCreate
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </React.Fragment>
      )}

      {!!openModal && (
        <Modal>
          <CreateForm></CreateForm>
        </Modal>
      )}

    </React.Fragment>
  );
}

export { AppUI }