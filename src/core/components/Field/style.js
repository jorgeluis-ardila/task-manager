import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Default, Placeholder, Underlined } from './variants';

const variants = {
  default: Default,
  placeholder: Placeholder,
  underlined: Underlined,
};

export const Wrapper = styled('div', { shouldForwardProp: prop => prop !== 'variant' && prop !== 'hasIcon' })(
  ({ theme, variant, hasIcon }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
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
    &.file {
      align-self: center;
    }

    ${variant ? variants?.[variant]({ theme, hasIcon }) : ''}
  `
);
export const MessageWrapper = styled('div')(
  () => css`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    .input-message {
      flex-grow: 1;
    }
  `
);
