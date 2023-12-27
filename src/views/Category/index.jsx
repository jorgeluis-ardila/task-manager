import { Navigate } from 'react-router-dom';
import { useData } from 'providers/context';
import { actionNamesFilters } from 'providers/context/Data/constants';
import { CardsList, CreateButtons, TaskFilters, TitleBar } from './components';

const Category = () => {
  const { dataSearched, taskActions, layout, currentCategory, filtersActions, taskFilters, categoryActions } =
    useData();

  const hasCompleted = dataSearched.some(item => item.isCompleted);

  const handleDeleteCoompleted = () => {
    filtersActions.taskFilters.all();
    categoryActions.deleteCompleted(currentCategory.id);
  };

  if (!currentCategory) return <Navigate to={`/`} replace />;

  return (
    <>
      <TitleBar
        title={currentCategory?.name}
        completedTasks={currentCategory?.completedTasks}
        totalTasks={currentCategory?.totalTasks}
      />
      <TaskFilters actions={filtersActions} filters={taskFilters} />
      <CardsList data={dataSearched} actions={taskActions} layout={layout[actionNamesFilters.layoutSquare]} />
      <CreateButtons
        isOnCompleted={taskFilters[actionNamesFilters.taskFilterCompleted]}
        onDelete={handleDeleteCoompleted}
        hasCompleted={hasCompleted}
      />
    </>
  );
};

export { Category };
