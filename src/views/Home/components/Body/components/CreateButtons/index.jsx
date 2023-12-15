import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Button, IconButton, TransitionWrapper } from 'core';
import { useData, useModal } from 'providers/context';
import { useCreateForm } from '../../hooks';
import { CreateForm } from '../index';
import { StyledButtonsWrapper } from './style';

const CreateButtons = () => {
  const { data, currentCategory } = useData();
  const { modalActions } = useModal();

  const [showButtons, setShowButtons] = useState(false);
  const { getProps } = useCreateForm();
  const buttonWrapperRef = useRef(null);
  const hasData = !!data.length;
  const hasCurrentCategory = !!currentCategory;

  useEffect(() => setShowButtons(false), [currentCategory]);

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
    <StyledButtonsWrapper>
      <TransitionWrapper
        open={showButtons && !hasCurrentCategory}
        nodeRef={buttonWrapperRef}
        classNames="buttons-wrapper"
        unmountOnExit
      >
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
      {hasCurrentCategory ? (
        <Button variant="action" onClick={handleCreateTask} className="create-button animated">
          Crear Tarea
        </Button>
      ) : (
        <IconButton
          className={cn('toggle-button animated', { delete: showButtons })}
          variant={showButtons ? 'delete' : 'add'}
          iconType={showButtons ? 'cancel' : 'add'}
          onClick={handleShowButtons}
        />
      )}
    </StyledButtonsWrapper>
  );
};

export { CreateButtons };
