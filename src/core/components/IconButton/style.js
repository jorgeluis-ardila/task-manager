import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '../Button';
import { Action, Add, Delete, Disabled, Filter } from './variants';

const variants = {
  filter: Filter,
  delete: Delete,
  add: Add,
  action: Action,
  disabled: Disabled,
};

const ButtonStyled = styled(Button, { shouldForwardProp: prop => prop !== 'variant' })(
  ({ theme, variant, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    min-height: 30px;
    border-radius: 100%;
    transition: all 0.3s ease 0s;
    &:hover {
      background: ${theme.hexToRGB(theme.colors.neutral[20], 0.3)};
    }
    .icon {
      width: 80%;
    }
    ${variant ? variants?.[variant]({ theme }) : ''}

    ${disabled ? variants.disabled({ theme }) : ''}
  `
);

export default ButtonStyled;
