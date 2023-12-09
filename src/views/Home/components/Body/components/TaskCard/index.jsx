import PropTypes from 'prop-types';
import cn from 'classnames';
import StyledTaskCard from './style';
import { Button, Icon, IconButton } from '../../../../../../core';
import { isExpired } from '../../../../../../utils';

const TaskCard = ({ isCompleted, name, date, category, onComplete, onOpen, onDelete }) => {
  const isTaskExpired = isExpired(date);

  const handleOpen = () => {
    onOpen();
  };
  const handleComplete = () => {
    onComplete();
  };
  const handleDelete = () => {
    onDelete();
  };

  return (
    <StyledTaskCard
      onClick={handleOpen}
      className={cn({ completed: isCompleted, expired: isTaskExpired && !isCompleted })}
    >
      <div className="state-bar" />
      <div className="task-info">
        <div className="check-box">
          <Button onClick={handleComplete}>{isCompleted && <Icon type="check" />}</Button>
        </div>
        <div className="task-data">
          <p className="task-data__name">{name}</p>
          <div className="task-data__specs">
            <span>{date}</span>
            <div></div>
            <span>{category}</span>
          </div>
        </div>
        <div className="delete-content">
          <IconButton onClick={handleDelete} iconType="delete" />
        </div>
      </div>
    </StyledTaskCard>
  );
};

TaskCard.propTypes = {
  category: PropTypes.string,
  date: PropTypes.string,
  isCompleted: PropTypes.bool,
  name: PropTypes.string,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  onOpen: PropTypes.func,
};

export { TaskCard };
