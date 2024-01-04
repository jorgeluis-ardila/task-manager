import { useNavigate } from 'react-router-dom';
import { Body, Button, Header, MainWrapper, StatusMessage } from 'core';
import { ErrorPageWrapper } from './style';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate('/');

  return (
    <MainWrapper>
      <Header isNotFound />
      <Body>
        <ErrorPageWrapper>
          <StatusMessage type="notFound" />
          <Button variant="filled" onClick={handleBackToHome}>
            Volver al inicio
          </Button>
        </ErrorPageWrapper>
      </Body>
    </MainWrapper>
  );
};
export { NotFound };
