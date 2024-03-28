import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LogoWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-block: 30px;
    gap: 20px;
    .app-logo {
      width: 160px;
    }
  `
);

export const ErrorPageWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 25px 0;
  `
);
