import styled from '@emotion/styled';
import { css } from '@emotion/react';

const IconStyled = type =>
  type
    ? styled(type)(
        () => css`
          display: block;
          height: auto;
          color: currentColor;
          fill: currentColor;
        `
      )
    : null;

export default IconStyled;
