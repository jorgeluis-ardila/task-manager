import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledCategoryCard = styled('div')(
  ({ theme }) => css`
    background: ${theme.colors.neutral[0]};
    border-radius: 20px;
    overflow: hidden;
    box-shadow: ${theme.shadows.green.dark};
    cursor: pointer;

    .name-container {
      display: flex;
      flex-direction: column;
      gap: 13px;
      background: ${theme.colors.green[20]};
      padding: 15px 10px;
      button {
        width: fit-content;
      }
      .icon {
        width: 16px;
        color: ${theme.colors.blue[60]};
        opacity: 0.35;
        &.favorite {
          opacity: 1;
          color: ${theme.colors.yellow.main};
        }
      }
      p {
        color: ${theme.colors.blue[80]};
        font-family: ${theme.typography.family.hauora.medium};
        font-size: ${theme.typography.size(20)};
      }
    }
    .task-info {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 10px;
      .total-tasks {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: ${theme.colors.green.main};
        position: relative;
        padding: 0px 8px 0px 30px;
        min-width: 55px;
        height: 25px;
        border-radius: 8px;
        font-family: ${theme.typography.family.montserrat};
        font-size: ${theme.typography.size(14)};
        font-weight: 600;
        img {
          position: absolute;
          left: -3px;
          top: 0;
          height: 100%;
        }
      }
    }
  `
);

export default StyledCategoryCard;
