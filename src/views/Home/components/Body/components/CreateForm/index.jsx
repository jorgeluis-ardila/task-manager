import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { useModal } from 'providers/context';
import { Button, IconButton, InputMessage } from 'core';
import { StyledButtonWrapper, StyledCreateModal } from './style';

const CreateForm = ({ initialValues, validationSchema, onSubmit, fields, title }) => {
  const { modalActions } = useModal();
  const Fields = fields();

  return (
    <StyledCreateModal>
      <h4>{title}</h4>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting, submitCount, isValid, dirty, ...props }) => {
          return (
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
                  disabled={!dirty || isSubmitting || !isValid}
                >
                  Crear
                </Button>
                <IconButton
                  type="reset"
                  variant="delete"
                  iconType="cancel"
                  disabled={isSubmitting}
                  onClick={modalActions.close}
                />
              </StyledButtonWrapper>
            </Form>
          );
        }}
      </Formik>
    </StyledCreateModal>
  );
};

CreateForm.protoTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  fields: PropTypes.element,
  title: PropTypes.string,
};

export { CreateForm };
