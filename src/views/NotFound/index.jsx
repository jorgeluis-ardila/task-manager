import { useNavigate } from 'react-router-dom';
import { useAuth, useGlobalStore } from 'providers/context';
import { AppLogo, Body, Button, Header, MainWrapper, StatusMessage } from 'core';
import { ErrorPageWrapper, LogoWrapper } from './style';

const NotFound = () => {
  const navigate = useNavigate();
  const { error } = useGlobalStore();
  const { isLogged } = useAuth();

  const handleBackToHome = () => navigate('/');

  return (
    <MainWrapper>
      {isLogged ? (
        <Header isNotFound />
      ) : (
        <LogoWrapper>
          <AppLogo />
        </LogoWrapper>
      )}
      <Body className="unlogged-error">
        <ErrorPageWrapper>
          <StatusMessage type={error ? 'error' : 'notFound'} />
          <Button variant="filled" onClick={handleBackToHome}>
            Volver al inicio
          </Button>
        </ErrorPageWrapper>
      </Body>
    </MainWrapper>
  );
};
export { NotFound };
