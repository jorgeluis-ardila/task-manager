import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AppLogo, StatusMessage } from 'core/components';

export const PageWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 30px;
    .app-logo {
      width: 160px;
    }
  `
);

export const LoginLogo = styled(AppLogo)(
  () => css`
    width: 176px;
  `
);

export const LoadingMessage = styled(StatusMessage)(
  () => css`
    padding: 0;
    justify-content: center;
  `
);
