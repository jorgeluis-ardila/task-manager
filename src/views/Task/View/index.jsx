import cn from 'classnames';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useData, useModal } from 'providers/context';
import { Alert, Button, FieldValue, Icon, IconButton } from 'core';
import { TitleBar } from '../components';
import { isExpired } from 'utils';
import { ButtonsWrapper, FieldsWrapper, Wrapper } from './style';

const ViewTask = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { categorySlug } = useParams();
  const { modalActions } = useModal();
  const { currentTask, currentCategory, taskActions } = useData();
  const taskData = location.state?.taskData ?? currentTask;

  const handleEdit = () => navigate(`${location.pathname}/edit`, { state: { taskData, from: location } });

  const handleComplete = () => taskActions.complete(currentTask.id);

  const handleDelete = () => {
    const handleAccept = () => {
      taskActions.delete(currentTask.id);
      taskActions.open();
      navigate(`/c/${categorySlug}`, { replace: true });
    };

    modalActions.open(<Alert title="¡Oye, cuidado!" textType="deleteTask" onAccept={handleAccept} />, 'alert');
  };

  if (!taskData) return <Navigate to={currentCategory ? `/c/${currentCategory.slug}` : '/'} replace />;

  return (
    <>
      <TitleBar
        title={taskData.name}
        isCompleted={taskData.isCompleted}
        isExpired={isExpired(taskData.dueDate)}
        onEdit={handleEdit}
      />
      <Wrapper>
        <FieldsWrapper>
          <FieldValue label="Fecha Limite" value={taskData.dueDate} />
          <FieldValue label="Categoría" value={taskData.category.name} />
          {!currentTask?.description ? null : <FieldValue label="Descripción" value={taskData.description} />}
        </FieldsWrapper>
        <ButtonsWrapper>
          <Button
            type="button"
            variant={!taskData.isCompleted ? 'action' : 'outlined'}
            iconType="check"
            className={cn('complete-button success-button', { completed: taskData.isCompleted })}
            onClick={handleComplete}
          >
            {!taskData.isCompleted ? 'Completar' : 'Descompletar'}
            {!taskData.isCompleted && <Icon type="check" />}
          </Button>
          <IconButton type="button" variant="delete" iconType="delete" onClick={handleDelete} />
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};

export { ViewTask };
