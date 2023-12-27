import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonsWrapper = styled('div')(
  ({ theme }) => css`
    align-self: flex-end;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    button {
      transition: all 0.3s;
      &.animated {
        animation: slidein 0.5s ease 1;
      }
    }

    .create-button {
      width: 133px;
      padding: 12px 15px;
    }

    .delete-completed {
      width: 133px;
      border: 1px solid ${theme.colors.red.main};
      color: ${theme.colors.red[40]};
      font-weight: 600;
      &:hover {
        background: ${theme.colors.red.main};
        color: ${theme.colors.neutral.light};
      }
    }

    @keyframes slidein {
      from {
        transform: translateY(20%);
        opacity: 0;
      }

      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  `
);
