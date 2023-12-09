import PropTypes from 'prop-types';
import cn from 'classnames';
import ToDo from '../../../../../../assets/images/to-do-list.png';
import StyledCategoryCard from './style';
import { Button, Icon } from '../../../../../../core';
import { ProgressBar } from '../ProgressBar';

const CategoryCard = ({ name, id, isFavorite, totalTasks, percentage, onOpen, onAddFavorite }) => {
  const handleClick = () => {
    onOpen(id);
  };

  const handleAddFavorite = (e) => {
    e.stopPropagation();
    onAddFavorite();
  };

  return (
    <StyledCategoryCard onClick={handleClick}>
      <div className="name-container">
        <Button onClick={handleAddFavorite}>
          <Icon type="star" className={cn({ favorite: isFavorite })} />
        </Button>
        <p>{name}</p>
      </div>
      <div className="tasks-info">
        <div className="total-tasks">
          <img src={ToDo} alt="Task" />
          {totalTasks}
        </div>
        <ProgressBar percentage={percentage} showText />
      </div>
    </StyledCategoryCard>
  );
};

CategoryCard.protoTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  isFavorite: PropTypes.string,
  totalTasks: PropTypes.string,
  percentage: PropTypes.string,
  onOpen: PropTypes.func,
  onAddFavorite: PropTypes.func,
};

export { CategoryCard };
