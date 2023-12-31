import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MessageWrapper = styled('div')(
  ({ theme }) => css`
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .image-wrapper {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .message-wrapper {
      p {
        text-align: center;
      }
      .message-hightligth {
        font-family: ${theme.typography.family.montserrat};
        font-size: ${theme.typography.size(25)};
        color: ${theme.colors.blue[70]};
      }
      .message-description {
        font-size: ${theme.typography.size(15)};
        color: ${theme.colors.neutral[50]};
      }
    }
  `
);
