import { css } from '@emotion/react';

export const Default = ({ theme }) => css`
  padding: 10px 15px;
  border-radius: 8px;
  background: ${theme.colors.neutral[0]};
  border: 1px solid ${theme.hexToRGB(theme.colors.green[80], 0.1)};
  color: ${theme.colors.neutral.dark};
`;

export const Placeholder = ({ theme }) => css``;

export const Underlined = ({ theme }) => css`
  padding: 5px 0px;
  border-radius: 0px;
  border-bottom: 2px solid ${theme.colors.neutral[30]};
  color: ${theme.colors.blue[80]};
  &.field-wrapper {
    font-size: ${theme.typography.size(16)};
    &.select {
      .menu-list {
        border-radius: 0;
      }
    }
    &.disabled {
      border: none;
    }
  }
`;
