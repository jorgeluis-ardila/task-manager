import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { useAuth } from 'providers/context';
import { BaseForm, Body, Button, Field, IconButton, MainWrapper } from 'core';
import { AuthOptionsWrapper, FieldsWrapper, IntroIMG, LoginLogo, Wrapper } from './style';
import { messageLoginRegister, messageLoginRegisterKeys } from 'views/constants';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLogged, authEmailPass, sendVerificationEmail } = useAuth();
  const [errorData, setErrorData] = useState(null);
  const from = location.state?.from;
  const fromPath = from?.pathname || `/`;

  const handleSubmit = async (values, setSubmitting) => {
    const result = await authEmailPass(values);
    if (result.success) {
      navigate(fromPath, { replace: true });
    } else {
      // console.log('Error:', result.errorCode);
      setErrorData({ code: result.errorCode });
    }
    setSubmitting(false);
  };

  const handleSendEmail = () => {
    sendVerificationEmail();
  };

  if (isLogged) return <Navigate to={`/`} state={{ from: location }} replace />;

  return (
    <MainWrapper isLogin>
      <LoginLogo />
      <IntroIMG />
      <Body isLogin>
        <Wrapper>
          <div className="greet">
            <h2>¡Hola!</h2>
            <p>Empieza a gestionar tus tareas ahora</p>
          </div>
          <BaseForm
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={() =>
              object({
                email: string().email('Ingrese un correo electrónico válido').required('Requerido'),
                password: string()
                  // .min(8, 'Minimo 8 caracteres')
                  // .matches(
                  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  //   'La contraseña debe contener al menos una mayúscula, un número y un carácter especial'
                  // )
                  .required('Requerido'),
              })
            }
            onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
            renderChildren={(isSubmitting, isValid, dirty) => (
              <>
                <FieldsWrapper>
                  <Field variant="underlined" label="Correo" type="text" id="email" name="email" />
                  <Field variant="underlined" label="Contraseña" type="password" id="password" name="password" />
                </FieldsWrapper>
                {errorData?.code && (
                  <p className="error-message">
                    {messageLoginRegister[errorData?.code]}
                    {errorData?.code === messageLoginRegisterKeys.notVerified && (
                      <>
                        {' '}
                        Si no recibiste el correo da click{' '}
                        <span className="resend-email" onClick={handleSendEmail}>
                          aquí
                        </span>
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
          <AuthOptionsWrapper>
            <p>Ó</p>
            <div className="buttons">
              <IconButton className="google-auth-button" variant="action" iconType="google" />
            </div>
          </AuthOptionsWrapper>
        </Wrapper>
      </Body>
    </MainWrapper>
  );
};
// aB1!12345678
export { Login };
