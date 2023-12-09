import React from 'react';
import StyledBody from './style';
import { useStore } from '../../../../providers/context';
import { Button, IconButton } from '../../../../core';
import { Title, CategoryCard, ProgressBar, TaskCard, CreateForm } from './components';
import { getPercentage } from '../../../../utils';
import { useCreateForm } from './config';

const Body = () => {
  const { currentCategory, onOpenCategory, dataSearched, onOpenModal } = useStore();
  const formProps = useCreateForm(currentCategory ? 'createTask' : 'createCategory');
  const currentCategorypercentage = getPercentage({
    partialValue: currentCategory?.completedTasks,
    totalValue: currentCategory?.totalTasks,
  });

  const handleOpenModal = () => {
    onOpenModal(<CreateForm {...formProps} />, 'info');
  };

  return (
    <StyledBody>
      <div className="inner-body">
        <header>
          <div className="title-container">
            <Title data={currentCategory} />
            {currentCategory && <IconButton iconType="edit" className="edit-button" />}
          </div>
          <IconButton variant="filter" iconType="sort" className="sort-button" />
        </header>
        {!!currentCategory && <ProgressBar percentage={currentCategorypercentage} />}
        <ul className="items-list">
          {dataSearched.map(item => {
            if (currentCategory) {
              return (
                <TaskCard
                  key={item.id}
                  isCompleted={item.isCompleted}
                  name={item.name}
                  date={item.dueDate}
                  category={item.category.name}
                  onComplete={() => {}}
                  onDelete={() => {}}
                  onOpen={() => {}}
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
                onOpen={onOpenCategory}
                onAddFavorite={() => {}}
              />
            );
          })}
        </ul>
        <Button variant="action" onClick={handleOpenModal} className="create-task">
          {currentCategory ? 'Crear Tarea' : 'Crear Tablero'}
        </Button>
      </div>
    </StyledBody>
  );
};

export { Body };
