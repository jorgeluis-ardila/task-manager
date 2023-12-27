import PropTypes from 'prop-types';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import ToDo from 'assets/images/to-do-list.png';
import { getPercentage } from 'utils';
import { Button, Icon, ProgressBar } from 'core';
import { CategoryCardWrapper, DetailContainer, NameContainer } from './style';

const CategoryCard = ({ categoryData, actions, className }) => {
  const navigate = useNavigate();
  const { name, id, isFavorite, totalTasks, completedTasks, slug } = categoryData;

  const percentage = getPercentage({
    partialValue: completedTasks,
    totalValue: totalTasks,
  });

  const handleClick = () => {
    actions.open(id);
    navigate(`/c/${slug}`, { state: { categoryId: id } });
  };

  const handleAddFavorite = e => {
    e.stopPropagation();
    actions.hightlight(id);
  };

  return (
    <CategoryCardWrapper className={cn('card', className)} onClick={handleClick}>
      <NameContainer className="name-container">
        <Button onClick={handleAddFavorite}>
          <Icon type="star" className={cn({ favorite: isFavorite })} />
        </Button>
        <p>{name}</p>
      </NameContainer>
      <DetailContainer className="tasks-info">
        <div className="total-tasks">
          <img src={ToDo} alt="Task" />
          {totalTasks}
        </div>
        <ProgressBar percentage={percentage} showText />
      </DetailContainer>
    </CategoryCardWrapper>
  );
};

CategoryCard.protoTypes = {
  categoryData: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string,
};

export { CategoryCard };
