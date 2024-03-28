import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';

const BaseForm = ({ validateOnMount, initialValues, validationSchema, onSubmit, renderChildren }) => {
  return (
    <Formik
      enableReinitialize
      validateOnMount={validateOnMount}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => {
        return <Form className="formik-form">{renderChildren(isSubmitting, isValid, dirty)}</Form>;
      }}
    </Formik>
  );
};

BaseForm.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.func,
  onSubmit: PropTypes.func,
  renderChildren: PropTypes.func,
  validateOnMount: PropTypes.bool,
};

export { BaseForm };
