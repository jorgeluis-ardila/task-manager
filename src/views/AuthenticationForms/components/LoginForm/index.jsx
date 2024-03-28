import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { messageLoginRegister, messageLoginRegisterKeys } from 'views/AuthenticationForms/constants';
import { BaseForm, Button, Field } from 'core';
import { FieldsWrapper } from './style';
import { useState } from 'react';

const LoginForm = ({ onAuth, onSendVerification, fromPath }) => {
  const [errorData, setErrorData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values, setSubmitting) => {
    const result = await onAuth(values);
    if (result.success) {
      navigate(fromPath, { replace: true });
    } else {
      setErrorData({ code: result.errorCode });
    }
    setSubmitting(false);
  };

  const handleSendEmail = () => onSendVerification();

  const handleResetPass = () => navigate('/reset-pass');

  return (
    <BaseForm
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={() =>
        object({
          email: string().email('Ingrese un correo electrónico válido').required('Requerido'),
          password: string().required('Requerido'),
        })
      }
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      renderChildren={(isSubmitting, isValid, dirty) => (
        <>
          <FieldsWrapper>
            <Field variant="placeholder" label="Correo" type="text" id="email" name="email" hasIcon />
            <Field as="password" variant="placeholder" label="Contraseña" id="password" name="password" hasIcon />
            <div className="forgot-content">
              <Button type="button" onClick={handleResetPass}>
                ¿Olvidaste tu contraseña?
              </Button>
            </div>
          </FieldsWrapper>
          {errorData?.code && (
            <p className="error-message">
              {messageLoginRegister[errorData?.code]}
              {errorData?.code === messageLoginRegisterKeys.notVerified && (
                <>
                  {' '}
                  Si no recibiste el correo da click{' '}
                  <Button className="resend-email" onClick={handleSendEmail}>
                    aquí
                  </Button>
                </>
              )}
            </p>
          )}
          <Button
            className="loggin-button"
            type="submit"
            variant="action"
            disabled={!dirty || isSubmitting || !isValid}
          >
            Iniciar Sesión
          </Button>
        </>
      )}
    />
  );
};

LoginForm.propTypes = {
  onAuth: PropTypes.func,
  onSendVerification: PropTypes.func,
  fromPath: PropTypes.string,
};

export { LoginForm };
