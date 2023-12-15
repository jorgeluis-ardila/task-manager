import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';

const BaseForm = ({ initialValues, validationSchema, onSubmit, renderChildren }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting, submitCount, isValid, dirty }) => (
        <Form className="formik-form">{renderChildren(isSubmitting, isValid, dirty)}</Form>
      )}
    </Formik>
  );
};

BaseForm.protoTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  renderChildren: PropTypes.func,
};

export { BaseForm };
