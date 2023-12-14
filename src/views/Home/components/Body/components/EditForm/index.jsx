import { useState } from 'react';
import PropTypes from 'prop-types';
import { useModal } from 'providers/context';
import { Button, Field, IconButton } from 'core';
import { ActionsWrapper, ButtonsWrapper, FormWrapper, Wrapper } from './style';

const EditForm = ({ onAccept, isCategory = false }) => {
  const { modalActions } = useModal();
  const [isEditing, setIsEditing] = useState(isCategory);

  const handleAccept = () => {
    onAccept();
    modalActions.close();
  };
  const handleClose = () => modalActions.close();
  const handleEdit = () => setIsEditing(true);

  return (
    <Wrapper>
      <ActionsWrapper>
        <IconButton iconType="cancel" className="close" onClick={handleClose} />
        {!isEditing && <IconButton iconType="edit" className="edit" onClick={handleEdit} />}
      </ActionsWrapper>
      <FormWrapper>
        <input type="file" />
      </FormWrapper>
      {isEditing && (
        <ButtonsWrapper>
          <Button className="accept-button" variant="action" onClick={handleAccept}>
            Guardar Cambios
          </Button>
          <IconButton variant="delete" iconType="delete" onClick={modalActions.close} />
        </ButtonsWrapper>
      )}
    </Wrapper>
  );
};

EditForm.propTypes = {
  onAccept: PropTypes.func,
  isCategory: PropTypes.bool,
};

export { EditForm };
