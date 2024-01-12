import PropTypes from 'prop-types';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import ToDo from 'assets/images/to-do-list.png';
import { getPercentage } from 'utils';
import { useData } from 'providers/context';
import { Button, Icon, ProgressBar } from 'core';
import { CategoryCardWrapper, DetailContainer, NameContainer } from './style';

const CategoryCard = ({ categoryData, className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { categoryActions } = useData();
  const { name, id, isFavorite, totalTasks, completedTasks, slug } = categoryData;

  const percentage = getPercentage({
    partialValue: completedTasks,
    totalValue: totalTasks,
  });

  const handleClick = () => {
    const toPath = `${location.pathname === '/' ? '/boards/' : ''}${slug}`;
    categoryActions.open(id);
    navigate(toPath, { state: { categoryId: id, from: location } });
  };

  const handleAddFavorite = e => {
    e.stopPropagation();
    categoryActions.hightlight(id);
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
  categoryData: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export { CategoryCard };
