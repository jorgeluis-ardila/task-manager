import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Field } from 'core';

export const FieldsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
);

export const FileField = styled(Field)(
  ({ theme }) => css`
    width: 70px;
  `
);
