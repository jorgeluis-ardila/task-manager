import React from 'react';
import { Context } from '../utils/context';
import { ResponsiveRender, ModalContent } from './responsive';
import { ProfileBar } from '../components/Account/Profile';
import { Greeting } from "../components/Account/Profile/Greeting";
import { ProfileButton } from "../components/Account/Profile/ProfileButton";
import { Counter } from '../components/Counter';
import { StructureTaskList } from '../components/TaskList'
import { ButtonCreate } from '../components/ButtonCreate';
import { LoadingErrorMessage, StatusMessage } from '../components/MessageLoading';
import { Modal } from '../components/Modal';
import { firebaseConfig } from '../utils/config/configFirebase.js';
import { initializeApp } from 'firebase/app';
import { TaskHeader } from '../components/TaskHeader/TaskHeader';

initializeApp(firebaseConfig);

export function AppUI() {
  const {
    loading,
    error,
    openModal,
    setOpenModal,
    setModalType,
    isMobile,
    isLogged,
    userData,
    completedTasks,
    totalTasks
  } = React.useContext(Context);
  return (
    <>
      <ResponsiveRender>
        <TaskHeader>
          <ProfileBar>
            <ProfileButton
              isMobile={isMobile}
              openModal={openModal}
              setOpenModal={setOpenModal}
              setModalType={setModalType}
              isLogged={isLogged}
              userData={userData}
            />
            <Greeting
              isLogged={isLogged}
              userData={userData}
            />
          </ProfileBar>
          <Counter
            loading={loading}
            error={error}
            completedTasks={completedTasks}
            totalTasks={totalTasks}
          />
        </TaskHeader>
        {(loading || error)
          ? <LoadingErrorMessage
              loading={loading}
              error={error}
            />
          : <>
              <StructureTaskList/>
              <ButtonCreate
                openModal={openModal}
                setOpenModal={setOpenModal}
                setModalType={setModalType}
              />
            </>
        }
      </ResponsiveRender>

      <Modal>
        <ModalContent/>
      </Modal>
    </>
  );
}