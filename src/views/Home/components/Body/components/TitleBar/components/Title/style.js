import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledTitleContainer = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 5px;
    max-width: calc(100% - 45px);
    * {
      transition: all 0.3s ease 0s;
    }
    p {
      font-family: ${theme.typography.family.hauora.light};
      font-size: ${theme.typography.size(25)};
      color: ${theme.colors.blue[70]};
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .counter {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4px;
      height: 23px;
      min-width: 26px;
      padding: 0px 8px 0 6px;
      border-radius: 0 20px 20px 0;
      background: ${theme.colors.green.main};
      font-family: ${theme.typography.family.montserrat};
      font-size: ${theme.typography.size(14)};
      letter-spacing: -0.39px;
      font-weight: 600;
      color: ${theme.colors.green[80]};
      &.inner-category {
        min-width: inherit;
      }
    }
  `
);

export default StyledTitleContainer;
