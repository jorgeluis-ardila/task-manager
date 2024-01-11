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

export const Placeholder = ({ theme, hasIcon }) => css`
  position: relative;
  label {
    font-size: ${theme.typography.size(15)};
    color: ${theme.colors.neutral[40]};
    width: fit-content;
    pointer-events: none;
    position: absolute;
    left: ${hasIcon ? '33px' : '10px'};
    top: 12px;
    z-index: 1;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.focused,
  &.filled {
    label {
      font-size: ${theme.typography.size(11)};
      left: 15px;
      transform: translateY(-125%);
      background: ${theme.colors.neutral[0]};
      padding-inline: 0.4rem;
    }
    &.error {
      label {
        color: ${theme.colors.red[40]};
      }
    }
  }

  &.focused {
    label {
      color: ${theme.colors.green[50]};
    }
  }
`;

export const Underlined = ({ theme }) => css`
  label {
    font-size: ${theme.typography.size(14)};
    color: ${theme.colors.neutral[50]};
    width: fit-content;
  }
`;
