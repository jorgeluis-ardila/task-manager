import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MessageWrapper = styled('div')(
  ({ theme }) => css`
    padding: 25px 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    flex-grow: 1;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    @media screen and (min-height: 830px) {
      justify-content: center;
    }
    .image-wrapper {
      width: 100%;
      max-width: 300px;
      @media screen and (min-height: 830px) {
        order: 1;
      }
      svg {
        width: 100%;
        height: auto;
      }
    }
    .message-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      @media screen and (min-height: 830px) {
        order: 2;
      }
      p {
        text-align: center;
      }
      .message-hightligth {
        font-family: ${theme.typography.family.hauora.semibold};
        font-size: ${theme.typography.size(22)};
        color: ${theme.colors.green[70]};
        letter-spacing: -0.44px;
      }
      .message-description {
        font-family: ${theme.typography.family.montserrat};
        font-size: ${theme.typography.size(16)};
        font-weight: 500;
        color: ${theme.colors.neutral[50]};
        letter-spacing: -0.5px;
      }
    }
  `
);
