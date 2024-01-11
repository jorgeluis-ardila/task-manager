import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SectionWrapper = styled('section')(
  ({ theme }) => css`
    .items-list {
      height: auto;
      &.categories-list {
        &::before,
        &::after {
          width: 10px;
          height: 100%;
        }
        &::before {
          background: linear-gradient(
            180deg,
            ${theme.colors.neutral[0]} 0%,
            ${theme.hexToRGB(theme.colors.neutral[0], 0)} 100%
          );
          margin-left: -1px;
          ${
            '' /* top: -1px;
          margin-top: -1px;
          z-index: 2; */
          }
        }

        &::after {
          background: linear-gradient(
            180deg,
            ${theme.hexToRGB(theme.colors.neutral[0], 0)} 0%,
            ${theme.colors.neutral[0]} 100%
          );
          right: 25px;
          margin-right: -1px;
          ${
            '' /* bottom: -1px;
          margin-bottom: -1px;
          z-index: 2; */
          }
        }
      }
    }
  `
);
