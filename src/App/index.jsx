import React from 'react';
import { useWindow } from '../utils/useWindow';
import { useTasks } from '../utils/useTask';
import { useAuthentication } from '../utils/useAuthentication';
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
import { CreateForm } from '../components/Forms/CreateForm/index.jsx';
import { TaskBody } from '../components/TaskBody';
// import app from './app.module.css'


function App() {

  const {
    checkLogin,
    isLogged,
    userData,
  } = useAuthentication(),
  {
    isMobile,
    detectSize
  } = useWindow(),
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
    setSearchValue
  } = useTasks(),
  statusMessageText = {
    loading: {
      type: 'loading',
      message: 'No desesperes',
      highlihgt: 'Estamos cargando',
    },
    error: {
      type: 'error',
      message: 'Lo sentimos',
      highlihgt: 'Tuvimos un error',
    },
    empty: {
      type: 'empty',
      message: 'Lo siento no hubo coincidencias para',
      highlihgt: searchValue,
    },
    start: {
      type: 'start',
      message: '¿Aun no tienes tareas creadas?',
      highlihgt: 'Que esperas para crearlas',
    }
  }

  window.addEventListener('load', () => {
      detectSize();
      checkLogin();
    });
  window.addEventListener('resize', detectSize);
  console.log(`totalTasks ${!totalTasks} ${totalTasks}`)
  console.log(`totalTasks && searchedTasks lenght ${!!totalTasks && !searchedTasks.lenght} ${searchedTasks.length}`);
  return (
    <React.StrictMode>
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
        statusMessageText={statusMessageText}
        onStatusMessage={(props) => <StatusMessage loading={loading} {...props} />}
        buttonCreate={
          <ButtonCreate
            openModal={openModal}
            setOpenModal={setOpenModal}
            setModalType={setModalType}
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
            // onRender={(task) => (
            //   <TaskItem
            //     key={task.key}
            //     text={task.text}
            //     completed={task.completed}
            //     onComplete={() => completeTask(task.text, task.key)}
            //     onDelete={() => deleteTask(task.text, task.key)}
            //   />
            // )}
          >
            {(task) => (
              <TaskItem
                key={task.key}
                text={task.text}
                completed={task.completed}
                onComplete={() => completeTask(task.text, task.key)}
                onDelete={() => deleteTask(task.text, task.key)}
              />
            )}
          </TaskList>
        }
      >
        {/* {(loading || error || !totalTasks)
          ? <StatusMessage
              loading={loading}
              type={loading ? 'loading' : error ? 'error' : !totalTasks && 'empty'}
              message={loading ? 'No desesperes' : error ? 'Lo sentimos' : !totalTasks && '¿Aun no tienes tareas creadas?'}
              highlihgt={loading ? 'estamos cargando' : error ? 'Tuvimos un error' : !totalTasks && 'Que esperas para crearlas'}
            />
          : ''
        } 
        {(!loading && !error) &&
          
        }
        */}
      </TaskBody>
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
