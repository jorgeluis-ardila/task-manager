import React from 'react';
import StyledBody from './style';
import { useStore } from '../../../../providers/context';
import { IconButton } from '../../../../core';
import { Title } from './components/Title';
import { CategoryCard } from './components/CategoryCard';
import { getPercentage } from '../../../../utils';
import { ProgressBar } from './components/ProgressBar';

const Body = () => {
  const { currentCategory, onOpenCategory, dataSearched } = useStore();
  const percentage = getPercentage({
    partialValue: currentCategory?.completedTasks,
    totalValue: currentCategory?.totalTasks,
  });

  return (
    <StyledBody>
      <div className="inner-body">
        <header>
          <div className="title-container">
            <Title data={currentCategory} />
            {currentCategory && <IconButton type="edit" className="edit-button" />}
          </div>
          <IconButton type="sort" className="sort-button" />
        </header>
        {currentCategory && <ProgressBar percentage={percentage} />}
        <div className="items-list">
          {dataSearched.map(item => {
            if (currentCategory) return null;
            return <CategoryCard key={item.id} category={item} onClick={onOpenCategory} />;
          })}
        </div>
      </div>
    </StyledBody>
  );
};

export { Body };
