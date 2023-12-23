import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderWrapper = styled('header')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    ${'' /* justify-content: stretch; */}
    padding: 25px 25px 0;
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

      .counter-wrapper {
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${theme.colors.neutral[50]};
        .counter {
          margin: 0;
          min-width: inherit;
          letter-spacing: 0.39px;
        }
      }
      .button-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        .edit-button {
          color: ${theme.hexToRGB(theme.colors.neutral.dark, 0.6)};
          border-radius: 100px;
          .icon {
            width: 60%;
          }
        }
      }
    }
  `
);
