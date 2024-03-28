import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button, IconButton, TransitionWrapper, CreateForm } from 'core';
import { useModal } from 'providers/context';
import { useCreateForm } from 'hooks';
import { ButtonsWrapper } from './style';

const CreateButtons = ({ hasData }) => {
  const { modalActions } = useModal();

  const [showButtons, setShowButtons] = useState(false);
  const getProps = useCreateForm();
  const buttonWrapperRef = useRef(null);

  const handleCreateTask = () => {
    const formProps = getProps('task');
    modalActions.open(<CreateForm {...formProps} />, 'create');
    setShowButtons(false);
  };
  const handleCreateCategory = () => {
    const formProps = getProps('category');
    modalActions.open(<CreateForm {...formProps} />, 'create');
    setShowButtons(false);
  };
  const handleShowButtons = () => setShowButtons(prevState => !prevState);

  return (
    <ButtonsWrapper>
      <TransitionWrapper open={showButtons} nodeRef={buttonWrapperRef} classNames="buttons-wrapper" unmountOnExit>
        <div ref={buttonWrapperRef} className="inner-buttons-wrapper">
          {hasData && (
            <Button variant="action" onClick={handleCreateTask} className="create-button">
              Crear Tarea
            </Button>
          )}
          <Button variant="action" onClick={handleCreateCategory} className="create-button">
            Crear Tablero
          </Button>
        </div>
      </TransitionWrapper>
      <IconButton
        className={cn('toggle-button animated', { delete: showButtons })}
        variant={showButtons ? 'delete' : 'add'}
        iconType={showButtons ? 'cancel' : 'add'}
        onClick={handleShowButtons}
      />
    </ButtonsWrapper>
  );
};

CreateButtons.propTypes = {
  hasData: PropTypes.bool,
};

export { CreateButtons };
