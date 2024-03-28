import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Field } from 'core';

export const FieldsWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
);

export const FileField = styled(Field)(
  () => css`
    width: 70px;
  `
);
