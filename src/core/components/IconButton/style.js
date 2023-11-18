import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '../Button';

const ButtonStyled = styled(Button)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    transition: all 0.3s ease 0s;
    &:hover {
      background: ${theme.hexToRGB(theme.colors.neutral[20], 0.3)};
    }
    .icon {
      width: 80%;
    }
  `
);

export default ButtonStyled;
