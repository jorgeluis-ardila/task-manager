import { MainWrapper, Header, Body } from 'core';
import { useData } from 'providers/context';
import { actionNamesFilters } from 'providers/context/Data/constants';
import { CardsList, CreateButtons, TaskFilters, TitleBar } from './components';

const Category = () => {
  const { dataSearched, taskActions, layout, currentCategory } = useData();

  return (
    <MainWrapper>
      <Header />
      <Body>
        <TitleBar
          title={currentCategory?.name}
          completedTasks={currentCategory?.completedTasks}
          totalTasks={currentCategory?.totalTasks}
        />
        <TaskFilters />
        <CardsList data={dataSearched} actions={taskActions} layout={layout[actionNamesFilters.layoutSquare]} />
        <CreateButtons />
      </Body>
    </MainWrapper>
  );
};

export { Category };
