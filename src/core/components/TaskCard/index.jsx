import PropTypes from 'prop-types';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { isExpired } from 'utils';
import { useData, useModal } from 'providers/context';
import { Alert, Button, Icon, IconButton } from 'core';
import { TaskCardWrapper, TaskCardInfo } from './style';

const TaskCard = ({ taskData, className, isSquareView }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { modalActions } = useModal();
  const { taskActions } = useData();
  const { isCompleted, name, id, dueDate, category, slug } = taskData;
  const isTaskExpired = isExpired(dueDate);

  const handleOpen = async () => {
    const toPath = `${location.pathname === '/' ? `boards/${category.slug}/` : ''}t/${slug}`;
    await taskActions.open(id, category.id);
    navigate(toPath, { state: { from: location } });
  };
  const handleComplete = e => {
    e.stopPropagation();
    taskActions.complete(id, category.id);
  };
  const handleDelete = e => {
    e.stopPropagation();

    const handleAccept = () => taskActions.delete(id, category.id);

    modalActions.open(<Alert title="¡Oye, cuidado!" textType="deleteTask" onAccept={handleAccept} />, 'alert');
  };

  return (
    <TaskCardWrapper
      onClick={handleOpen}
      className={cn('card', className, {
        completed: isCompleted,
        expired: isTaskExpired && !isCompleted,
        'half-width': isSquareView,
      })}
    >
      <div className="state-bar" />
      <TaskCardInfo className={cn('task-info', { 'half-width': isSquareView })}>
        {!isSquareView && (
          <div className="check-box">
            <Button className="check-box-button" onClick={handleComplete}>
              {isCompleted && <Icon type="check" />}
            </Button>
          </div>
        )}
        <div className="task-data">
          <p className="task-data__name" title={name}>
            {name}
          </p>
          <div className="task-data__specs">
            <span className="task-data__date" title={dueDate}>
              {dueDate}
            </span>
            <div></div>
            <span className="task-data__category" title={category.name}>
              {category.name}
            </span>
          </div>
        </div>
        {!isSquareView && (
          <div className="delete-content">
            <IconButton className="delete-button" onClick={handleDelete} iconType="delete" />
          </div>
        )}
        {isSquareView && (
          <div className="actions-content">
            <Button className="check-box-button" onClick={handleComplete}>
              {isCompleted && <Icon type="check" />}
            </Button>
            <IconButton className="delete-button" onClick={handleDelete} iconType="delete" />
          </div>
        )}
      </TaskCardInfo>
    </TaskCardWrapper>
  );
};

TaskCard.propTypes = {
  taskData: PropTypes.object.isRequired,
  className: PropTypes.string,
  isSquareView: PropTypes.bool,
};

export { TaskCard };
