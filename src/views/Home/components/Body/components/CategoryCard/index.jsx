import PropTypes from 'prop-types';
import ToDo from '../../../../../../assets/images/to-do-list.png';
import StyledCategoryCard from './styles';
import { Button, Icon } from '../../../../../../core';
import { getPercentage } from '../../../../../../utils';
import { ProgressBar } from '../ProgressBar';
import cn from 'classnames';

const CategoryCard = ({ category, onClick }) => {
  const percentage = getPercentage({ partialValue: category.completedTasks, totalValue: category.totalTasks });

  const handleClick = () => {
    onClick(category.id);
  };

  return (
    <StyledCategoryCard onClick={handleClick}>
      <div className="name-container">
        <Button>
          <Icon type="star" className={cn({ favorite: category.isFavorite })} />
        </Button>
        <p>{category.name}</p>
      </div>
      <div className="task-info">
        <div className="total-tasks">
          <img src={ToDo} alt="Task" />
          {category.totalTasks}
        </div>
        <ProgressBar percentage={percentage} showText />
      </div>
    </StyledCategoryCard>
  );
};

CategoryCard.protoTypes = {
  category: PropTypes.object,
};

export { CategoryCard };
