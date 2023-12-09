import { Form, Formik } from 'formik';
import { useStore } from '../../../../../../providers/context';
import { Button, IconButton, InputMessage } from '../../../../../../core';
import { StyledButtonWrapper, StyledCreateModal } from './style';

const CreateForm = ({ initialValues, validationSchema, onSubmit, fields, title }) => {
  const { onCloseModal } = useStore();
  const Fields = fields();

  return (
    <StyledCreateModal>
      <h4>{title}</h4>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting, submitCount, isValid, isDirty }) => (
          <Form>
            {Fields}
            {submitCount > 0 && !isValid && (
              <InputMessage className="error-message" variant="error">
                Debes llenar todos los campos correctamente
              </InputMessage>
            )}
            <StyledButtonWrapper>
              <Button
                className="create-button"
                type="submit"
                variant="action"
                disabled={!isDirty || isSubmitting || !isValid}
              >
                Crear
              </Button>
              <IconButton
                type="reset"
                variant="delete"
                iconType="cancel"
                disabled={isSubmitting}
                onClick={onCloseModal}
              />
            </StyledButtonWrapper>
          </Form>
        )}
      </Formik>
    </StyledCreateModal>
  );
};

export { CreateForm };
