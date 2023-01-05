import React from 'react';
import { Context } from '../../context';
import { Greeting } from '../Greeting';
import { Counter } from '../Counter';
import { Filters } from '../Filter';
import { ToDoList } from '../ToDoList';
import { ButtonCreate } from '../ButtonCreate';
import { Status } from '../MessageLoading';
import app from './app.module.css'

function ResponsiveRender() {

  const {
    loading,
    error,
    totalTasks,
    openModal,
    setOpenModal,
    isMobile,
  } = React.useContext(Context);

  return (
    <React.Fragment>
      {isMobile
        ? <React.Fragment>
            <Greeting />
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
              <React.Fragment>
                {
                  totalTasks
                    ? <React.Fragment>
                        <Filters />
                        <ToDoList />
                      </React.Fragment>
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
                />
              </React.Fragment>
            )}
          </React.Fragment>
        : <React.Fragment>
            <div className={app['desktop-container']}>
              <div className={app['desktop-left']}>
                <Greeting />
                <Counter />
                <Status
                  type={'desktop'}
                  desktop={true}
                />
                {!loading && !error && (
                  <ButtonCreate
                    openModal={openModal}
                    setOpenModal={setOpenModal}
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
                    ? <React.Fragment>
                        <Filters />
                        <ToDoList />
                      </React.Fragment>
                    : <Status
                      loading={false}
                      type={'empty'}
                      message={'¿Aun no tienes tareas creadas?'}
                      highlihgt={'Que esperas para crearlas'}
                    />
                )}
              </div>
            </div>
          </React.Fragment>
      }
    </React.Fragment>
  );
}

export { ResponsiveRender }