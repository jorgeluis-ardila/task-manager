import React from 'react';
import { useWindow } from '../utils/hooks/useWindow';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { useTasks } from '../utils/hooks/useTask';
import { TaskHeader } from '../components/TaskHeader';
import { ProfileBar } from '../components/Account/Profile';
import { Greeting } from "../components/Account/Profile/Greeting";
import { ProfileButton } from "../components/Account/Profile/ProfileButton";
import { Counter } from '../components/Counter';
import { StatusMessage } from '../components/MessageLoading';
import { Filters } from '../components/Filter';
import { FilterButton } from '../components/Filter/FilterButton.jsx';
import { SearchBar } from '../components/SearchBar';
import { TaskList } from '../components/TaskList'
import { TaskItem } from '../components/TaskList/TaskItem';
import { ButtonCreate } from '../components/ButtonCreate';
import { Modal } from '../components/Modal';
import { SessionForm } from '../components/Forms/Login/index.jsx';
import { CreateForm } from '../components/Forms/CreateTask/index.jsx';
import { TaskBody } from '../components/TaskBody';
import { ChangeAlert } from '../components/ChangeAlert';
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
