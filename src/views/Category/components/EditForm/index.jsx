import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { useData, useModal } from 'providers/context';
import { Alert, BaseForm, Button, IconButton } from 'core';
import { CategoryFields } from './components';
import { ActionsWrapper, ButtonsWrapper, Wrapper } from './style';

const EditForm = () => {
  const navigate = useNavigate();
  const { modalActions } = useModal();
  const { currentCategory, categoryActions } = useData();
  const [isEditing, setIsEditing] = useState(false);

  const handleClose = () => modalActions.close();
  const handleEdit = () => setIsEditing(true);

  const handleSubmit = (values, setSubmitting) => {
    categoryActions.edit(values, currentCategory.id);
    setSubmitting(false);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const handleAccept = () => {
      categoryActions.delete(currentCategory.id);
      categoryActions.open();
      navigate('/', { replace: true });
    };

    const handleCancelDelete = () => modalActions.change(<EditForm isEditingEnabled />, 'edit');

    modalActions.change(
      <Alert title="¡Oye, cuidado!" textType="deleteCategory" onAccept={handleAccept} onCancel={handleCancelDelete} />,
      'alert'
    );
  };

  return (
    <Wrapper>
      <ActionsWrapper>
        <IconButton iconType="cancel" className="close" onClick={handleClose} />
        {!isEditing && <IconButton iconType="edit" className="edit" onClick={handleEdit} />}
      </ActionsWrapper>
      <BaseForm
        validateOnMount
        initialValues={{
          name: currentCategory?.name,
          description: currentCategory?.description,
        }}
        validationSchema={() =>
          object({
            name: string().min(3, 'Minimo 3 caracteres').max(30, 'Maximo 30 caracteres').required('Requerido'),
            description: string().max(150, 'Maximo 150 caracteres'),
          })
        }
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        renderChildren={(isSubmitting, isValid, dirty) => (
          <>
            <CategoryFields isEditing={isEditing} currentCategory={currentCategory} />
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
                  onClick={handleDelete}
                />
              </ButtonsWrapper>
            )}
          </>
        )}
      />
    </Wrapper>
  );
};

export { EditForm };
