import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { OutlinedVariant } from './variants';

const variants = {
  outlined: OutlinedVariant,
};

const StyledButton = styled('button', { shouldForwardProp: prop => prop !== 'variant' })(
  ({ theme, variant }) => css`
    cursor: pointer;
    ${variant ? variants?.[variant]({ theme }) : ''}
  `
);

export default StyledButton;
