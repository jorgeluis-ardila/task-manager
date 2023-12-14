import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
);
export const ActionsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-button {
      width: 24px;
      height: 24px;
      border-radius: 100%;
      padding: 7px;
      &.edit {
        padding: 6px;
        color: ${theme.colors.neutral.dark};
      }
      &.close {
        color: ${theme.colors.orange.main};
      }
      .icon {
        width: 100%;
      }
    }
  `
);
export const FormWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 9px;
  `
);
export const ButtonsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 0 0;
    .accept-button {
      min-width: 160px;
    }
  `
);
