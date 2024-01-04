import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LogoWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 6%;
    height: fit-content;
    .icon {
      width: 34%;
      flex-grow: 1;
    }
    .text {
      width: 60%;
      flex-grow: 1;
    }
  `
);
