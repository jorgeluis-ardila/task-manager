import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FieldsWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
);

export const ButtonsWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 0 0;
  `
);
