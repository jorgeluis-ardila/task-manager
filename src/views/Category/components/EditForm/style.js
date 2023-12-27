import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .formik-form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .active-tasks {
        font-size: ${theme.typography.size(15)};
        font-family: ${theme.typography.family.hauora.medium};
        color: ${theme.colors.neutral[50]};
        letter-spacing: -0.2px;
        text-transform: uppercase;
        span {
          font-family: ${theme.typography.family.montserrat};
          font-weight: 600;
          color: ${theme.colors.yellow[30]};
        }
      }
      .name-field {
        font-family: ${theme.typography.family.montserrat};
        font-size: ${theme.typography.size(25)};
        font-weight: 600;
        letter-spacing: -0.3px;
        color: ${theme.colors.blue[70]};
      }
    }
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
