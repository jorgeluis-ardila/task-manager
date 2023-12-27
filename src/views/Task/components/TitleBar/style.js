import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderWrapper = styled('header')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 25px 25px 20px;
    h2 {
      font-family: ${theme.typography.family.hauora.regular};
      font-size: ${theme.typography.size(25)};
      color: ${theme.colors.blue[70]};
    }
    .options-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;

      .edit-button {
        color: ${theme.hexToRGB(theme.colors.neutral.dark, 0.6)};
        border-radius: 100px;
        .icon {
          width: 60%;
        }
      }
    }
  `
);
