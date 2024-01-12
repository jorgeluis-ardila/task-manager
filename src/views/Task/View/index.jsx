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

  const handleEdit = () => navigate(`${location.pathname}/edit`, { state: { from: location?.state?.from } });

  const handleComplete = () => taskActions.complete(currentTask.id, currentTask.category.id);

  const handleDelete = () => {
    const handleAccept = () => {
      taskActions.delete(currentTask.id, currentTask.category.id);
      taskActions.open();
      navigate(`/boards/${categorySlug}`, { replace: true });
    };

    modalActions.open(<Alert title="¡Oye, cuidado!" textType="deleteTask" onAccept={handleAccept} />, 'alert');
  };

  if (!currentTask) return <Navigate to={currentCategory ? `/boards/${currentCategory.slug}` : '/boards'} replace />;

  return (
    <>
      <TitleBar
        title={currentTask.name}
        isCompleted={currentTask.isCompleted}
        isExpired={isExpired(currentTask.dueDate)}
        onEdit={handleEdit}
      />
      <Wrapper>
        <FieldsWrapper>
          <FieldValue label="Fecha Limite" value={currentTask.dueDate} />
          <FieldValue label="Categoría" value={currentTask.category.name} />
          {!currentTask?.description ? null : <FieldValue label="Descripción" value={currentTask.description} />}
        </FieldsWrapper>
        <ButtonsWrapper>
          <Button
            type="button"
            variant={!currentTask.isCompleted ? 'action' : 'outlined'}
            iconType="check"
            className={cn('complete-button success-button', { completed: currentTask.isCompleted })}
            onClick={handleComplete}
          >
            {!currentTask.isCompleted ? 'Completar' : 'Descompletar'}
            {!currentTask.isCompleted && <Icon type="check" />}
          </Button>
          <IconButton type="button" variant="delete" iconType="delete" onClick={handleDelete} />
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};

export { ViewTask };
