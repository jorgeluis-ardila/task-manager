import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonsWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 0 0;
    .accept-button {
      min-width: 160px;
    }
  `
);
