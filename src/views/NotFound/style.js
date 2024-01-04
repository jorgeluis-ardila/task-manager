import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ErrorPageWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 25px 0;
  `
);
