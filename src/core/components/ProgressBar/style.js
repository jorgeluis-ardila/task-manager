import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledProgressBar = styled('div')(
  ({ theme, percentage, hasText }) => css`
    position: relative;
    display: flex;
    min-height: 5px;
    width: 100%;
    border-radius: 100px;
    * {
      transition: all 0.3s ease 0s;
    }
    .bar {
      border-radius: 100px;
      overflow: hidden;
      z-index: 1;
      width: 100%;
      background: ${theme.hexToRGB(theme.colors.blue[60], 0.15)};
      &--front {
        background: ${theme.hexToRGB(theme.colors.blue[50], 0.5)};
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        clip-path: inset(0 ${percentage}% 0 0);
        -webkit-clip-path: inset(0 ${percentage}% 0 0);
        transition: clip-path 1s linear;
      }
    }
    ${hasText && TextVariant({ theme, percentage })}
  `
);

const TextVariant = ({ theme }) => css`
  height: 25px;
  border-radius: 5px;
  .bar {
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    font-family: ${theme.typography.family.hauora.semibold};
    font-size: ${theme.typography.size(14)};
    color: ${theme.colors.blue[80]};
  }
`;

export default StyledProgressBar;
