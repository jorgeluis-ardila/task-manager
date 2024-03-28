import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'providers/context';
import { AuthGreet, AuthOptions, ChangeAuth, LoginForm, Wrapper } from './components';

const Login = () => {
  const location = useLocation();
  const { isLogged, authEmailPass, sendVerificationEmail } = useAuth();
  const from = location.state?.from || window.history.state?.usr?.from;
  const fromPath = from?.pathname || `/`;

  if (isLogged) return <Navigate to={`/`} replace />;

  return (
    <>
      <Wrapper>
        <AuthGreet
          heading="¡Hola!"
          text={
            <>
              Entra y continua tus tareas
              <br /> donde las dejaste
            </>
          }
        />
        <LoginForm onAuth={authEmailPass} onSendVerification={sendVerificationEmail} fromPath={fromPath} />
        <AuthOptions />
      </Wrapper>
      <ChangeAuth from={from} isLogin />
    </>
  );
};
// aB1!12345678
export { Login };
