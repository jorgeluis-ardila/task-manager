import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AlertWrapper = styled('div')(
  ({ theme }) => css`
    position: absolute;
    width: 100%;
    padding: 8px 10px;
    background: ${theme.colors.blue[80]};
    color: ${theme.colors.green[20]};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s;
    &.alet-message {
      &-enter {
        opacity: 0;
        top: -100%;
      }

      &-enter-active {
        opacity: 1;
        top: 0;
      }

      &-enter-done,
      &-exit {
        opacity: 1;
        top: 0;
      }

      &-exit-active {
        opacity: 0;
        top: -100%;
      }
    }
    .icon-button {
      min-width: 20px;
      min-height: 20px;
      .icon {
        width: 60%;
      }
    }
  `
);
