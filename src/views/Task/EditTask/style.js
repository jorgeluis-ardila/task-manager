import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 25px 25px 0;
    flex-grow: 1;
    .formik-form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      height: 100%;
    }
  `
);

export const FieldsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .two-fields {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    .name-field {
      font-family: ${theme.typography.family.montserrat};
      font-size: ${theme.typography.size(25)};
      font-weight: 600;
      letter-spacing: -0.3px;
      color: ${theme.colors.blue[70]};
    }
  `
);
export const ButtonsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 0 0;
    .success-button {
      min-width: 180px;
    }
  `
);
