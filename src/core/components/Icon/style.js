import styled from '@emotion/styled';
import { css } from '@emotion/react';
import iconNames from './iconsList';

const IconStyled = type =>
  type
    ? styled(iconNames[type])(
        ({ theme }) => css`
          display: block;
          height: auto;
          color: currentColor;
          fill: currentColor;
        `
      )
    : null;

export default IconStyled;
