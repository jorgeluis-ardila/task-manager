import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    gap: 10px;
    padding: 0 25px;
  `
);
