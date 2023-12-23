import { Button } from 'core';
import { useModal } from 'providers/context';
import { useCreateForm } from 'hooks';
import { CreateForm } from 'core';
import { StyledButtonsWrapper } from './style';

const CreateButtons = () => {
  const { modalActions } = useModal();

  const { getProps } = useCreateForm();

  const handleCreateTask = () => {
    const formProps = getProps('task');
    modalActions.open(<CreateForm {...formProps} />, 'create');
  };

  return (
    <StyledButtonsWrapper>
      <Button variant="action" onClick={handleCreateTask} className="create-button animated">
        Crear Tarea
      </Button>
    </StyledButtonsWrapper>
  );
};

export { CreateButtons };
