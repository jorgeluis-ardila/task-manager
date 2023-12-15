import { css } from '@emotion/react';

export const Outlined = ({ theme }) => css`
  padding: 5px 21px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.blue[80]};
  color: ${theme.colors.blue[90]};
  font-weight: 500;
  letter-spacing: -0.24px;
  &:hover {
    background: ${theme.colors.blue[70]};
    color: ${theme.colors.neutral.light};
  }
`;

export const OutlinedDelete = ({ theme }) => css`
  ${Outlined}
  border-color: ${theme.colors.red.main};
  color: ${theme.colors.red[40]};
  &:hover {
    background: ${theme.colors.red[40]};
    color: ${theme.colors.neutral.light};
  }
`;

export const Filled = ({ theme }) => css`
  padding: 8px 20px;
  border-radius: 10px;
  background: ${theme.colors.blue[80]};
  box-shadow: ${theme.shadows.blue.dark};
  color: ${theme.colors.blue[10]};
  font-weight: 600;
  letter-spacing: -0.24px;
  &:hover {
    background: ${theme.colors.blue[70]};
  }
`;

export const Action = ({ theme }) => css`
  padding: 12px 20px;
  border-radius: 15px;
  background: ${theme.colors.green.main};
  box-shadow: ${theme.shadows.green.main};
  color: ${theme.colors.green[80]};
  font-size: ${theme.typography.size(15)};
  font-weight: 600;
  letter-spacing: -0.28px;
  &:hover {
    background: ${theme.colors.green[50]};
  }
`;

export const Delete = ({ theme }) => css`
  ${Action}
  background: ${theme.colors.red.main};
  box-shadow: ${theme.shadows.red.main};
  color: ${theme.colors.neutral.light};
  &:hover {
    background: ${theme.colors.red[40]};
  }
`;

export const Filter = props => css`
  padding: 8px 15px;
  border-radius: 15px;
  background: ${props.theme.colors.neutral[10]};
  color: ${props.theme.colors.blue[80]};
  box-shadow: ${props.theme.shadows.blue.dark};
  font-weight: 600;
  letter-spacing: -0.24px;
  &:hover {
    background: ${props.theme.colors.green[20]};
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
