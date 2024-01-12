import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import cn from 'classnames';
import { useData } from 'providers/context';
import { actionTypesFilters } from 'providers/context/Data/constants';
import { CardList, StatusMessage, TaskCard } from 'core';
import { CreateButtons, TaskFilters, TitleBar } from './components';

const Category = () => {
  const { dataSearched, layout, currentCategory, filtersActions, taskFilters, categoryActions, searchTerm } = useData();

  const [titleHeight, setTitleHeight] = useState(0);
  const titleRef = useRef(null);
  const cardsLayout = layout[actionTypesFilters.layoutSquare];

  useEffect(() => {
    setTitleHeight(titleRef.current?.clientHeight);
  }, []);

  const hasCompleted = dataSearched.some(item => item.isCompleted);

  const handleDeleteCoompleted = () => {
    filtersActions.taskFilters.all();
    categoryActions.deleteCompleted(currentCategory.id);
  };

  if (!currentCategory) return <Navigate to="/boards" replace />;

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
        <CardList
          className={cn({ 'square-view': cardsLayout })}
          style={{ height: `calc(100% - ${titleHeight + 39}px)` }}
        >
          {dataSearched.map(item => (
            <li key={item.id}>
              <TaskCard taskData={item} isSquareView={cardsLayout} />
            </li>
          ))}
        </CardList>
      ) : (
        <StatusMessage type={searchTerm ? 'emptySearch' : 'empty'} />
      )}
      <CreateButtons
        isOnCompleted={taskFilters[actionTypesFilters.taskFilterCompleted]}
        onDelete={handleDeleteCoompleted}
        hasCompleted={hasCompleted}
      />
    </>
  );
};

export { Category };
