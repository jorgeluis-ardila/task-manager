import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ListWrapper = styled('div', { shouldForwardProp: prop => prop !== 'height' })(
  ({ theme }) => css`
    padding: 0px 25px;
    position: relative;
    height: 100vh;
    &::before,
    &::after {
      content: '';
      display: block;
      width: calc(100% - 50px);
      height: 10px;
      position: absolute;
    }
    &::before {
      background: linear-gradient(
        180deg,
        ${theme.colors.neutral[0]} 0%,
        ${theme.hexToRGB(theme.colors.neutral[0], 0)} 100%
      );

      top: -1px;
      margin-top: -1px;
      z-index: 2;
    }

    &::after {
      background: linear-gradient(
        180deg,
        ${theme.hexToRGB(theme.colors.neutral[0], 0)} 0%,
        ${theme.colors.neutral[0]} 100%
      );
      bottom: -1px;
      margin-bottom: -1px;
      z-index: 2;
    }
    &.square-view {
      .list {
        grid-template-columns: repeat(2, calc(50% - 5px));
        display: grid;
        grid-auto-flow: row;
        grid-auto-rows: max-content;
      }
    }
  `
);
export const List = styled('ul')(
  () => css`
    height: 100%;
    padding: 10px 0;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    display: flex;
    flex-direction: column;
    gap: 10px;
    &::-webkit-scrollbar {
      display: none;
    }
    .card {
      &.half-width {
      }
    }
  `
);
