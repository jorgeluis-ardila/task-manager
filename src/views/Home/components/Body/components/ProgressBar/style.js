import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledProgressBar = styled('div')(
  ({ theme, percentage, hasText }) => css`
    position: relative;
    display: flex;
    min-height: 5px;
    width: 100%;
    border-radius: 100px;
    background: ${theme.hexToRGB(theme.colors.blue[60], 0.15)};
    .progress-bar {
      border-radius: 100px;
      width: ${percentage}%;
      background: ${theme.hexToRGB(theme.colors.blue[50], 0.5)};
    }
    ${hasText && TextVariant({ theme })}
  `
);

const TextVariant = ({ theme }) => css`
  height: 25px;
  border-radius: 5px;
  .progress-bar {
    border-radius: 5px;
  }
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: ${theme.typography.family.hauora.semibold};
    font-size: ${theme.typography.size(14)};
    color: ${theme.colors.blue[80]};
  }
`;

export default StyledProgressBar;
