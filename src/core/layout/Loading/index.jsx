import { MainWrapper } from 'core';
import { LoadingMessage, LoginLogo, PageWrapper } from './style';

const Loading = () => {
  return (
    <MainWrapper>
      <PageWrapper>
        <LoginLogo />
        <LoadingMessage type="loading" />
      </PageWrapper>
    </MainWrapper>
  );
};
export { Loading };
