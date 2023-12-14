import { css } from '@emotion/react';

export const Delete = ({ theme }) => css`
  padding: 13px;
  border-radius: 15px;
  background: ${theme.colors.red.main};
  box-shadow: ${theme.shadows.red.main};
  color: ${theme.colors.neutral.light};
  .icon {
    width: 18px;
  }
  &:hover {
    background: ${theme.colors.red[40]};
  }
`;

export const Add = ({ theme }) => css`
  padding: 13px;
  border-radius: 15px;
  background: ${theme.colors.green.main};
  box-shadow: ${theme.shadows.green.main};
  color: ${theme.colors.green[80]};
  .icon {
    width: 18px;
  }
  &:hover {
    background: ${theme.colors.green[50]};
  }
`;

export const Filter = props => css`
  padding: 5px;
  border-radius: 100%;
  background: ${props.theme.colors.neutral[10]};
  color: ${props.theme.colors.green[70]};
  box-shadow: ${props.theme.shadows.blue.dark};
  &:hover {
    background: ${props.theme.colors.green[20]};
  }
`;

export const Action = ({ theme }) => css`
  padding: 10px;
  border-radius: 100%;
  background: ${theme.colors.green.main};
  color: ${theme.colors.green[80]};
  .icon {
    width: 15px;
  }
  &:hover {
    background: ${theme.colors.green[50]};
  }
`;

export const Disabled = ({ theme }) => css`
  border-color: ${theme.hexToRGB(theme.colors.neutral[20], 0.5)};
  background: ${theme.hexToRGB(theme.colors.neutral[20], 0.5)};
  box-shadow: ${theme.shadows.blue.dark};
  color: ${theme.colors.neutral[30]};
  pointer-events: none;
  &:hover {
    background: ${theme.hexToRGB(theme.colors.neutral[20], 0.5)};
    color: ${theme.colors.neutral[30]};
  }
`;
