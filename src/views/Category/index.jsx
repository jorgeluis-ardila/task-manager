import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useData } from 'providers/context';
import { actionNamesFilters } from 'providers/context/Data/constants';
import { StatusMessage } from 'core';
import { CardsList, CreateButtons, TaskFilters, TitleBar } from './components';

const Category = () => {
  const {
    dataSearched,
    taskActions,
    layout,
    currentCategory,
    filtersActions,
    taskFilters,
    categoryActions,
    searchTerm,
  } = useData();

  const [titleHeight, setTitleHeight] = useState(0);
  const titleRef = useRef(null);

  useEffect(() => {
    setTitleHeight(titleRef.current?.clientHeight);
  }, []);

  const hasCompleted = dataSearched.some(item => item.isCompleted);

  const handleDeleteCoompleted = () => {
    filtersActions.taskFilters.all();
    categoryActions.deleteCompleted(currentCategory.id);
  };

  if (!currentCategory) return <Navigate to="/" replace />;

  return (
    <>
      <TitleBar
        ref={titleRef}
        title={currentCategory?.name}
        completedTasks={currentCategory?.completedTasks}
        totalTasks={currentCategory?.totalTasks}
      />
      {!!currentCategory?.totalTasks && <TaskFilters actions={filtersActions} filters={taskFilters} />}
      {dataSearched.length ? (
        <CardsList
          data={dataSearched}
          actions={taskActions}
          layout={layout[actionNamesFilters.layoutSquare]}
          titleHeight={titleHeight}
        />
      ) : (
        <StatusMessage type={searchTerm ? 'emptySearch' : 'empty'} />
      )}
      <CreateButtons
        isOnCompleted={taskFilters[actionNamesFilters.taskFilterCompleted]}
        onDelete={handleDeleteCoompleted}
        hasCompleted={hasCompleted}
      />
    </>
  );
};

export { Category };
