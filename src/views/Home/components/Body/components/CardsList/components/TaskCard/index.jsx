import PropTypes from 'prop-types';
import cn from 'classnames';
import { isExpired } from 'utils';
import { Button, Icon, IconButton } from 'core';
import { Alert, EditForm } from '../../../index';
import StyledTaskCard from './style';

const TaskCard = ({ isCompleted, name, id, date, category, actions }) => {
  const isTaskExpired = isExpired(date);

  const handleOpen = () => {
    actions.modalActions.open(<EditForm onAccept={actions.taskActions.edit} />);
  };
  const handleComplete = e => {
    e.stopPropagation();
    actions.taskActions.complete(id);
  };
  const handleDelete = e => {
    e.stopPropagation();
    const text = () => (
      <>
        <span className="bold">¡Hey!</span> Solo quería informarte que al borrar una categoría también se eliminarán
        todas las tareas asociadas. <span className="bold">Esta acción no se puede deshacer</span>, así que asegúrate de
        haber revisado todo.
      </>
    );
    actions.modalActions.open(
      <Alert title="¡Oye, cuidado!" text={text()} onAccept={() => actions.taskActions.delete(id)} />,
      'alert'
    );
  };

  return (
    <StyledTaskCard
      onClick={handleOpen}
      className={cn('card', { completed: isCompleted, expired: isTaskExpired && !isCompleted })}
    >
      <div className="state-bar" />
      <div className="task-info">
        <div className="check-box">
          <Button onClick={handleComplete}>{isCompleted && <Icon type="check" />}</Button>
        </div>
        <div className="task-data">
          <p className="task-data__name" title={name}>
            {name}
          </p>
          <div className="task-data__specs">
            <span title={date}>{date}</span>
            <div></div>
            <span title={category}>{category}</span>
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
  id: PropTypes.string,
  actions: PropTypes.object,
};

export { TaskCard };
