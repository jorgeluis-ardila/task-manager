import { useNavigate } from 'react-router-dom';
import { useGlobalStore } from 'providers/context';
import { Body, Button, Header, MainWrapper, StatusMessage } from 'core';
import { ErrorPageWrapper } from './style';

const NotFound = () => {
  const navigate = useNavigate();
  const { error } = useGlobalStore();

  const handleBackToHome = () => navigate('/');

  return (
    <MainWrapper>
      <Header isNotFound />
      <Body>
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
