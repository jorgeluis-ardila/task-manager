import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactComponent as IntroImage } from 'assets/images/intro-img.svg';

export const LogoWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-block: 30px;
    gap: 20px;
    .app-logo {
      width: 160px;
    }
  `
);

export const IntroIMG = styled(IntroImage)(
  () => css`
    min-height: 150px;
  `
);
