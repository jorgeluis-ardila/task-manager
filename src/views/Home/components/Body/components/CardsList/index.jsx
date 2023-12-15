import cn from 'classnames';
import { getPercentage } from 'utils';
import { useData, useModal } from 'providers/context';
import { TaskCard, CategoryCard } from './components';
import { StyledCardList } from './style';
import { TaskFilters } from '..';
import { actionNamesFilters } from 'providers/context/DataContext/constants';

const CardsList = () => {
  const { modalActions } = useModal();
  const { currentCategory, dataSearched, categoryActions, taskActions, layout } = useData();

  return (
    <>
      {currentCategory && <TaskFilters />}
      <StyledCardList className="items-list">
        {dataSearched.map(item => {
          if (currentCategory) {
            return (
              <TaskCard
                key={item.id}
                isCompleted={item.isCompleted}
                id={item.id}
                name={item.name}
                date={item.dueDate}
                category={item.category.name}
                actions={{
                  taskActions,
                  modalActions,
                }}
                className={cn({ 'half-width': layout[actionNamesFilters.layoutSquare] })}
              />
            );
          }
          return (
            <CategoryCard
              key={item.id}
              name={item.name}
              id={item.id}
              isFavorite={item.isFavorite}
              totalTasks={item.totalTasks}
              percentage={getPercentage({
                partialValue: item.completedTasks,
                totalValue: item.totalTasks,
              })}
              actions={categoryActions}
              className={cn({ 'half-width': layout[actionNamesFilters.layoutSquare] })}
            />
          );
        })}
      </StyledCardList>
    </>
  );
};

export { CardsList };
