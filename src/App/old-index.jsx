import React from 'react';
import { useWindow } from '../hooks/useWindow';
import { useAuthentication } from '../hooks/useAuthentication';
import { useTasks } from '../hooks/useTask';
import { TaskHeader } from '../oldComponents/TaskHeader';
import { ProfileBar } from '../oldComponents/Account/Profile';
import { Greeting } from "../oldComponents/Account/Profile/Greeting";
// import { ProfileButton } from "../components/Account/Profile/ProfileButton";
import { Counter } from '../oldComponents/Counter';
import { StatusMessage } from '../oldComponents/MessageLoading';
import { Filters } from '../oldComponents/Filter';
import { FilterButton } from '../oldComponents/Filter/FilterButton';
import { SearchBar } from '../oldComponents/SearchBar';
import { TaskList } from '../oldComponents/TaskList'
import { TaskItem } from '../oldComponents/TaskList/TaskItem';
import { ButtonCreate } from '../oldComponents/ButtonCreate';
import { Modal } from '../oldComponents/Modal';
import { SessionForm } from '../oldComponents/Forms/Login';
import { CreateForm } from '../oldComponents/Forms/CreateTask';
import { TaskBody } from '../oldComponents/TaskBody';
import { ChangeAlert } from '../oldComponents/ChangeAlert';
// import app from './app.module.css'


function App() {

  const {
    isMobile,
    detectSize
  } = useWindow(),
  {
    checkLogin,
    isLogged,
    userData,
  } = useAuthentication(),
  {
    loading,
    error,
    openModal,
    setOpenModal,
    closeModal,
    modalType,
    setModalType,
    totalTasks,
    addTask,
    completedTasks,
    searchedTasks,
    completeTask,
    deleteTask,
    deleteCompleted,
    filterTasks,
    setFilterTasks,
    searchValue,
    setSearchValue,
    storageChange,
    handleSync
  } = useTasks();

  window.addEventListener('load', () => {
    detectSize();
    checkLogin();
  });
  window.addEventListener('resize', detectSize);

  return (
    <React.StrictMode>
      <ChangeAlert
        storageChange={storageChange}
        handleSync={handleSync}
      />
      <TaskHeader>
        <ProfileBar>
          {/* <ProfileButton
            isMobile={isMobile}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setModalType={setModalType}
            isLogged={isLogged}
            userData={userData}
          /> */}
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
      <TaskBody
        loading={loading}
        error={error}
        empty={!!totalTasks && !searchedTasks.length}
        start={!totalTasks}
        isMobile={isMobile}
        onStatusMessage={(props) =>
          <StatusMessage
            loading={loading}
            searchValue={searchValue}
            {...props}
          />
        }
        buttonCreate={
          <ButtonCreate
            openModal={openModal}
            setOpenModal={setOpenModal}
            setModalType={setModalType}
            storageChange={storageChange}
          />
        }
        filters={
          <Filters
            searchBar={
              <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            }
            filterButton={(button, handleActive) => (
              <FilterButton
                button={button}
                onClick={handleActive}
                setFilterTasks={setFilterTasks}
              />
            )}
          />
        }
        tasks={
          <TaskList
            searchedTasks={searchedTasks}
            filterTasks={filterTasks}
            deleteCompleted={  deleteCompleted}
            onRender={(task) => (
              <TaskItem
                key={task.key}
                text={task.text}
                completed={task.completed}
                onComplete={() => completeTask(task.text, task.key)}
                onDelete={() => deleteTask(task.text, task.key)}
                storageChange={storageChange}
              />
            )}
          />
        }
      />
      {/* <div className={app['desktop-container']}>
        <div className={app['desktop-left']}>
        </div>
        <div className={app['desktop-right']}>
        </div>
      </div> */}

      <Modal
        openModal={openModal}
        closeModal={closeModal}
      >
        {
          {
            'login': <SessionForm
              closeModal={closeModal}
            />,
            'create': <CreateForm
              addTask={addTask}
              closeModal={closeModal}
            />
          }[modalType]
        }
      </Modal>
    </React.StrictMode>
  );
}

export default App;
