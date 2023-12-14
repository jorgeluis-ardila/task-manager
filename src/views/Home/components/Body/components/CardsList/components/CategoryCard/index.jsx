import PropTypes from 'prop-types';
import cn from 'classnames';
import ToDo from 'assets/images/to-do-list.png';
import { Button, Icon, ProgressBar } from 'core';
import StyledCategoryCard from './style';

const CategoryCard = ({ name, id, isFavorite, totalTasks, percentage, actions }) => {
  const handleClick = () => {
    actions.open(id);
  };

  const handleAddFavorite = e => {
    e.stopPropagation();
    actions.hightlight(id);
  };

  return (
    <StyledCategoryCard className="card" onClick={handleClick}>
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
  actions: PropTypes.func,
};

export { CategoryCard };
