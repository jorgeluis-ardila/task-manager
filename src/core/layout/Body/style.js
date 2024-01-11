import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BodyWrapper = styled('section')(
  ({ theme }) => css`
    padding: 0 5px 5px;
    flex-grow: 1;
    height: calc(100% - 237px);
    &.login {
      height: calc(100% - 320px);
    }
    .inner-body {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0 0 25px;
      border-radius: 30px;
      height: 100%;
      box-shadow: ${theme.shadows.green.dark};
      background: ${theme.colors.neutral[0]};
      position: relative;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  `
);
