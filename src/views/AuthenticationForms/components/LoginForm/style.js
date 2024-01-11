import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FieldsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .forgot-content {
      text-align: center;
      font-family: ${theme.typography.family.montserrat};
      color: ${theme.colors.blue[70]};
      font-weight: 500;
    }
  `
);
