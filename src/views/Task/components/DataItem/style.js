import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ItemWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .label {
      font-size: ${theme.typography.size(14)};
      color: ${theme.colors.neutral[50]};
      width: fit-content;
    }
    .data {
      padding: 5px 0px;
      color: ${theme.colors.blue[80]};
    }
  `
);
