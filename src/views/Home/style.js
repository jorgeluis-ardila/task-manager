import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SectionWrapper = styled('section')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    &:first-of-type {
      padding: 25px 0 0;
    }
    &:not(&:first-of-type) {
      flex-grow: 1;
    }
    .items-list {
      height: calc(100% - 74px);
    }

    .progress-container {
      padding-inline: 25px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .see-all {
      width: fit-content;
      align-self: flex-end;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-right: 30px;
      font-family: ${theme.typography.family.montserrat};
      font-weight: 600;
      font-size: ${theme.typography.size(16)};
      color: ${theme.colors.neutral[60]};
      transition: all 0.3s ease 0s;
      &:hover {
        gap: 15px;
        margin-right: 25px;
      }
      .icon {
        color: ${theme.colors.orange.main};
      }
    }
  `
);

export const Progress = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 15px;
    border-radius: 20px;
    background: ${theme.colors.blue[90]};
    hr {
      width: 85%;
      height: 1px;
      align-self: center;
      background: ${theme.colors.blue[80]};
    }
    .inner-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 35px;
      &.daily {
        flex-direction: column;
        gap: 10px;
      }
      .couter {
        .number {
          display: flex;
          align-items: center;
          gap: 5px;
          .icon {
            width: 30px;
            color: ${theme.colors.green[30]};
          }
          p {
            font-family: ${theme.typography.family.montserrat};
            font-size: ${theme.typography.size(25)};
            font-weight: 600;
            color: ${theme.colors.green.main2};
          }
        }
        .text {
          margin-top: 5px;
          font-family: ${theme.typography.family.hauora.medium};
          color: ${theme.colors.blue[10]};
        }
      }
      .daily-task {
        display: flex;
        align-items: center;
        gap: 5px;
        p {
          font-family: ${theme.typography.family.hauora.semibold};
          color: ${theme.colors.blue[10]};
        }
        .counter {
          margin-top: 0;
        }
      }
      .progress-bar {
        width: 65%;
        .bar {
          background: ${theme.hexToRGB(theme.colors.green[40], 0.2)};
          .text {
            color: ${theme.colors.green[40]};
          }
          &--front {
            background: ${theme.colors.green.main};
            .text {
              color: ${theme.colors.green[80]};
            }
          }
        }
      }
    }
  `
);

export const CategoriesWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-inline: 15px;
    position: relative;
    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 10px;
      height: 100%;
      z-index: 2;
      top: 0;
    }
    &::before {
      background: linear-gradient(
        90deg,
        ${theme.colors.neutral[0]} 0%,
        ${theme.hexToRGB(theme.colors.neutral[0], 0)} 100%
      );
      left: 15px;
    }

    &::after {
      background: linear-gradient(
        90deg,
        ${theme.hexToRGB(theme.colors.neutral[0], 0)} 0%,
        ${theme.colors.neutral[0]} 100%
      );
      right: 15px;
      margin-right: -1px;
    }

    .categories-list {
      width: 100%;
      padding: 10px;
      .swiper-slide {
        height: auto;
      }
    }
    .swiper-button {
      min-width: 25px;
      min-height: 25px;
      position: absolute;
      z-index: 3;
      top: 50%;
      transform: translateY(-50%);
      color: ${theme.colors.orange.main};
      &-prev {
        left: 0;
      }
      &-next {
        right: 0px;
      }
      &-disabled {
        display: none;
        pointer-events: none;
        color: ${theme.colors.neutral[40]};
      }
      .icon {
        width: 60%;
      }
    }
  `
);
export const Message = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 25px 25px;
    p {
      text-align: center;
    }
    .message-hightligth {
      font-family: ${theme.typography.family.hauora.bold};
      font-size: ${theme.typography.size(18)};
      color: ${theme.colors.orange[40]};
      letter-spacing: -0.44px;
    }
    .message-description {
      font-family: ${theme.typography.family.montserrat};
      font-size: ${theme.typography.size(14)};
      font-weight: 500;
      color: ${theme.colors.neutral[50]};
      letter-spacing: -0.5px;
    }
  `
);
