import React from 'react';
import { Context } from '../utils/context';
import { ProfileBar } from '../components/Account/Profile';
import { Counter } from '../components/Counter';
import { StructureTaskList } from '../components/TaskList'
import { ButtonCreate } from '../components/ButtonCreate';
import { LoadingErrorMessage, StatusMessage } from '../components/MessageLoading';
import { CreateForm } from '../components/Forms/CreateForm';
import { SessionForm } from '../components/Forms/Login';
import app from './app.module.css'



function ResponsiveRender({children}) {

  const {
    loading,
    error,
    openModal,
    setOpenModal,
    setModalType,
    isMobile,
  } = React.useContext(Context);
  return (
    <>
      {isMobile
        ? <>
            {children}
          </>
        : <>
            <div className={app['desktop-container']}>
              <div className={app['desktop-left']}>
                <ProfileBar />
                <Counter />
                <StatusMessage
                  type={'desktop'}
                  desktop={true}
                />
                {(!loading && !error) &&
                  <ButtonCreate
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    setModalType={setModalType}
                  />
                }
              </div>
              <div className={app['desktop-right']}>
              {(loading || error)
                ? <LoadingErrorMessage
                    loading={loading}
                    error={error}
                  />
                : <StructureTaskList/>
              }
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