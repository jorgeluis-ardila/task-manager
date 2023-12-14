import PropTypes from 'prop-types';
import cn from 'classnames';
import StyledTitleContainer from './style';

const Title = ({ currentCategory, totalCategories }) => {
  return (
    <StyledTitleContainer>
      <p title={currentCategory?.name ?? 'Tus Tableros'}>{currentCategory?.name ?? 'Tus Tableros'}</p>
      <span className={cn('counter', { 'inner-category': !!currentCategory?.name })}>
        {currentCategory ? `${currentCategory?.completedTasks}/${currentCategory?.totalTasks}` : totalCategories}
      </span>
    </StyledTitleContainer>
  );
};

Title.propTypes = {
  currentCategory: PropTypes.object,
  totalCategories: PropTypes.number,
};

export { Title };
