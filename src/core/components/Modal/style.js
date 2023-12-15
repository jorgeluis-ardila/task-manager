import { css } from '@emotion/react';
import styled from '@emotion/styled';

const typeColor = {
  info: theme => theme.colors.blue[50],
  create: theme => theme.colors.green.main,
  edit: theme => theme.colors.yellow.main,
  alert: theme => theme.colors.orange.main,
};

const ModalStyled = styled('div', { shouldForwardProp: prop => prop !== 'type' })(
  ({ theme, type }) => css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${theme.hexToRGB(theme.colors.blue[80], 0.8)};
    &.background {
      &-enter {
        background: transparent;
        .modal-container {
          opacity: 0;
          bottom: -100%;
        }
      }

      &-enter-active {
        background: ${theme.hexToRGB(theme.colors.blue[80], 0.8)};
        transition: background 200ms;
        .modal-container {
          opacity: 1;
          bottom: 20px;
        }
      }
      &-enter-done {
        background: ${theme.hexToRGB(theme.colors.blue[80], 0.8)};
      }
      &-enter-done,
      &-exit {
        .modal-container {
          opacity: 1;
          bottom: 20px;
        }
      }
      &-exit {
        background: ${theme.hexToRGB(theme.colors.blue[80], 0.8)};
      }

      &-exit-active {
        background: transparent;
        transition: background 200ms;
        .modal-container {
          opacity: 0;
          bottom: -100%;
        }
      }
    }

    .modal-container {
      box-sizing: border-box;
      position: relative;
      width: 90%;
      max-width: 500px;
      transition: all 0.3s;
      box-shadow: ${theme.shadows.green.dark2};
      border-radius: 15px;
      &--changed {
        bottom: 20px;
      }
      &::before {
        content: '';
        display: block;
        border-radius: 15px 15px 0px 0px;
        width: 100%;
        height: 10px;
        background: ${type ? typeColor[type](theme) : null};
      }
      .inner-modal-container {
        position: relative;
        padding: 30px 25px;
        background: ${theme.colors.neutral[10]};
        border-radius: 0px 0px 15px 15px;
      }
    }
  `
);

export default ModalStyled;
