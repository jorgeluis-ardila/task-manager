import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CardList = styled('ul')(
  ({ theme }) => css`
    padding: 0px 25px;
    height: 100vh;
    overflow: auto;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 10px;
      background: linear-gradient(
        180deg,
        ${theme.colors.neutral[0]} 0%,
        ${theme.hexToRGB(theme.colors.neutral[0], 0)} 100%
      );
      position: sticky;
      top: -1px;
      margin-top: -1px;
      z-index: 2;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 10px;
      background: linear-gradient(
        180deg,
        ${theme.hexToRGB(theme.colors.neutral[0], 0)} 0%,
        ${theme.colors.neutral[0]} 100%
      );
      position: sticky;
      bottom: -1px;
      margin-bottom: -1px;
      z-index: 2;
    }
    .card {
      margin-bottom: 10px;
    }
  `
);
