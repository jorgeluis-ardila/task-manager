import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 0 25px;
    height: 100%;
    flex-grow: 1;
  `
);

export const FieldsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .name-field {
      font-family: ${theme.typography.family.montserrat};
      font-size: ${theme.typography.size(25)};
      font-weight: 600;
      letter-spacing: -0.3px;
      color: ${theme.colors.blue[70]};
    }
  `
);

export const ButtonsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 0 0;
    .complete-button {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.colors.green.main};
      &:not(.completed):hover {
        border-color: ${theme.colors.green[50]};
      }
      &.completed {
        border-color: ${theme.colors.blue[80]};
        padding: 12px 20px;
        border-radius: 15px;
        font-size: ${theme.typography.size(15)};
        font-weight: 600;
      }
    }
  `
);
