import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderWrapper = styled('header')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-inline: 25px;
    h2 {
      font-family: ${theme.typography.family.hauora.regular};
      font-size: ${theme.typography.size(25)};
      color: ${theme.colors.blue[70]};
    }
  `
);
