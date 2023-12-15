import { css } from '@emotion/react';

export const Default = ({ theme }) => css`
  label {
    font-size: ${theme.typography.size(15)};
    color: ${theme.colors.blue[70]};
    width: fit-content;
  }
  &.focused {
    label {
      color: ${theme.colors.green[50]};
    }
  }
  &.error {
    label {
      color: ${theme.colors.red[40]};
    }
  }
`;

export const Placeholder = ({ theme }) => css``;

export const Underlined = ({ theme }) => css`
  label {
    font-size: ${theme.typography.size(14)};
    color: ${theme.colors.neutral[50]};
    width: fit-content;
  }
`;
