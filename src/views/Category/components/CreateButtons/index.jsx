import PropTypes from 'prop-types';
import { Button, CreateForm } from 'core';
import { useModal } from 'providers/context';
import { useCreateForm } from 'hooks';
import { ButtonsWrapper } from './style';

const CreateButtons = ({ isOnCompleted, onDelete, hasCompleted }) => {
  const { modalActions } = useModal();

  const { getProps } = useCreateForm();

  const handleCreateTask = () => {
    const formProps = getProps('task');
    modalActions.open(<CreateForm {...formProps} />, 'create');
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <ButtonsWrapper>
      {isOnCompleted && hasCompleted && (
        <Button variant="outlined" onClick={handleDelete} className="delete-completed animated">
          Borrar Tareas
        </Button>
      )}
      <Button variant="action" onClick={handleCreateTask} className="create-button animated">
        Crear Tarea
      </Button>
    </ButtonsWrapper>
  );
};

CreateButtons.protoTypes = {
  hasCompleted: PropTypes.bool,
  isOnCompleted: PropTypes.bool,
  onDelete: PropTypes.func,
};

export { CreateButtons };
