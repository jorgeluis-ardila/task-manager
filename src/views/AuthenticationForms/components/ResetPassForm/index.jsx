import PropTypes from 'prop-types';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { messageLoginRegister, messageLoginRegisterKeys } from 'views/AuthenticationForms/constants';
import { BaseForm, Button, Field, IconButton } from 'core';
import { ButtonsWrapper, FieldsWrapper } from './style';
import { useState } from 'react';

const ResetPassForm = ({ onAuth, from }) => {
  const navigate = useNavigate();
  const [errorData, setErrorData] = useState(null);
  const handleSubmit = async (values, setSubmitting) => {
    const result = await onAuth(values.email);
    if (result.success) {
      navigate('/login', {
        replace: true,
        state: { from, alert: messageLoginRegister[messageLoginRegisterKeys.successReset] },
      });
    } else {
      setErrorData({ code: result.errorCode });
    }
    setSubmitting(false);
  };

  const handleCancel = () => {
    navigate(-1, {
      state: { from },
    });
  };

  return (
    <BaseForm
      initialValues={{
        email: '',
      }}
      validationSchema={() =>
        object({
          email: string().email('Ingrese un correo electrónico válido').required('Requerido'),
        })
      }
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      renderChildren={(isSubmitting, isValid, dirty, setFieldValue) => (
        <>
          <FieldsWrapper>
            <Field variant="placeholder" label="Correo" type="text" id="email" name="email" />
          </FieldsWrapper>
          {errorData?.code && <p className={cn('error-message')}>{messageLoginRegister[errorData?.code]}</p>}
          <ButtonsWrapper>
            <Button
              className="loggin-button"
              type="submit"
              variant="action"
              disabled={!dirty || isSubmitting || !isValid}
            >
              Enviar Instrucciones
            </Button>
            <IconButton variant="delete" type="button" iconType="cancel" onClick={handleCancel} />
          </ButtonsWrapper>
        </>
      )}
    />
  );
};

ResetPassForm.protoTypes = {
  onAuth: PropTypes.func,
  from: PropTypes.object,
};

export { ResetPassForm };
