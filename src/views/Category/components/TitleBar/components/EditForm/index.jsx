import { useState } from 'react';
import PropTypes from 'prop-types';
import { useData, useModal } from 'providers/context';
import { BaseForm, Button, IconButton } from 'core';
import { useEditFormContent } from '../../../hooks';
import { ActionsWrapper, ButtonsWrapper, Wrapper } from './style';

const EditForm = ({ isEditingEnabled = false }) => {
  const { modalActions } = useModal();
  const { currentTask } = useData();
  const { getProps } = useEditFormContent();

  const [isEditing, setIsEditing] = useState(isEditingEnabled);
  const type = currentTask ? 'task' : 'category';

  const handleClose = () => modalActions.close();
  const handleEdit = () => setIsEditing(true);

  const contentProps = getProps(type);
  const Content = contentProps.content;

  return (
    <Wrapper>
      <ActionsWrapper>
        <IconButton iconType="cancel" className="close" onClick={handleClose} />
        {!isEditing && <IconButton iconType="edit" className="edit" onClick={handleEdit} />}
      </ActionsWrapper>
      <BaseForm
        {...contentProps.form}
        renderChildren={(isSubmitting, isValid, dirty) => (
          <>
            <Content isEditing={isEditing} />
            {isEditing && (
              <ButtonsWrapper>
                <Button
                  className="accept-button"
                  type="submit"
                  variant="action"
                  disabled={!dirty || isSubmitting || !isValid}
                >
                  Guardar Cambios
                </Button>
                <IconButton
                  type="button"
                  variant="delete"
                  iconType="delete"
                  disabled={isSubmitting}
                  onClick={contentProps.handleDelete}
                />
              </ButtonsWrapper>
            )}
          </>
        )}
      />
    </Wrapper>
  );
};

EditForm.propTypes = {
  onAccept: PropTypes.func,
  isEditingEnabled: PropTypes.bool,
};

export { EditForm };
