import PropTypes from 'prop-types';
import { getPercentage } from 'utils';
import { ProgressBar } from 'core';
import { StyledWrapper } from './style';

const BoardProgressBar = ({ currentCategory }) => {
  const currentCategorypercentage = getPercentage({
    partialValue: currentCategory?.completedTasks,
    totalValue: currentCategory?.totalTasks,
  });

  return (
    !!currentCategory && (
      <StyledWrapper>
        <ProgressBar percentage={currentCategorypercentage} />
      </StyledWrapper>
    )
  );
};

BoardProgressBar.propTypes = {
  currentCategory: PropTypes.object,
};

export { BoardProgressBar };
