import PropTypes from 'prop-types';
import { useModal } from 'providers/context';
import { BaseForm, Button, IconButton } from '..';
import { StyledButtonWrapper, StyledCreateModal } from './style';
import { CategoryFields, TaskFields } from './components';

const CreateForm = ({ initialValues, validationSchema, onSubmit, fields, title }) => {
  const { modalActions } = useModal();

  return (
    <StyledCreateModal>
      <h4>{title}</h4>
      <BaseForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        renderChildren={(isSubmitting, isValid, dirty) => (
          <>
            {fields}
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

CreateForm.CategoryFields = CategoryFields;
CreateForm.TaskFields = TaskFields;

CreateForm.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.func,
  onSubmit: PropTypes.func,
  fields: PropTypes.element,
  title: PropTypes.string,
};

export { CreateForm };
