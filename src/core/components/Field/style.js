import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Default, Placeholder, Underlined } from './variants';

const variants = {
  default: Default,
  placeholder: Placeholder,
  underlined: Underlined,
};

export const StyledWrapper = styled('div', { shouldForwardProp: prop => prop !== 'variant' })(
  ({ theme, variant }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    &.focused {
      .field-wrapper {
        border-color: ${theme.colors.green[50]};
      }
    }
    &.error {
      .field-wrapper {
        border-color: ${theme.colors.red[40]};
      }
    }

    ${variant ? variants?.[variant]({ theme }) : ''}
  `
);
export const StyledMessageWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    .input-message {
      flex-grow: 1;
    }
  `
);
