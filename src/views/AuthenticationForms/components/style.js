import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 25px 25px 0;
    flex-grow: 1;
    .formik-form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 80%;
      .error-message {
        font-family: ${theme.typography.family.hauora.semibold};
        font-size: ${theme.typography.size(12)};
        text-align: center;
        color: ${theme.colors.red.main};
        button.resend-email {
          cursor: pointer;
          font-family: ${theme.typography.family.hauora.semibold};
          color: ${theme.colors.green[70]};
        }
      }
      .loggin-button {
        width: fit-content;
        align-self: center;
      }
    }
  `
);

export const AuthGreetWrapper = styled('div')(
  ({ theme }) => css`
    h2 {
      font-family: ${theme.typography.family.montserrat};
      font-size: ${theme.typography.size(28)};
      font-weight: 700;
      color: ${theme.colors.blue[70]};
      letter-spacing: -1.05px;
      text-align: center;
      margin-bottom: 10px;
    }
    p {
      text-align: center;
      font-family: ${theme.typography.family.hauora.regular};
      font-size: ${theme.typography.size(16)};
      color: ${theme.colors.neutral[40]};
    }
  `
);

export const AuthOptionsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
    padding-top: 10px;
    p {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: ${theme.typography.family.montserrat};
      font-size: ${theme.typography.size(13)};
      color: ${theme.colors.neutral[40]};
      &::before,
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: ${theme.colors.neutral[20]};
      }
    }
    .buttons {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  `
);

export const ChangeOption = styled('p')(
  ({ theme }) => css`
    font-family: ${theme.typography.family.hauora.regular};
    color: ${theme.colors.neutral[40]};
    font-size: ${theme.typography.size(14)};
    text-align: center;
    button {
      font-family: ${theme.typography.family.hauora.semibold};
      font-size: inherit;
      color: ${theme.colors.orange[30]};
    }
  `
);
