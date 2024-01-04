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
    gap: 10px;
    padding: 25px 25px 0;
    flex-grow: 1;
    .formik-form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      height: 100%;
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
