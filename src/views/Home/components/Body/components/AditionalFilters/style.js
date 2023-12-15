import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, IconButton } from 'core';

export const MainWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
  `
);

export const Section = styled('section')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 0;
    &:first-of-type {
      padding-top: 0;
      border-bottom: 1px solid ${theme.colors.neutral[30]};
    }
    &:last-of-type {
      padding-bottom: 0;
    }
    &.layout {
      align-items: center;
      .filter-button {
        width: 40px;
        height: 40px;
      }
    }
    .title {
      font-family: ${theme.typography.family.montserrat};
      font-weight: 600;
      font-size: ${theme.typography.size(16)};
      letter-spacing: 0.3px;
      color: ${theme.colors.blue[60]};
      text-align: center;
      text-transform: uppercase;
    }
  `
);

export const FiltersWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    ${'' /* flex-direction: column; */}
    gap: 15px;
  `
);

export const FilterButton = styled(Button)(
  ({ theme }) => css`
    display: flex;
    gap: 10px;
    width: fit-content;
    font-family: ${theme.typography.family.hauora.regular};
    font-size: ${theme.typography.size(14)};
    &.active {
      font-family: ${theme.typography.family.hauora.semibold};
      background: ${theme.hexToRGB(theme.colors.green.main, 0.7)};
      color: ${theme.colors.green[70]};
    }
  `
);

export const FilterIconButton = styled(IconButton)(
  ({ theme }) => css`
    display: flex;
    gap: 10px;
    width: fit-content;
    font-family: ${theme.typography.family.hauora.regular};
    font-size: ${theme.typography.size(14)};
    .icon {
      width: 60%;
    }
    &.active {
      font-family: ${theme.typography.family.hauora.semibold};
      background: ${theme.hexToRGB(theme.colors.green.main, 0.7)};
      color: ${theme.colors.green[70]};
    }
  `
);
