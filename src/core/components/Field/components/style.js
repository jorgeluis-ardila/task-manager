import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Default, Placeholder, Underlined } from './variants';

const variants = {
  default: Default,
  placeholder: Placeholder,
  underlined: Underlined,
};

export const FieldWrapper = styled('div', { shouldForwardProp: prop => prop !== 'variant' })(
  ({ theme, variant }) => css`
    display: inline-block;
    position: relative;
    &.field-wrapper {
      &.textarea {
        max-height: 100px;
        overflow-y: auto;
      }
      &.select {
        cursor: pointer;
      }
      &.disabled {
        cursor: default;
        &.select {
          .icon-button {
            display: none;
          }
        }
      }
      &.password {
        display: flex;
        align-items: center;
        .showPass {
          min-width: 20px;
          min-height: 20px;
          height: 20px;
          .icon {
            width: 13px;
          }
        }
      }
      &.file {
        position: relative;
        padding-bottom: 13px;
        input {
          display: none;
        }
        figure {
          border-radius: 100%;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
            aspect-ratio: 1/1;
            object-fit: cover;
          }
        }
        .icon-button {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          background: ${theme.colors.yellow.main};
          .icon {
            width: 50%;
            color: ${theme.colors.neutral.dark};
          }
        }
      }
    }
    ${variant ? variants[variant]({ theme }) : ''}
  `
);

export const StyledInput = styled('input')(
  ({ theme }) => css`
    width: 100%;
    color: currentColor;
    position: relative;
    &::-webkit-calendar-picker-indicator {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      color: transparent;
      background: 0 0;
      margin: 0;
      opacity: 0;
      pointer-events: auto;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button,
    &::-webkit-clear-button {
      -webkit-appearance: none;
      display: none;
    }
    &::-webkit-datetime-edit-month-field {
      padding: 0;
    }
    &::-webkit-datetime-edit-day-field {
      padding: 0;
    }
    &::-webkit-datetime-edit-year-field {
      padding: 0;
    }
    &::-webkit-datetime-edit-fields-wrapper {
      padding: 0;
    }
    &::placeholder {
      opacity: 0.6;
    }
  `
);

export const StyledTextArea = styled('textarea')(
  ({ theme }) => css`
    width: 100%;
    color: currentColor;
    resize: none;
    &::placeholder {
      opacity: 0.6;
    }
  `
);

export const StyledSelectValue = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    color: currentColor;
    .current-value {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .icon-button {
      min-width: 18px;
      max-width: 18px;
      min-height: 18px;
      max-height: 18px;
      .icon {
        width: 60%;
      }
    }
    input {
      opacity: 0;
      position: absolute;
      pointer-events: none;
    }
  `
);

export const StyledSelectMenu = styled('ul')(
  ({ theme }) => css`
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 1000;
    border-radius: 8px;
    background: ${theme.colors.neutral[0]};
    color: ${theme.colors.neutral.dark};
    border: 1px solid ${theme.hexToRGB(theme.colors.green[80], 0.1)};
    box-shadow: ${theme.shadows.blue.dark};
    &:focus {
      border-color: ${theme.colors.green[50]};
    }
  `
);

export const StyledSelectMenuItem = styled('li')(
  ({ theme }) => css`
    font-size: ${theme.typography.size(14)};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 10px 12px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:after {
      content: '';
      display: block;
      width: calc(100% - 12px);
      height: 1px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      background: ${theme.hexToRGB(theme.colors.green[80], 0.1)};
    }
    &:last-of-type {
      &::after {
        display: none;
      }
    }
    &:hover {
      background: ${theme.hexToRGB(theme.colors.green[40], 0.2)};
    }
  `
);
