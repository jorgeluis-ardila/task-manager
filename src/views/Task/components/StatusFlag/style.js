import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StatusWrapper = styled('div')(
  ({ theme }) => css`
    padding: 5px 15px;
    border-radius: 20px;
    border: 1px solid ${theme.colors.yellow[30]};
    background: ${theme.hexToRGB(theme.colors.yellow[10], 0.3)};
    color: ${theme.colors.yellow[40]};
    font-family: ${theme.typography.family.hauora.bold};
    font-size: ${theme.typography.size(12)};
    text-transform: uppercase;
    &.expired {
      border-color: ${theme.colors.red[20]};
      background: ${theme.hexToRGB(theme.colors.red[10], 0.3)};
      color: ${theme.colors.red[40]};
    }
    &.completed {
      border-color: ${theme.colors.green[50]};
      background: ${theme.hexToRGB(theme.colors.green[30], 0.5)};
      color: ${theme.colors.green[70]};
    }
  `
);
