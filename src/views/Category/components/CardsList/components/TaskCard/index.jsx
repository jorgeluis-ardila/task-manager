import PropTypes from 'prop-types';
import cn from 'classnames';
import { isExpired } from 'utils';
import { Button, Icon, IconButton } from 'core';
import { Alert, EditForm } from '../../../Body/components/index';
import { StyledTaskCard, StyledTaskCardInfo } from './style';

const TaskCard = ({ taskData, actions, className }) => {
  const { isCompleted, name, id, dueDate, category } = taskData;
  const isTaskExpired = isExpired(dueDate);

  const handleOpen = () => {
    actions.taskActions.open(id);
    actions.modalActions.open(<EditForm />, 'edit');
  };
  const handleComplete = e => {
    e.stopPropagation();
    actions.taskActions.complete(id);
  };
  const handleDelete = e => {
    e.stopPropagation();

    const handleAccept = () => actions.taskActions.delete(id);

    actions.modalActions.open(
      <Alert
        title="¡Oye, cuidado!"
        text={() => (
          <>
            <span className="bold">¡Hey!</span> Solo quería informarte que luego de borrar una tarea no se podrá
            recuperar. <span className="bold">Esta acción no se puede deshacer</span>, así que asegúrate de haber
            revisado todo.
          </>
        )}
        onAccept={handleAccept}
      />,
      'alert'
    );
  };

  return (
    <StyledTaskCard
      onClick={handleOpen}
      className={cn('card', className, { completed: isCompleted, expired: isTaskExpired && !isCompleted })}
    >
      <div className="state-bar" />
      <StyledTaskCardInfo className="task-info">
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
      </StyledTaskCardInfo>
    </StyledTaskCard>
  );
};

TaskCard.propTypes = {
  taskData: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string,
};

export { TaskCard };
