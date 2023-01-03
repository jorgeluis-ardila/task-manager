import React from 'react';
import { Context } from '../../context';
import { Greeting } from '../Greeting';
import { Counter } from '../Counter';
import { Filters } from '../Filter';
import { ToDoList } from '../ToDoList';
import { ButtonCreate } from '../ButtonCreate';
import { Modal } from '../Modal';
import { CreateForm } from '../CreateForm';
import { Status } from '../MessageLoading';

function AppUI() {

  const {
    loading,
    error,
    totalTasks,
    openModal,
    setOpenModal
  } = React.useContext(Context);

  return (
    <React.Fragment>

      <Greeting/>
      { loading &&
        <React.Fragment>
          <Counter message='Buscando tus tareas' />
          <Status
            loading={true}
            type={'loading'}
            message={'No desesperes'}
            highlihgt={'estamos cargando'}
          />
        </React.Fragment>
      }
      { error &&
        <Status
          loading={false}
          type={'error'}
          message={'Lo sentimos'}
          highlihgt={'Tuvimos un error'}
        />
      }
      { !loading && !error && (
        <React.Fragment>
          {
            totalTasks
            ? <React.Fragment>
                <Counter message='Tu progreso de hoy' />
                <Filters />
                <ToDoList />
              </React.Fragment>
            : <React.Fragment>
                <Counter message='No tienes tareas creadas' />
                <Status
                  loading={false}
                  type={'empty'}
                  message={'¿Aun no tienes tareas creadas?'}
                  highlihgt={'Que esperas para crearlas'}
                />
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