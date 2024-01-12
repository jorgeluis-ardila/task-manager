import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from 'core';

export const FiltersWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
  `
);

export const FilterButton = styled(Button)(
  ({ theme }) => css`
    font-family: ${theme.typography.family.hauora.regular};
    font-size: ${theme.typography.size(14)};
    color: ${theme.colors.neutral[30]};
    &.active {
      font-family: ${theme.typography.family.hauora.semibold};
      color: ${theme.colors.green[70]};
    }
  `
);
