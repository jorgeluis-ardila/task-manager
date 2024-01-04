import PropTypes from 'prop-types';
import { useModal } from 'providers/context';
import { getPercentage } from 'utils';
import { AditionalFilters, Counter, IconButton, ProgressBar } from 'core';
import { Overview } from '../Overview';
import { HeaderWrapper } from './style';
import { forwardRef } from 'react';

const TitleBar = forwardRef(({ title, completedTasks, totalTasks }, ref) => {
  const { modalActions } = useModal();

  const currentCategorypercentage = getPercentage({
    partialValue: completedTasks,
    totalValue: totalTasks,
  });

  const handleEditCategory = () => {
    modalActions.open(<Overview />, 'edit');
  };

  const handleOpenFilters = () => {
    modalActions.open(<AditionalFilters isCategory />, 'info');
  };

  return (
    <HeaderWrapper ref={ref}>
      <h2 title={title}>{title}</h2>
      <div className="options-container">
        <div className="counter-wrapper">
          <p>TAREAS</p> <Counter isCategory total={totalTasks} current={completedTasks} />
        </div>
        <div className="button-wrapper">
          <IconButton iconType="details" className="edit-button" onClick={handleEditCategory} />
          <IconButton variant="filter" iconType="filters" className="sort-button" onClick={handleOpenFilters} />
        </div>
      </div>
      <ProgressBar percentage={currentCategorypercentage} />
    </HeaderWrapper>
  );
});

TitleBar.propTypes = {
  title: PropTypes.string,
  completedTasks: PropTypes.number,
  totalTasks: PropTypes.number,
};

export { TitleBar };
