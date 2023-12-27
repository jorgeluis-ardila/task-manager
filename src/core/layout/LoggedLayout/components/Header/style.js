import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderWrapper = styled('header')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 35px 30px 25px;
  `
);
