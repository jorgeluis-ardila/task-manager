import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AletWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h4 {
      font-family: ${theme.typography.family.montserrat};
      font-size: ${theme.typography.size(20)};
      color: ${theme.colors.orange[30]};
      font-weight: 500;
      text-align: center;
      letter-spacing: -0.8px;
    }
    .message {
      padding-top: 10px;
      font-family: ${theme.typography.family.hauora.light};
      font-size: ${theme.typography.size(14)};
      letter-spacing: -0.24px;
      color: ${theme.colors.neutral[50]};
      text-align: center;
      span.bold {
        font-family: ${theme.typography.family.hauora.semibold};
      }
      span.italic {
        font-style: italic;
      }
    }
    .confirmation {
      font-family: ${theme.typography.family.hauora.medium};
      font-size: ${theme.typography.size(16)};
      letter-spacing: -0.28px;
      color: ${theme.colors.blue[60]};
      text-align: center;
    }
  `
);

export const ButtonsWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 0 0;
    .accept-button {
      min-width: 148px;
    }
  `
);
