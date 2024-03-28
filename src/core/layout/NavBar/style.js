import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Navigation = styled('nav')(
  () => css`
    padding: 0 5px 5px;
  `
);

export const NavList = styled('ul')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    height: 60px;
    border-radius: 12px;
    background: ${theme.colors.blue[80]};
  `
);

export const NavItem = styled('li')(
  ({ theme }) => css`
    .ancor {
      color: ${theme.colors.blue[60]};
      &:hover {
        color: ${theme.colors.green.main};
      }
      &.active {
        gap: 5px;
        font-family: ${theme.typography.family.hauora.semibold};
        color: ${theme.colors.blue[20]};
        filter: drop-shadow(0px 0px 15px ${theme.colors.green.main});
        &::after {
          content: '';
          display: block;
          margin: 5px auto 0;
          width: 50%;
          height: 1px;
          background: ${theme.colors.blue[20]};
        }
      }
      .icon {
        width: 22px;
      }
    }
  `
);
