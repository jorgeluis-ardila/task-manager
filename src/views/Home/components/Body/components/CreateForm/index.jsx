import PropTypes from 'prop-types';
import { useModal } from 'providers/context';
import { BaseForm, Button, IconButton } from 'core';
import { StyledButtonWrapper, StyledCreateModal } from './style';

const CreateForm = ({ initialValues, validationSchema, onSubmit, fields, title }) => {
  const { modalActions } = useModal();
  const Fields = () => fields();

  return (
    <StyledCreateModal>
      <h4>{title}</h4>
      <BaseForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        renderChildren={(isSubmitting, isValid, dirty) => (
          <>
            <Fields />
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
          </>
        )}
      />
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
