import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledBody = styled('section')(
  ({ theme }) => css`
    padding: 0 5px 5px;
    flex-grow: 1;
    .inner-body {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 25px;
      border-radius: 30px;
      height: 100%;
      box-shadow: ${theme.shadows.green.dark};
      background: ${theme.colors.neutral[0]};
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          width: calc(100% - 40px);
          .edit-button {
            color: ${theme.hexToRGB(theme.colors.neutral.dark, 0.6)};
          }
        }
        .sort-button {
          background: ${theme.colors.neutral[10]};
          color: ${theme.colors.green[70]};
          box-shadow: ${theme.shadows.blue.dark};
          &:hover {
            background: ${theme.colors.green[20]};
          }
        }
      }
      .items-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  `
);

export default StyledBody;
