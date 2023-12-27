import PropTypes from 'prop-types';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { isExpired } from 'utils';
import { Alert, Button, Icon, IconButton } from 'core';
import { TaskCardWrapper, TaskCardInfo } from './style';

const TaskCard = ({ taskData, actions, className }) => {
  const navigate = useNavigate();
  const { isCompleted, name, id, dueDate, category, slug } = taskData;
  const isTaskExpired = isExpired(dueDate);

  const handleOpen = () => {
    actions.taskActions.open(id);
    navigate(`t/${slug}`, { state: { taskId: id } });
  };
  const handleComplete = e => {
    e.stopPropagation();
    actions.taskActions.complete(id);
  };
  const handleDelete = e => {
    e.stopPropagation();

    const handleAccept = () => actions.taskActions.delete(id);

    actions.modalActions.open(<Alert title="¡Oye, cuidado!" textType="deleteTask" onAccept={handleAccept} />, 'alert');
  };

  return (
    <TaskCardWrapper
      onClick={handleOpen}
      className={cn('card', className, { completed: isCompleted, expired: isTaskExpired && !isCompleted })}
    >
      <div className="state-bar" />
      <TaskCardInfo className="task-info">
        <div className="check-box">
          <Button onClick={handleComplete}>{isCompleted && <Icon type="check" />}</Button>
        </div>
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
        <div className="delete-content">
          <IconButton onClick={handleDelete} iconType="delete" />
        </div>
      </TaskCardInfo>
    </TaskCardWrapper>
  );
};

TaskCard.propTypes = {
  taskData: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string,
};

export { TaskCard };
