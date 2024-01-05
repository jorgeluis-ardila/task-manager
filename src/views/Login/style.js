import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactComponent as IntroImage } from 'assets/images/intro-img.svg';
import { AppLogo } from 'core';

export const LoginLogo = styled(AppLogo)(
  ({ theme }) => css`
    width: 176px;
  `
);

export const IntroIMG = styled(IntroImage)(
  ({ theme }) => css`
    min-height: 170px;
  `
);

export const Wrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 25px 25px 0;
    flex-grow: 1;
    .formik-form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      flex-grow: 1;
      .error-message {
        font-size: ${theme.typography.size(12)};
        text-align: center;
        color: ${theme.colors.red.main};
        .resend-email {
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

export const FieldsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
);

export const AuthOptionsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
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
