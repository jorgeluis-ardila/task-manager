import React from 'react';
import { Context } from '../../context';
import { ProfileBar } from '../Account/Profile';
import { Counter } from '../Counter';
import { Filters } from '../Filter';
import { ToDoList } from '../TaskList';
import { ButtonCreate } from '../ButtonCreate';
import { Status } from '../MessageLoading';
import { CreateForm } from '../Forms/CreateForm';
import { SessionForm } from '../Forms/Login';
import app from './app.module.css'

function ResponsiveRender() {

  const {
    loading,
    error,
    totalTasks,
    openModal,
    setOpenModal,
    setModalType,
    isMobile,
  } = React.useContext(Context);

  return (
    <>
      {isMobile
        ? <>
            <ProfileBar />
            <Counter />
            {loading &&
              <Status
                loading={true}
                type={'loading'}
                message={'No desesperes'}
                highlihgt={'estamos cargando'}
              />
            }
            {error &&
              <Status
                loading={false}
                type={'error'}
                message={'Lo sentimos'}
                highlihgt={'Tuvimos un error'}
              />
            }
            {!loading && !error && (
              <>
                {
                  totalTasks
                    ? <>
                        <Filters />
                        <ToDoList />
                      </>
                    : <Status
                        loading={false}
                        type={'empty'}
                        message={'¿Aun no tienes tareas creadas?'}
                        highlihgt={'Que esperas para crearlas'}
                      />
                }
                <ButtonCreate
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  setModalType={setModalType}
                />
              </>
            )}
          </>
        : <>
            <div className={app['desktop-container']}>
              <div className={app['desktop-left']}>
                <ProfileBar />
                <Counter />
                <Status
                  type={'desktop'}
                  desktop={true}
                />
                {!loading && !error && (
                  <ButtonCreate
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    setModalType={setModalType}
                  />
                )}
              </div>
              <div className={app['desktop-right']}>
                {loading &&
                  <Status
                    loading={true}
                    type={'loading'}
                    message={'No desesperes'}
                    highlihgt={'estamos cargando'}
                  />
                }
                {error &&
                  <Status
                    loading={false}
                    type={'error'}
                    message={'Lo sentimos'}
                    highlihgt={'Tuvimos un error'}
                  />
                }
                {!loading && !error && (
                  totalTasks
                    ? <>
                        <Filters />
                        <ToDoList />
                      </>
                    : <Status
                      loading={false}
                      type={'empty'}
                      message={'¿Aun no tienes tareas creadas?'}
                      highlihgt={'Que esperas para crearlas'}
                    />
                )}
              </div>
            </div>
          </>
      }
    </>
  );
}

function ModalContent() {
  const {
    modalType,
  } = React.useContext(Context);

  return(
    <>
      {
        {
          'login': <SessionForm/>,
          'create': <CreateForm/>
        }[modalType]
      }
    </>
  );
}

export { ResponsiveRender, ModalContent }