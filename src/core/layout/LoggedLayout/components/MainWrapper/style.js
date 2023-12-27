import { css } from '@emotion/react';
import styled from '@emotion/styled';

const MainWrapper = styled('main')(
  ({ theme }) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vmin;
    max-height: 100vmax;
    height: 100%;
    margin: 0 auto;
    background: ${`linear-gradient(0deg, ${theme.hexToRGB(theme.colors.green[10], 0.6)} 0%, ${theme.hexToRGB(
      theme.colors.green[10],
      0.6
    )} 100%), ${theme.colors.neutral[0]}`};
    @media screen and (max-width: 768px) {
      max-width: 500px;
    }
  `
);

export default MainWrapper;
