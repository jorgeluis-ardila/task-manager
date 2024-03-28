import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonsWrapper = styled('div')(
  () => css`
    align-self: flex-end;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    .inner-buttons-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
      position: relative;
      transform: translateY(20%);
      opacity: 0;
      transition: all 0.3s;
      &.buttons-wrapper {
        &-enter {
        }

        &-enter-active {
          opacity: 1;
          transform: translateY(0%);
        }
        &-enter-done {
        }
        &-enter-done,
        &-exit {
          opacity: 1;
          transform: translateY(0%);
        }
        &-exit {
        }

        &-exit-active {
          opacity: 0;
          transform: translateY(20%);
        }
      }
    }

    .toggle-button {
      width: 50px;
      height: 50px;
      transition: all 0.3s;
      &.animated {
        animation: slidein 0.5s ease 1;
      }
      .icon {
        width: 100%;
      }
      &.delete {
        .icon {
          width: 80%;
        }
      }
    }

    .create-button {
      width: 133px;
      padding: 12px 15px;
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
