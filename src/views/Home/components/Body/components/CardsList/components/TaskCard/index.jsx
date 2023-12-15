import PropTypes from 'prop-types';
import cn from 'classnames';
import { isExpired } from 'utils';
import { Button, Icon, IconButton } from 'core';
import { DELETE_MODAL_TEXT } from '../../../../constants';
import { Alert, EditForm } from '../../../index';
import { StyledTaskCard, StyledTaskCardInfo } from './style';

const TaskCard = ({ isCompleted, name, id, date, category, actions, className }) => {
  const isTaskExpired = isExpired(date);

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
    const text = DELETE_MODAL_TEXT.task();

    const handleAccept = () => actions.taskActions.delete(id);

    actions.modalActions.open(<Alert title="¡Oye, cuidado!" text={text} onAccept={handleAccept} />, 'alert');
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
            <span className="task-data__date" title={date}>
              {date}
            </span>
            <div></div>
            <span className="task-data__category" title={category}>
              {category}
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
  category: PropTypes.string,
  date: PropTypes.string,
  isCompleted: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  actions: PropTypes.object,
  className: PropTypes.string,
};

export { TaskCard };
