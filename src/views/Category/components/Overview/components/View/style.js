import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FieldsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .name-field {
      font-family: ${theme.typography.family.montserrat};
      font-size: ${theme.typography.size(25)};
      font-weight: 600;
      letter-spacing: -0.3px;
      color: ${theme.colors.blue[70]};
    }
  `
);
