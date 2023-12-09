import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Error } from './variants';

const variants = {
  error: Error,
};

export const StyledInputMessage = styled('span', { shouldForwardProp: prop => prop !== 'variant' })(
  ({ theme, variant }) => css`
    font-size: ${theme.typography.size(12)};
    color: ${theme.colors.blue[70]};
    text-align: right;
    padding: 0 5px;
    ${variant ? variants?.[variant]({ theme }) : ''}
  `
);
