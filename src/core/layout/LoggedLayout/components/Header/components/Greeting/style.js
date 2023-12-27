import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GreetingContainer = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .edit-profile {
      background: ${theme.colors.neutral[0]};
      color: ${theme.colors.orange.main};
      &:hover {
        background: ${theme.colors.orange.main};
        color: ${theme.colors.neutral[0]};
      }
    }
  `
);

export const UserInfo = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 12px;
    .back-button {
      width: 20px;
      .icon {
        width: 100%;
        color: ${theme.colors.orange.main};
      }
    }
    .image {
      width: 47px;
      height: 47px;
    }
    .greet {
      font-family: ${theme.typography.family.hauora.extrabold};
      font-size: ${theme.typography.size(25)};
      color: ${theme.colors.blue[70]};
      letter-spacing: -1px;
    }
  `
);
