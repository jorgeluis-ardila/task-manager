import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SearchBarContainer = styled('div')(
  ({ theme }) => css`
    background: ${theme.colors.neutral[0]};
    border-radius: 5px;
    padding: 10px 45px 10px 10px;
    display: flex;
    height: 40px;
    gap: 10px;
    position: relative;
    box-shadow: ${theme.shadows.green.dark};
    .search-icon {
      width: 20px;
      color: ${theme.colors.orange.main};
    }
    .clear-button {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      align-self: center;
      color: ${theme.colors.neutral[70]};
      .icon {
        width: 100%;
      }
    }
  `
);

export const InputStyled = styled('input')(
  ({ theme }) => css`
    width: 100%;
    font-size: ${theme.typography.size(14)};
    &::placeholder {
      opacity: 0.6;
    }
  `
);
