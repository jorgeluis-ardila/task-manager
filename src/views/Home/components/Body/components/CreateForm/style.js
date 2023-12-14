import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledCreateModal = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h4 {
      font-family: ${theme.typography.family.montserrat};
      font-size: ${theme.typography.size(20)};
      color: ${theme.colors.blue[60]};
      font-weight: 600;
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .two-fields {
      display: flex;
      gap: 10px;
      .form-field {
        width: 50%;
      }
    }
    .error-message {
      display: block;
      width: 100%;
      text-align: center;
    }
  `
);
export const StyledButtonWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 0 0;
    .create-button {
      min-width: 133px;
    }
  `
);
