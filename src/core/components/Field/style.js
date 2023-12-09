import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledWrapper = styled('div', { shouldForwardProp: prop => prop !== 'variant' })(
  ({ theme, variant }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    label {
      font-size: ${theme.typography.size(15)};
      color: ${theme.colors.blue[70]};
      width: fit-content;
    }
    &.focused {
      label {
        color: ${theme.colors.green[50]};
      }
      .field-wrapper {
        border-color: ${theme.colors.green[50]};
      }
    }
    &.error {
      label {
        color: ${theme.colors.red[40]};
      }
      .field-wrapper {
        border-color: ${theme.colors.red[40]};
      }
    }
  `
);
export const StyledMessageWrapper = styled('div', { shouldForwardProp: prop => prop !== 'variant' })(
  ({ theme, variant }) => css`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    .input-message {
      flex-grow: 1;
    }
  `
);
