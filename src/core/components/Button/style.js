import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Outlined, Action, Filled, Disabled, Delete, OutlinedDelete, Filter } from './variants';

const variants = {
  outlined: Outlined,
  outlinedDelete: OutlinedDelete,
  action: Action,
  delete: Delete,
  filled: Filled,
  filter: Filter,
  disabled: Disabled,
};

const StyledButton = styled('button', { shouldForwardProp: prop => prop !== 'variant' })(
  ({ theme, variant, disabled }) => css`
    cursor: pointer;
    font-family: ${theme.typography.family.montserrat};
    font-size: ${theme.typography.size(13)};
    text-align: center;
    transition: all 0.3s ease 0s;
    ${variant ? variants?.[variant]({ theme }) : ''}

    ${disabled ? variants.disabled({ theme }) : ''}
  `
);

export default StyledButton;
