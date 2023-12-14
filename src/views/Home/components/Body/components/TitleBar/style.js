import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledHeader = styled('header')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 25px 0;
    .title-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      width: calc(100% - 40px);
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
