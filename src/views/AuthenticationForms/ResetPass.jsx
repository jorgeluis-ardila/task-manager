import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'providers/context';
import { AuthGreet, ResetPassForm, Wrapper } from './components';

const ResetPass = () => {
  const location = useLocation();
  const { isLogged, sendRecoveryEmail } = useAuth();
  const from = location.state?.from;

  if (isLogged) return <Navigate to={`/`} replace />;

  return (
    <>
      <Wrapper>
        <AuthGreet
          heading="¿Olvidaste tu clave?"
          text={<>Ingresa el correo con el que te registrarte y te enviaremos las instrucciones.</>}
        />
        <ResetPassForm onAuth={sendRecoveryEmail} from={from} />
      </Wrapper>
    </>
  );
};

export { ResetPass };
