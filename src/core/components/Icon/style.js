import styled from '@emotion/styled';
import { css } from '@emotion/react';
import IconSVG from './IconSVG';

const IconStyled = type =>
  styled(IconSVG(type))(
    ({ theme }) => css`
      display: block;
      height: auto;
      color: currentColor;
      fill: currentColor;
    `
  );

export default IconStyled;
