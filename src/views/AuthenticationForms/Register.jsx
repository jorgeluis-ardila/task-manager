import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'providers/context';
import { AuthGreet, AuthOptions, ChangeAuth, RegisterForm, Wrapper } from './components';

const Register = () => {
  const location = useLocation();
  const { isLogged, createAccountEmailPass } = useAuth();
  const from = location.state?.from || window.history.state?.usr?.from;

  if (isLogged) return <Navigate to={`/`} replace />;

  return (
    <>
      <Wrapper>
        <AuthGreet
          heading="¡Bienvenido!"
          text={() => (
            <>
              Empieza a gestionar <br /> tus tareas ahora
            </>
          )}
        />
        <RegisterForm onAuth={createAccountEmailPass} from={from} />
        <AuthOptions />
      </Wrapper>
      <ChangeAuth from={from} />
    </>
  );
};

export { Register };
