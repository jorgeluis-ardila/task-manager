import { AppLogo, MainWrapper } from 'core';
import { LoadingMessage, PageWrapper } from './style';

const Loading = () => {
  return (
    <MainWrapper>
      <PageWrapper>
        <AppLogo />
        <LoadingMessage type="loading" />
      </PageWrapper>
    </MainWrapper>
  );
};
export { Loading };
