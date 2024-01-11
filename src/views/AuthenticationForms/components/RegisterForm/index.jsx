import PropTypes from 'prop-types';
import cn from 'classnames';
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { messageLoginRegister, messageLoginRegisterKeys } from 'views/AuthenticationForms/constants';
import { BaseForm, Button, Field } from 'core';
import { FieldsWrapper /* FileField */ } from './style';
import { useState } from 'react';
// import { useRef } from 'react';

const RegisterForm = ({ onAuth, from }) => {
  const [errorData, setErrorData] = useState(null);
  // const fileRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (values, setSubmitting) => {
    const result = await onAuth(values);
    if (result.success) {
      navigate('/login', {
        state: { from, alert: messageLoginRegister[messageLoginRegisterKeys.successRegister] },
      });
    } else {
      setErrorData({ code: result.errorCode });
    }
    setSubmitting(false);
  };

  return (
    <BaseForm
      initialValues={{
        name: '',
        email: '',
        password: '',
        // image: '',
      }}
      validationSchema={() =>
        object({
          name: string().required('Requerido'),
          email: string().email('Ingrese un correo electrónico válido').required('Requerido'),
          password: string()
            .min(8, 'Minimo 8 caracteres')
            .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
            .matches(/[a-z]/, 'Debe contener al menos una letra minúscula')
            .matches(/[0-9]/, 'Debe contener al menos un número')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial (!@#$%&*?)')
            .required('Requerido'),
          // image: mixed()
          //   .test('fileType', 'Solo se permiten imágenes', () => {
          //     const value = fileRef?.current?.files[0];
          //     return value && ['image/jpeg', 'image/png'].includes(value.type);
          //   })
          //   .test('fileSize', 'El tamaño del archivo no debe superar 5 MB', () => {
          //     const value = fileRef?.current?.files[0];
          //     return value && value.size <= 5 * 1024 * 1024;
          //   }),
        })
      }
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      renderChildren={(isSubmitting, isValid, dirty, setFieldValue) => (
        <>
          <FieldsWrapper>
            {/* <FileField as="file" id="image" name="image" fileRef={fileRef} /> */}
            <Field variant="placeholder" label="Nombre" type="text" id="name" name="name" />
            <Field variant="placeholder" label="Correo" type="text" id="email" name="email" />
            <Field as="password" variant="placeholder" label="Contraseña" id="password" name="password" />
          </FieldsWrapper>
          {errorData?.code && <p className={cn('error-message')}>{messageLoginRegister[errorData?.code]}</p>}
          <Button
            className="loggin-button"
            type="submit"
            variant="action"
            disabled={!dirty || isSubmitting || !isValid}
          >
            Registrarse
          </Button>
        </>
      )}
    />
  );
};

RegisterForm.protoTypes = {
  onAuth: PropTypes.func,
  from: PropTypes.object,
};

export { RegisterForm };
