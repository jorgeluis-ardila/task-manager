import PropTypes from 'prop-types';
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { Alert, BaseForm, Button, Field, IconButton } from 'core';
import { Overview } from '../..';
import { ButtonsWrapper } from './style';

const EditForm = ({ currentCategory, actions, onEdit }) => {
  const navigate = useNavigate();

  const handleSubmit = (values, setSubmitting) => {
    actions.categoryActions.edit(values, currentCategory.id);
    setSubmitting(false);
    onEdit(false);
  };

  const handleDelete = () => {
    const handleAccept = () => {
      actions.categoryActions.delete(currentCategory.id);
      actions.categoryActions.open();
      navigate('/boards', { replace: true });
    };

    const handleCancelDelete = () => actions.modalActions.change(<Overview isEditingEnabled />, 'edit');

    actions.modalActions.change(
      <Alert title="¡Oye, cuidado!" textType="deleteCategory" onAccept={handleAccept} onCancel={handleCancelDelete} />,
      'alert'
    );
  };

  return (
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
          <Field variant="underlined" label="Nombre" max={30} type="text" id="name" name="name" />
          <Field as="textarea" label="Descripción" variant="underlined" id="description" name="description" max={150} />
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
        </>
      )}
    />
  );
};

EditForm.protoTypes = {
  currentCategory: PropTypes.object,
  actions: PropTypes.object,
  onEdit: PropTypes.func,
};

export { EditForm };
