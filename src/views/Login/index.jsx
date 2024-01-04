import { object, string } from 'yup';
import { BaseForm, Body, Field, MainWrapper } from 'core';
import { FieldsWrapper, IntroIMG, LoginLogo, Wrapper } from './style';

const Login = () => {
  const handleSubmit = (values, setSubmitting) => {};

  return (
    <MainWrapper isLogin>
      <LoginLogo />
      <IntroIMG />
      <Body isLogin>
        <Wrapper>
          <BaseForm
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={() =>
              object({
                email: string().email('Ingrese un correo electrónico válido').required('Requerido'),
                password: string()
                  .min(8, 'Minimo 8 caracteres')
                  .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    'La contraseña debe contener al menos una mayúscula, un número y un carácter especial'
                  )
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
              </>
            )}
          />
        </Wrapper>
      </Body>
    </MainWrapper>
  );
};

export { Login };
