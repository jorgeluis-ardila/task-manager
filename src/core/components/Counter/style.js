import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CounterWrapper = styled('span')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px;
    height: 23px;
    min-width: 26px;
    padding: 0px 10px 0 8px;
    border-radius: 0 20px 20px 0;
    background: ${theme.colors.green.main};
    font-family: ${theme.typography.family.montserrat};
    font-size: ${theme.typography.size(14)};
    letter-spacing: -0.39px;
    font-weight: 600;
    color: ${theme.colors.green[80]};
    transition: all 0.3s ease 0s;
  `
);
