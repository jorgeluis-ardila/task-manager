import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FieldWrapper = styled('div')(
  ({ theme }) => css`
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    background: ${theme.colors.neutral[0]};
    border: 1px solid ${theme.hexToRGB(theme.colors.green[80], 0.1)};
    position: relative;
    &.field-wrapper {
      &--textarea {
        min-height: 44px;
        max-height: 100px;
        overflow-y: auto;
      }
    }
  `
);

export const StyledInput = styled('input')(
  ({ theme }) => css`
    width: 100%;
    color: ${theme.colors.neutral.dark};
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
    ::-webkit-datetime-edit-fields-wrapper {
      padding: 0;
    }
  `
);

export const StyledTextArea = styled('textarea')(
  ({ theme }) => css`
    width: 100%;
    min-height: 60px;
    color: ${theme.colors.neutral.dark};
    resize: none;
  `
);

export const StyledSelectValue = styled('div')(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    position: relative;
    .current-value {
      min-height: 22px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
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
